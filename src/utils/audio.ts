let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Metallic coin flip chime (rising frequency with highpass filter)
 */
export function playCoinFlipSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Highpass filter for metallic ring
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(1400, now);

    // Rising frequency chime (800Hz -> 2400Hz)
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(2400, now + 0.15);
    osc.frequency.exponentialRampToValueAtTime(1800, now + 0.35);

    // Gain envelope
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.4);
  } catch {
    // Audio contexts can fail gracefully on un-interacted tabs
  }
}

/**
 * Three sequential damped percussive impacts simulating landing on wood
 */
export function playCoinLandSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const delays = [0, 0.08, 0.15];
    const freqs = [320, 260, 210];
    const volumes = [0.22, 0.12, 0.05];

    delays.forEach((delay, idx) => {
      const hitTime = now + delay;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freqs[idx], hitTime);
      osc.frequency.exponentialRampToValueAtTime(80, hitTime + 0.07);

      gain.gain.setValueAtTime(volumes[idx], hitTime);
      gain.gain.exponentialRampToValueAtTime(0.001, hitTime + 0.07);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(hitTime);
      osc.stop(hitTime + 0.08);
    });
  } catch {
    // Graceful silence
  }
}

/**
 * Soft singing bell / meditation bowl tone for reflection
 */
export function playBellSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const oscHarmonic = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(528, now); // Solfeggio 528Hz frequency

    oscHarmonic.type = 'sine';
    oscHarmonic.frequency.setValueAtTime(1056, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.15, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

    osc.connect(gain);
    oscHarmonic.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    oscHarmonic.start(now);
    osc.stop(now + 1.9);
    oscHarmonic.stop(now + 1.9);
  } catch {
    // Graceful silence
  }
}

// Web Audio API Synthesizer for FiveM Cinematic Trailer Sound Effects
// 100% self-contained, no external audio files required

class SoundEngine {
  private ctx: AudioContext | null = null;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // 1. Sub Bass Trailer Drop
  playBassDrop() {
    try {
      const ctx = this.initCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      const now = ctx.currentTime;

      // Frequency drop from 160Hz to 32Hz
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(32, now + 1.2);

      // Volume envelope
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.8, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 1.5);
    } catch (e) {
      console.error(e);
    }
  }

  // 2. Gunshot & Heavy Reverb
  playGunshot() {
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;

      // Noise buffer for blast
      const bufferSize = ctx.sampleRate * 0.8;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(3000, now);
      filter.frequency.exponentialRampToValueAtTime(300, now + 0.4);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.9, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      // Punch oscillator
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.15);

      oscGain.gain.setValueAtTime(0.8, now);
      oscGain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.connect(oscGain);
      oscGain.connect(ctx.destination);

      noise.start(now);
      osc.start(now);
      noise.stop(now + 0.7);
      osc.stop(now + 0.3);
    } catch (e) {
      console.error(e);
    }
  }

  // 3. Twin Turbo & Car Rev
  playTurbo() {
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;

      // Engine tone
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(90, now);
      osc.frequency.exponentialRampToValueAtTime(380, now + 0.5);
      osc.frequency.linearRampToValueAtTime(110, now + 0.9);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.4, now + 0.5);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);

      // Turbo blow-off valve hiss
      const bufferSize = ctx.sampleRate * 0.5;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const bandpass = ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.setValueAtTime(3200, now + 0.5);
      bandpass.Q.setValueAtTime(4, now + 0.5);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.001, now);
      noiseGain.gain.setValueAtTime(0.001, now + 0.5);
      noiseGain.gain.linearRampToValueAtTime(0.5, now + 0.58);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 1.0);

      osc.connect(gain);
      gain.connect(ctx.destination);

      noise.connect(bandpass);
      bandpass.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      osc.start(now);
      noise.start(now);
      osc.stop(now + 1.2);
      noise.stop(now + 1.2);
    } catch (e) {
      console.error(e);
    }
  }

  // 4. Police Radio Yelp / Siren
  playSiren() {
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      // Yelp siren sweep
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.linearRampToValueAtTime(1100, now + 0.25);
      osc.frequency.linearRampToValueAtTime(650, now + 0.5);
      osc.frequency.linearRampToValueAtTime(1200, now + 0.75);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.3, now + 0.05);
      gain.gain.setValueAtTime(0.3, now + 0.75);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.0);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 1.05);
    } catch (e) {
      console.error(e);
    }
  }

  // 5. Heartbeat Tension Riser
  playRiser() {
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;

      // Thump 1
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.frequency.setValueAtTime(75, now);
      osc1.frequency.exponentialRampToValueAtTime(25, now + 0.2);
      gain1.gain.setValueAtTime(0.6, now);
      gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.3);

      // Thump 2
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.frequency.setValueAtTime(80, now + 0.25);
      osc2.frequency.exponentialRampToValueAtTime(28, now + 0.45);
      gain2.gain.setValueAtTime(0.01, now);
      gain2.gain.setValueAtTime(0.7, now + 0.25);
      gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.25);
      osc2.stop(now + 0.55);

      // High frequency riser pitch
      const riser = ctx.createOscillator();
      const riserGain = ctx.createGain();
      riser.type = 'sawtooth';
      riser.frequency.setValueAtTime(200, now + 0.3);
      riser.frequency.exponentialRampToValueAtTime(1400, now + 1.4);

      riserGain.gain.setValueAtTime(0.001, now);
      riserGain.gain.setValueAtTime(0.01, now + 0.3);
      riserGain.gain.linearRampToValueAtTime(0.2, now + 1.3);
      riserGain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);

      riser.connect(riserGain);
      riserGain.connect(ctx.destination);

      riser.start(now + 0.3);
      riser.stop(now + 1.55);
    } catch (e) {
      console.error(e);
    }
  }

  // Click UI Feedback sound
  playClick() {
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.07);
    } catch (e) {
      // quiet fallback
    }
  }
}

export const soundFx = new SoundEngine();

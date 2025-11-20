import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative w-full h-[85vh] overflow-hidden">
      {/* 3D Spline cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Readability overlays (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/10 to-slate-900/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto h-full max-w-6xl px-6 flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur border border-white/15 text-white/90 mb-6">
            <span className="text-sm">🎮 Casual Games • 📱 Mobile • ✨ Art Direction</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
            Playful worlds. Precise craft.
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-100/90 max-w-2xl">
            I’m an Art Director shaping charming, character‑driven visuals for top‑grossing casual mobile titles. I blend quirky personality with production‑ready pipelines, from concept to live ops.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="inline-flex items-center rounded-xl bg-pink-500 hover:bg-pink-400 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-pink-500/30 transition">
              See Selected Work
            </a>
            <a href="#about" className="inline-flex items-center rounded-xl bg-white/10 hover:bg-white/20 text-white px-5 py-3 text-sm font-semibold backdrop-blur transition border border-white/15">
              About & Process
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

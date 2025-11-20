function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Hi, I’m an Art Director for playful mobile games</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Over a decade crafting approachable, character‑led visuals that drive retention and revenue. I lead cross‑disciplinary teams, establish art bibles, build scalable pipelines, and ship content fast without sacrificing charm.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                'Art Bible & Style Guides',
                'Character & Creature Design',
                'UI/UX for F2P',
                'VFX & Juicy Feedback',
                'Live Ops & Seasonal Events',
                'Storefront & Monetization Assets',
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-slate-200">
                  <span className="inline-block h-2 w-2 rounded-full bg-pink-400"></span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-6">
              <h3 className="text-white font-semibold">Process at a glance</h3>
              <ol className="mt-4 space-y-4 text-slate-300 text-sm">
                <li>
                  <span className="font-semibold text-white">1. Define the feel</span> — metaphors, tone, player fantasy, pillars, mood boards.
                </li>
                <li>
                  <span className="font-semibold text-white">2. Prototype the charm</span> — characters, juice, motion, moment‑to‑moment fun.
                </li>
                <li>
                  <span className="font-semibold text-white">3. Systemize & scale</span> — art bible, file hygiene, tooling, outsource‑ready kits.
                </li>
                <li>
                  <span className="font-semibold text-white">4. Ship & iterate</span> — AB test creatives, respond to data, keep delight alive.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

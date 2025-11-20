import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Pocket Critters',
    role: 'Art Direction • Character Design • UI',
    desc: 'Cozy creature‑collector with expressive idle animations and juicy feedback loops.',
    cover: 'https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?q=80&w=1600&auto=format&fit=crop',
    tags: ['Character', 'UI', 'Brand'],
  },
  {
    title: 'Bubble Bash!',
    role: 'Art Direction • VFX • Monetization Assets',
    desc: 'Satisfying pop FX, collectible cosmetics, seasonal events artwork and store polish.',
    cover: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1600&auto=format&fit=crop',
    tags: ['VFX', 'Monetization', 'Live Ops'],
  },
  {
    title: 'Puzzle Parade',
    role: 'Art Direction • Level Themes • Marketing',
    desc: 'Vibrant modular tilesets, character hosts, and playful brand kit for UA creatives.',
    cover: 'https://images.unsplash.com/photo-1520975922284-9e0ce8273a60?q=80&w=1600&auto=format&fit=crop',
    tags: ['Tileset', 'Marketing', 'Brand'],
  },
];

function Work() {
  return (
    <section id="work" className="relative py-20 bg-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">A peek at playful projects I’ve led across casual and hyper‑casual, with a focus on character, clarity, and conversion.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-pink-400/40 transition shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.cover} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-white/10 text-white border border-white/15 backdrop-blur">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="text-pink-300/90 text-sm">{p.role}</p>
                <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;

import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3">
            <a href="#home" className="font-semibold tracking-tight">Art Director</a>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-200">
              <a className="hover:text-white" href="#work">Work</a>
              <a className="hover:text-white" href="#about">About</a>
              <a className="hover:text-white" href="#contact">Contact</a>
            </nav>
            <a href="#contact" className="inline-flex items-center rounded-lg bg-pink-500 hover:bg-pink-400 text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-pink-500/30 transition">Get in touch</a>
          </div>
        </div>
      </header>

      {/* Sections */}
      <main className="relative">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Art Director Portfolio</p>
          <p>Crafted with a playful, professional vibe</p>
        </div>
      </footer>
    </div>
  )
}

export default App

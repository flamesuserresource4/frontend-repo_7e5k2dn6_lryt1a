import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // This demo just simulates sending; wire to backend later if needed
      await new Promise(r => setTimeout(r, 800));
      setStatus('Thanks! I\'ll get back to you soon.');
    } catch (e) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something delightful</h2>
          <p className="mt-2 text-slate-300">Available for full‑time or consulting. Based in GMT, open to remote.</p>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 grid gap-4">
          <input required type="text" placeholder="Your name" className="w-full rounded-xl bg-slate-800/70 border border-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400" />
          <input required type="email" placeholder="Email" className="w-full rounded-xl bg-slate-800/70 border border-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400" />
          <textarea required rows="5" placeholder="Project details" className="w-full rounded-xl bg-slate-800/70 border border-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400" />
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <button className="inline-flex items-center rounded-xl bg-pink-500 hover:bg-pink-400 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-pink-500/30 transition" type="submit">Send Inquiry</button>
            <p className="text-sm text-slate-300">{status}</p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;

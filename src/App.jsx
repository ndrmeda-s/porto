import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Reveal = ({ children }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
    {children}
  </motion.div>
)

function App() {
  const [index, setIndex] = useState(0)
  const logos = [
    { name: 'Termux', type: 'svg', color: '#ffffff', path: "M1.2 5.2h21.6v21.6H1.2V5.2zm2 2v17.6h17.6V7.2H3.2zm4.8 4.8l4.8 4.8-4.8 4.8-1.4-1.4 3.4-3.4-3.4-3.4 1.4-1.4zm4.8 8.2h6.4v2H12.8v-2z" },
    { name: 'Linux', type: 'img', src: "https://cdn.simpleicons.org/linux/ffffff" }
  ]

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % logos.length), 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black text-slate-400 font-sans selection:bg-white/20">
      
      {/* NAV */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto border-b border-white/5 sticky top-0 bg-black/90 backdrop-blur-z-50">
        <div className="text-lg text-white font-black tracking-tighter font-mono">ndrmeda</div>
        <div className="flex gap-4 text-[9px] font-bold uppercase tracking-widest text-white/40">
          <a href="#skill">Skill</a><a href="#proyek">Proyek</a><a href="#gallery">Visual</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-8 py-20 text-center min-h-[80vh] flex flex-col justify-center items-center">
        <div className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase tracking-[0.3em] mb-8">Informatics Student</div>
        <h1 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter uppercase mb-6">
          CODE <span className="text-white/20">&</span> <br/> SECURITY
        </h1>
        <p className="text-slate-500 text-sm md:text-lg max-w-md mx-auto mb-10">Cybersecurity & Visual Identity.</p>
        <div className="flex gap-4">
          <a href="#proyek" className="px-8 py-3 bg-white text-black font-bold rounded-xl text-xs">Proyek</a>
          <button className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl text-xs">Kontak</button>
        </div>
      </section>

      {/* SKILLSET (PARE PARE / 2 KOLOM) */}
      <section id="skill" className="px-4 py-24 max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-xl font-bold text-white mb-12 text-center uppercase tracking-widest italic">Skillset</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { t: "Security", i: ['Ip-Tracer', 'Seeker', 'Nmap', 'Sqlmap', 'Metasploit'] },
              { t: "Design", i: ['Photopea', 'Inkscape', 'Alight Motion', 'Hypic'] },
              { t: "Env", i: ['Termux', 'Git'] },
              { t: "Photography", i: ['Gcam', 'Lightroom', 'Snapseed', 'Ld'] }
            ].map((s, i) => (
              <div key={i} className="w-[calc(50%-6px)] md:w-[calc(25%-10px)] p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl transition-all hover:border-white/20">
                <h3 className="text-white font-bold text-xs mb-3 uppercase tracking-tighter">{s.t}</h3>
                <div className="flex flex-wrap gap-1">
                  {s.i.map(item => <span key={item} className="text-[8px] text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PROYEK (PARE PARE / 2 KOLOM) */}
      <section id="proyek" className="px-4 py-24 bg-[#050505]">
        <Reveal>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-xl font-bold text-white mb-12 uppercase tracking-widest italic">Proyek</h2>
            <div className="flex flex-wrap gap-3 text-left">
              <div className="w-[calc(50%-6px)] md:w-[calc(50%-10px)] p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl transition-all hover:border-white/20">
                <h3 className="text-white font-bold text-[10px] md:text-xl mb-2">Media Downloader</h3>
                <p className="text-slate-600 text-[8px] md:text-sm line-clamp-2">Python scraping tools.</p>
              </div>
              <div className="w-[calc(50%-6px)] md:w-[calc(50%-10px)] p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl transition-all hover:border-white/20">
                <h3 className="text-white font-bold text-[10px] md:text-xl mb-2">Food Packaging</h3>
                <p className="text-slate-600 text-[8px] md:text-sm line-clamp-2">Visual identity design.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* GALLERY (PARE PARE / 2 KOLOM) */}
      <section id="gallery" className="px-4 py-24 bg-black">
        <Reveal>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-12 text-center uppercase tracking-widest italic">Visual Archive</h2>
            <div className="flex flex-wrap gap-3">
              {['28','31','33','30'].map((num) => (
                <div key={num} className="w-[calc(50%-6px)] md:w-[calc(25%-10px)] aspect-[4/5] rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 group">
                  <img src={`/gallery/image_${num}.png`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Work" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="py-20 text-center border-t border-white/5 bg-black">
        <p className="text-slate-800 text-[8px] font-mono tracking-[0.5em] uppercase">Built with Termux</p>
      </footer>
    </div>
  )
}

export default App

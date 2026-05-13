import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// --- REVEAL ANIMATION ---
const Reveal = ({ children }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
    {children}
  </motion.div>
)

function App() {
  const [index, setIndex] = useState(0)
  
  // LOGO SISA 2 (Python Dihapus)
  const logos = [
    { name: 'Termux', type: 'svg', color: '#ffffff', path: "M1.2 5.2h21.6v21.6H1.2V5.2zm2 2v17.6h17.6V7.2H3.2zm4.8 4.8l4.8 4.8-4.8 4.8-1.4-1.4 3.4-3.4-3.4-3.4 1.4-1.4zm4.8 8.2h6.4v2H12.8v-2z" },
    { name: 'Linux', type: 'img', src: "https://cdn.simpleicons.org/linux/ffffff" }
  ]

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % logos.length), 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black text-slate-400 font-sans selection:bg-white/20 overflow-x-hidden">
      
      {/* --- 1. NAV BAR (FAVICON STYLE) --- */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto border-b border-white/5 sticky top-0 bg-black/90 backdrop-blur-md z-50">
        <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center group cursor-pointer">
          <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:scale-110" fill="black">
            <path d="M1.2 5.2h21.6v21.6H1.2V5.2zm2 2v17.6h17.6V7.2H3.2zm4.8 4.8l4.8 4.8-4.8 4.8-1.4-1.4 3.4-3.4-3.4-3.4 1.4-1.4zm4.8 8.2h6.4v2H12.8v-2z" />
          </svg>
        </div>
        <div className="flex gap-4 text-[9px] font-bold uppercase tracking-widest text-white/40">
          <a href="#skill" className="hover:text-white transition-colors">Skill</a>
          <a href="#proyek" className="hover:text-white transition-colors">Proyek</a>
          <a href="#gallery" className="hover:text-white transition-colors">Visual</a>
        </div>
      </nav>

      {/* --- 2. HERO SECTION --- */}
      <section className="px-8 py-20 text-center min-h-[80vh] flex flex-col justify-center items-center">
        <div className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase tracking-[0.3em] mb-8">Informatics Student</div>
        <h1 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter uppercase mb-6">
          CODE <span className="text-white/20">&</span> <br/> SECURITY
        </h1>
        <p className="text-slate-500 text-sm md:text-lg max-w-md mx-auto mb-10 italic">Cybersecurity & Visual Identity.</p>
        <div className="flex gap-4">
          <a href="#proyek" className="px-8 py-3 bg-white text-black font-bold rounded-xl text-xs active:scale-95 transition-all">Proyek</a>
          <button className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl text-xs active:scale-95 transition-all">Kontak</button>
        </div>
      </section>

      {/* --- 3. TENTANG SAYA (YANG TADI ILANG) --- */}
      <section id="tentang" className="px-8 py-32 bg-[#080808] border-y border-white/5">
        <Reveal>
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-12">
            <div className="relative w-28 h-28 md:w-36 md:h-36">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -90, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-[#111111] border border-white/10 rounded-3xl flex items-center justify-center p-8"
                >
                  {logos[index].type === 'img' ? (
                    <img src={logos[index].src} className="w-14 md:w-20 grayscale" alt="logo" />
                  ) : (
                    <svg viewBox="0 0 24 24" className="w-14 md:w-20" fill={logos[index].color}><path d={logos[index].path}/></svg>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">/ Tentang Saya</h2>
              <p className="text-slate-400 text-base md:text-2xl leading-relaxed max-w-2xl mx-auto font-medium">
                Halo, saya Muhammad Adil Keysa Andra. Sebagai mahasiswa informatika, saya aktif mengeksplorasi cyber security, tools open-source, dan otomasi sistem.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* --- 4. SKILLSET (2 COLUMNS) --- */}
      <section id="skill" className="px-4 py-32 max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-xl font-bold text-white mb-16 text-center uppercase tracking-widest italic">Skillset</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {[
              { t: "Security", i: ['Ip-Tracer', 'Seeker', 'Nmap', 'Sqlmap', 'Metasploit'] },
              { t: "Design", i: ['Photopea', 'Inkscape', 'Alight Motion', 'Hypic'] },
              { t: "Env", i: ['Termux', 'Git'] },
              { t: "Photography", i: ['Gcam', 'Lightroom', 'Snapseed', 'Ld'] }
            ].map((s, i) => (
              <div key={i} className="p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl transition-all hover:border-white/20 flex flex-col justify-between">
                <h3 className="text-white font-bold text-[10px] md:text-xs mb-4 uppercase tracking-tighter">{s.t}</h3>
                <div className="flex flex-wrap gap-1">
                  {s.i.map(item => <span key={item} className="text-[7px] md:text-[8px] text-gray-600 bg-white/5 px-2 py-0.5 rounded border border-white/5">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* --- 5. PROYEK (2 COLUMNS) --- */}
      <section id="proyek" className="px-4 py-32 bg-[#050505]">
        <Reveal>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-xl font-bold text-white mb-16 uppercase tracking-widest italic">Proyek</h2>
            <div className="grid grid-cols-2 gap-3 md:gap-10 text-left">
              <div className="p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl transition-all hover:border-white/20">
                <h3 className="text-white font-bold text-[10px] md:text-xl mb-2">Media Downloader</h3>
                <p className="text-slate-600 text-[8px] md:text-sm line-clamp-2">Python scraping tools for social media.</p>
              </div>
              <div className="p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl transition-all hover:border-white/20">
                <h3 className="text-white font-bold text-[10px] md:text-xl mb-2">Food Packaging</h3>
                <p className="text-slate-600 text-[8px] md:text-sm line-clamp-2">Visual identity & branding design.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* --- 6. GALLERY (2 COLUMNS) --- */}
      <section id="gallery" className="px-4 py-32 bg-black">
        <Reveal>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-16 text-center uppercase tracking-widest italic">Visual Archive</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
              {['28','31','33','30'].map((num, i) => (
                <div key={num} className={`aspect-[4/5] rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 group ${i % 2 !== 0 ? 'lg:translate-y-16' : ''}`}>
                  <img src={`/gallery/image_${num}.png`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Work" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="py-20 text-center border-t border-white/5 bg-black">
        <p className="text-slate-800 text-[8px] font-mono tracking-[0.5em] uppercase">Built with Termux — Pekalongan</p>
      </footer>
    </div>
  )
}

export default App

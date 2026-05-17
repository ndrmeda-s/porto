import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// --- REVEAL ANIMATION ---
const RectangleReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
)

function App() {
  const [index, setIndex] = useState(0)
  // State khusus buat kontrol buka-tutup burger menu
  const [menuOpen, setMenuOpen] = useState(false)
  
  const logos = [
    { 
      name: 'Termux', type: 'svg', color: '#ffffff',
      path: "M1.2 5.2h21.6v21.6H1.2V5.2zm2 2v17.6h17.6V7.2H3.2zm4.8 4.8l4.8 4.8-4.8 4.8-1.4-1.4 3.4-3.4-3.4-3.4 1.4-1.4zm4.8 8.2h6.4v2H12.8v-2z"
    },
    { name: 'Linux', type: 'img', src: "https://cdn.simpleicons.org/linux/ffffff" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#000000] text-slate-300 font-sans selection:bg-white/20 overflow-x-hidden">
      
      {/* --- 1. NAV BAR (BURGER ICON + SLIM DROPDOWN) --- */}
      <nav className="p-4 md:p-10 flex justify-between items-center max-w-6xl mx-auto border-b border-white/5 bg-[#000000]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl flex items-center justify-center group cursor-pointer overflow-hidden">
          <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-6 md:h-6" fill="black">
            <path d="M1.2 5.2h21.6v21.6H1.2V5.2zm2 2v17.6h17.6V7.2H3.2zm4.8 4.8l4.8 4.8-4.8 4.8-1.4-1.4 3.4-3.4-3.4-3.4 1.4-1.4zm4.8 8.2h6.4v2H12.8v-2z" />
          </svg>
        </div>
        
        {/* Tombol Menu Icon Burger */}
        <div className="relative">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none p-1 block active:scale-95 transition-transform"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Overlay Dropdown: Menggunakan w-max biar lebarnya pas sama teks */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-3 w-max bg-[#0a0a0a] border border-white/10 rounded-xl p-3 shadow-2xl flex flex-col gap-2.5 z-50 font-mono text-[10px] font-bold uppercase tracking-wider text-right"
              >
                <a href="#skill" onClick={() => setMenuOpen(false)} className="text-white/50 hover:text-white transition-colors block px-3 py-0.5">Skill</a>
                <a href="#proyek" onClick={() => setMenuOpen(false)} className="text-white/50 hover:text-white transition-colors block px-3 py-0.5">Proyek</a>
                <a href="#gallery" onClick={() => setMenuOpen(false)} className="text-white/50 hover:text-white transition-colors block px-3 py-0.5">Visual</a>
                <a href="#kontak" onClick={() => setMenuOpen(false)} className="text-white/50 hover:text-white transition-colors block px-3 py-0.5">Kontak</a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* --- 2. HERO SECTION --- */}
      <section className="px-4 md:px-12 py-12 md:py-24 min-h-[85vh] flex flex-col justify-center bg-[#000000]">
        <RectangleReveal>
          <div className="grid grid-cols-[1.8fr_1fr] md:grid-cols-[2fr,1fr] gap-4 md:gap-16 items-start max-w-7xl mx-auto w-full">
            
            {/* KONTEN KIRI */}
            <div className="space-y-10 md:space-y-16">
              
              <div className="text-left">
                <h1 className="text-4xl sm:text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-3">
                  CODE <br />
                  <span className="text-white/20">&amp;</span> <br />
                  SECURITY.
                </h1>
                <p className="text-slate-500 text-[8px] sm:text-sm md:text-xl font-mono uppercase tracking-[0.15em]">
                  Cybersecurity &amp; Visual Identity.
                </p>
              </div>

              {/* Tentang Saya (Tombol Bawah Dihapus Bersih) */}
              <div id="tentang" className="text-left space-y-4 max-w-xl">
                <div className="inline-block px-2.5 py-0.5 md:px-4 md:py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[8px] md:text-[11px] font-bold uppercase tracking-widest">
                  Informatics Student
                </div>
                <h2 className="text-lg sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">Tentang Saya</h2>
                <p className="text-slate-400 text-[11px] sm:text-lg md:text-2xl leading-relaxed font-medium">
                  Halo, saya Muhammad Adil Keysa Andra. Sebagai mahasiswa informatika, saya aktif mengeksplorasi cyber security, tools open-source, dan otomasi sistem.
                </p>
              </div>

            </div>

            {/* KONTEN KANAN */}
            <div className="flex flex-col items-center justify-start pt-2 md:pt-4">
              <div className="perspective-[1200px] gap-2 md:gap-5 flex flex-col items-center w-full">
                <div className="relative w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ rotateY: 90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: -90, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-[#0a0a0a] border border-white/10 rounded-2xl sm:rounded-[3rem] flex items-center justify-center p-5 sm:p-10 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                      {logos[index].type === 'img' ? (
                        <img src={logos[index].src} className="w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24 relative z-10 object-contain grayscale" alt="logo" />
                      ) : (
                        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24 relative z-10" fill={logos[index].color}>
                          <path d={logos[index].path} />
                        </svg>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="h-4 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 3 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -3 }}
                      transition={{ duration: 0.6 }}
                      className="text-[8px] sm:text-[10px] md:text-[12px] font-mono tracking-[0.2em] sm:tracking-[0.5em] uppercase text-gray-500 font-black"
                    >
                      {logos[index].name}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
        </RectangleReveal>
      </section>

      {/* --- 3. SKILLSET (BACK TO ORIGINAL FLEX LAYOUT) --- */}
      <section id="skill" className="px-4 md:px-8 py-24 max-w-6xl mx-auto scroll-mt-20">
        <RectangleReveal>
          <h2 className="text-xl font-bold text-white mb-16 text-center uppercase tracking-widest italic">Skillset</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { t: "Security", i: ['Ip-Tracer', 'Seeker', 'Nmap', 'Sqlmap', 'Metasploit'] },
              { t: "Design", i: ['Photopea', 'Inkscape', 'Alight Motion', 'Hypic'] },
              { t: "Env", i: ['Termux', 'Git'] },
              { t: "Photography", i: ['Gcam', 'Lightroom', 'Snaped', 'Ld'] }
            ].map((s, i) => (
              <div key={i} className="w-[calc(50%-6px)] md:w-[calc(25%-10px)] p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl transition-all hover:border-white/20">
                <h3 className="text-white font-bold text-xs mb-3 uppercase tracking-tighter">{s.t}</h3>
                <div className="flex flex-wrap gap-1">
                  {s.i.map(item => <span key={item} className="text-[8px] text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </RectangleReveal>
      </section>

      {/* --- 4. PROYEK --- */}
      <section id="proyek" className="px-4 md:px-8 py-24 bg-[#050505]">
        <RectangleReveal>
          <div className="max-w-6xl mx-auto text-center space-y-16">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest italic">Proyek</h2>
            <div className="grid grid-cols-2 gap-3 md:gap-10 text-left">
              <div className="p-5 md:p-10 bg-[#0a0a0a] border border-white/5 rounded-2xl md:rounded-[3rem] hover:border-white/20 transition-all">
                <h3 className="text-xs md:text-3xl font-bold text-white mb-2">Media Downloader</h3>
                <p className="text-slate-500 text-[9px] md:text-lg mb-4 leading-relaxed line-clamp-2 md:line-clamp-none">Tools scraping Python untuk download media sosmed.</p>
                <div className="text-[7px] md:text-xs font-mono text-gray-600">#Python #Scraping</div>
              </div>
              <div className="p-5 md:p-10 bg-[#0a0a0a] border border-white/5 rounded-2xl md:rounded-[3rem] hover:border-white/20 transition-all">
                <h3 className="text-xs md:text-3xl font-bold text-white mb-2">Food Packaging</h3>
                <p className="text-slate-500 text-[9px] md:text-lg mb-4 leading-relaxed line-clamp-2 md:line-clamp-none">Desain identitas visual Swiss Style minimalis.</p>
                <div className="text-[7px] md:text-xs font-mono text-gray-600">#Design #Branding</div>
              </div>
            </div>
          </div>
        </RectangleReveal>
      </section>

      {/* --- 5. VISUAL ARCHIVE --- */}
      <section id="gallery" className="px-4 md:px-8 py-24 bg-[#000000] scroll-mt-20">
        <RectangleReveal>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-16 text-center uppercase tracking-widest italic">Visual Archive</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
              {['28','31','33','30'].map((num, i) => (
                <div key={num} className={`group space-y-4 ${i % 2 !== 0 ? 'lg:translate-y-16' : ''}`}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-500">
                    <img src={`/gallery/image_${num}.png`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Visual Work" />
                    <div className="absolute bottom-3 left-3 px-2 py-0.5 bg-black/40 backdrop-blur-xl rounded-full text-[7px] font-mono text-white tracking-widest uppercase border border-white/10">{num === '28' ? 'Structure' : num === '31' ? 'Wildlife' : num === '33' ? 'Texture' : 'Atmosphere'}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RectangleReveal>
      </section>

      {/* --- 6. FOOTER --- */}
      <footer id="kontak" className="py-24 text-center border-t border-white/5 bg-[#000000]">
        <p className="text-slate-800 text-[8px] md:text-[10px] font-mono tracking-[0.5em] uppercase px-4">
          Built with Termux — 2026
        </p>
      </footer>

    </div>
  )
}

export default App

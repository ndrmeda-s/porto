import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// --- REVEAL ANIMATION ---
const Reveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
)

function App() {
  const [index, setIndex] = useState(0)
  
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
      
      {/* --- 1. NAV BAR (FAVICON STYLE) --- */}
      <nav className="p-4 md:p-10 flex justify-between items-center max-w-6xl mx-auto border-b border-white/5 bg-[#000000]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl flex items-center justify-center group cursor-pointer overflow-hidden">
          <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-6 md:h-6" fill="black">
            <path d="M1.2 5.2h21.6v21.6H1.2V5.2zm2 2v17.6h17.6V7.2H3.2zm4.8 4.8l4.8 4.8-4.8 4.8-1.4-1.4 3.4-3.4-3.4-3.4 1.4-1.4zm4.8 8.2h6.4v2H12.8v-2z" />
          </svg>
        </div>
        <div className="flex gap-4 md:gap-8 text-[9px] md:text-xs font-bold uppercase tracking-widest text-white/40">
          <a href="#proyek" className="hover:text-white transition-colors">Proyek</a>
          <a href="#gallery" className="hover:text-white transition-colors">Visual</a>
          <a href="#killset" className="hover:text-white transition-colors">Killset</a>
        </div>
      </nav>

      {/* --- 2. HERO SECTION (LAYOUT DIKUNCI SAMA DI HP & DESKTOP) --- */}
      <section className="px-4 md:px-12 py-16 md:py-24 min-h-[85vh] flex flex-col justify-center bg-[#000000]">
        <Reveal>
          {/* DIKUNCI 2 KOLOM: Kolom kiri rasio 1.5/2, kolom kanan rasio 1 */}
          <div className="grid grid-cols-[1.5fr,1fr] sm:grid-cols-[2fr,1fr] gap-4 md:gap-16 items-start max-w-7xl mx-auto w-full">
            
            {/* KONTEN KIRI (KOTAK 1 & KOTAK 2) */}
            <div className="space-y-10 md:space-y-16">
              
              {/* KOTAK 1: Headline Code & Security */}
              <div className="text-left">
                <div className="inline-block px-2.5 py-0.5 md:px-4 md:py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[8px] md:text-[11px] font-bold uppercase tracking-widest mb-4">
                  Informatics Student
                </div>
                <h1 className="text-3xl sm:text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-2">
                  CODE <span className="text-white/20 block sm:inline">&</span> <br />
                  SECURITY.
                </h1>
                <p className="text-slate-500 text-[8px] sm:text-sm md:text-xl font-mono uppercase tracking-[0.15em]">
                  Cybersecurity & Visual Identity.
                </p>
              </div>

              {/* KOTAK 2: Tentang Saya */}
              <div id="tentang" className="text-left space-y-4 md:space-y-6 max-w-2xl">
                <h2 className="text-xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">/ Tentang Saya</h2>
                <p className="text-slate-400 text-[11px] sm:text-lg md:text-2xl leading-relaxed font-medium">
                  Halo, saya Muhammad Adil Keysa Andra. Sebagai mahasiswa informatika, saya aktif mengeksplorasi cyber security, tools open-source, dan otomasi sistem.
                </p>
                
                {/* Tombol Interaktif Skala HP */}
                <div className="flex gap-3 pt-2 md:pt-4">
                  <a href="#proyek" className="px-4 py-2 md:px-10 md:py-4 bg-white text-black font-bold rounded-xl md:rounded-2xl text-[10px] md:text-sm active:scale-95 transition-all text-center">
                    Proyek
                  </a>
                  <button className="px-4 py-2 md:px-10 md:py-4 bg-white/5 text-white font-bold rounded-xl md:rounded-2xl border border-white/10 text-[10px] md:text-sm active:scale-95 transition-all">
                    Kontak
                  </button>
                </div>
              </div>

            </div>

            {/* KONTEN KANAN (KOTAK 3) */}
            {/* Kotak Animasi Logo: Sejajar di kanan atas */}
            <div className="flex flex-col items-center justify-start pt-8 sm:pt-12 md:pt-0">
              <div className="perspective-[1200px] gap-3 md:gap-5 flex flex-col items-center w-full">
                {/* Ukuran kotak responsif agar pas di grid HP */}
                <div className="relative w-20 h-20 sm:w-36 sm:h-36 md:w-44 md:h-44">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ rotateY: 90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: -90, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-[#0a0a0a] border border-white/10 rounded-2xl sm:rounded-[3rem] flex items-center justify-center p-4 sm:p-10 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                      {logos[index].type === 'img' ? (
                        <img src={logos[index].src} className="w-8 h-8 sm:w-16 sm:h-16 md:w-24 md:h-24 relative z-10 object-contain grayscale" alt="logo" />
                      ) : (
                        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-16 sm:h-16 md:w-24 md:h-24 relative z-10" fill={logos[index].color}>
                          <path d={logos[index].path} />
                        </svg>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
                {/* Nama Logo Kecil di Bawah Kotak */}
                <div className="h-4 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 3 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -3 }}
                      transition={{ duration: 0.6 }}
                      className="text-[7px] sm:text-[10px] md:text-[12px] font-mono tracking-[0.3em] sm:tracking-[0.5em] uppercase text-gray-500 font-black"
                    >
                      {logos[index].name}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
        </Reveal>
      </section>

      {/* --- 3. SKILLSET (2 KOLOM DI HP) --- */}
      <section id="killset" className="px-4 md:px-8 py-24 max-w-6xl mx-auto scroll-mt-20">
        <Reveal>
          <h2 className="text-xl font-bold text-white mb-16 text-center uppercase tracking-widest italic">Skillset</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {[
              { cat: "Offensive", title: "Security Tools", items: ['Ip-Tracer', 'Seeker', 'Nmap', 'Sqlmap', 'Metasploit'] },
              { cat: "Creative", title: "Design & UI", items: ['Photopea', 'Inkscape', 'Alight Motion', 'Hypic'] },
              { cat: "System", title: "Environment", items: ['Termux', 'Git', 'Python'] },
              { cat: "Creative", title: "Photography", items: ['Gcam', 'Lightroom', 'Snapseed', 'Ld'] }
            ].map((skill, i) => (
              <div key={i} className="p-4 md:p-10 bg-[#0a0a0a] border border-white/5 rounded-2xl md:rounded-[3rem] flex flex-col justify-between h-full">
                <div>
                  <p className="text-gray-500 font-mono text-[8px] md:text-[10px] uppercase mb-2 tracking-widest">{skill.cat}</p>
                  <h3 className="text-white font-bold text-xs md:text-2xl mb-4 tracking-tight leading-none">{skill.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1 md:gap-2 text-[7px] md:text-[10px] text-gray-400">
                  {skill.items.map(item => (
                    <span key={item} className="px-2 py-0.5 bg-black rounded border border-white/5">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* --- 4. PROYEK (2 KOLOM DI HP) --- */}
      <section id="proyek" className="px-4 md:px-8 py-24 bg-[#080808] border-y border-white/5 scroll-mt-20">
        <Reveal>
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
        </Reveal>
      </section>

      {/* --- 5. VISUAL ARCHIVE (2 KOLOM DI HP) --- */}
      <section id="gallery" className="px-4 md:px-8 py-24 bg-[#000000] scroll-mt-20">
        <Reveal>
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
        </Reveal>
      </section>

      {/* --- 6. FOOTER --- */}
      <footer className="py-24 text-center border-t border-white/5 bg-[#000000]">
        <p className="text-slate-800 text-[8px] md:text-[10px] font-mono tracking-[0.5em] uppercase">
          Built in Pekalongan — 2026 — Termux Powered
        </p>
      </footer>

    </div>
  )
}

export default App

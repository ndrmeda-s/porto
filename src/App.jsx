import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// --- REVEAL ANIMATION (Smooth Entry) ---
const Reveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
)

function App() {
  const [index, setIndex] = useState(0)
  
  // LOGO DATA (Monochrome & Pure White, Warna Gak Diganti)
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
      
      {/* --- 1. NAV BAR (ICON terminal/FAVICON) --- */}
      <nav className="p-6 md:p-10 flex justify-between items-center max-w-6xl mx-auto border-b border-white/5 bg-[#000000]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="w-9 h-9 md:w-10 md:h-10 bg-white rounded-xl flex items-center justify-center group cursor-pointer overflow-hidden">
          <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 group-hover:scale-110" fill="black">
            <path d="M1.2 5.2h21.6v21.6H1.2V5.2zm2 2v17.6h17.6V7.2H3.2zm4.8 4.8l4.8 4.8-4.8 4.8-1.4-1.4 3.4-3.4-3.4-3.4 1.4-1.4zm4.8 8.2h6.4v2H12.8v-2z" />
          </svg>
        </div>
        <div className="flex gap-5 md:gap-8 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50">
          <a href="#proyek" className="hover:text-white transition-colors">Proyek</a>
          <a href="#gallery" className="hover:text-white transition-colors">Visual</a>
          <a href="#killset" className="hover:text-white transition-colors">Killset</a>
        </div>
      </nav>

      {/* ========================================================
          --- BAGIAN HERO (LAYOUT DIKUNCI 2 KOLOM DI SEMUA LAYAR) ---
          ======================================================== */}
      <section className="px-6 md:px-12 py-24 min-h-[90vh] flex flex-col justify-center bg-[#000000]">
        <Reveal>
          {/* CONTAINER GRID UTAMA: DIKUNCI 2 KOLOM TANPA md: */}
          <div className="grid grid-cols-2 md:grid-cols-[2fr,1fr] gap-12 md:gap-16 items-start max-w-7xl mx-auto w-full">
            
            {/* ----------------------------------------------------
                --- KONTEN KIRI (KOTAK 1 & 2 SEJAJAR VERTICAL) ---
                ---------------------------------------------------- */}
            <div className="space-y-12 md:space-y-16">
              
              {/* --- KOTAK 1: HEADLINE BESAR (Digedein dikit Le) --- */}
              <div className="text-left">
                {/* Headline: 'code' -> '&' -> 'security' */}
                <h1 className="text-4xl md:text-9xl font-black text-white leading-none tracking-tighter uppercase mb-4">
                  CODE <span className="text-white/20 block md:inline md:my-0">&</span> <br />
                  SECURITY.
                </h1>
                <p className="text-slate-500 text-[9px] md:text-xl leading-relaxed max-w-2xl font-mono uppercase tracking-[0.2em]">
                  Cybersecurity & Visual Identity — Pekalongan.
                </p>
              </div>

              {/* --- KOTAK 2: SECTION TENTANG SAYA (Di Bawah Headline) --- */}
              <div id="tentang" className="text-left space-y-8 md:space-y-10 max-w-3xl scroll-mt-24">
                <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[11px] font-bold uppercase tracking-widest">
                  Informatics Student
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">/ Tentang Saya</h2>
                <p className="text-slate-400 text-base md:text-2xl leading-relaxed max-w-3xl font-medium">
                  Halo, saya Muhammad Adil Keysa Andra. Sebagai mahasiswa informatika, saya aktif mengeksplorasi cyber security, tools open-source, dan otomasi sistem.
                </p>
                
                {/* Tombol Kontak & Proyek */}
                <div className="flex gap-4 pt-6">
                  <a href="#proyek" className="px-8 md:px-10 py-4 bg-white text-black font-bold rounded-2xl text-sm active:scale-95 transition-all hover:bg-gray-200">
                    Proyek
                  </a>
                  <button className="px-8 md:px-10 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 text-sm active:scale-95 transition-all hover:bg-white/10">
                    Kontak
                  </button>
                </div>
              </div>
            </div>

            {/* ----------------------------------------------------
                --- KONTEN KANAN (KOTAK 3 SEJAJAR KANAN ATAS) ---
                ---------------------------------------------------- */}
            {/* --- KOTAK 3: KOTAK ANIMASI LOGO (Pindah ke Kanan) --- */}
            {/* Aku pake sticky biar dia tetep nempel pas di-scroll Le */}
            <div className="sticky top-32 flex flex-col items-center justify-center pt-8 md:pt-0 md:col-start-2">
              <div className="perspective-[1200px] gap-5 flex flex-col items-center w-full">
                <div className="relative w-36 h-36 md:w-44 md:h-44">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ rotateY: 90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: -90, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-[#0a0a0a] border border-white/10 rounded-[3rem] shadow-2xl flex items-center justify-center p-10 overflow-hidden"
                    >
                      {/* Gradient: White/Transparent */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                      {logos[index].type === 'img' ? (
                        <img src={logos[index].src} className="w-16 h-16 md:w-24 md:h-24 relative z-10 object-contain grayscale" alt="logo" />
                      ) : (
                        <svg viewBox="0 0 24 24" className="w-16 h-16 md:w-24 md:h-24 relative z-10" fill={logos[index].color}>
                          <path d={logos[index].path} />
                        </svg>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
                {/* Logo Name: Grey */}
                <div className="h-4 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.6 }}
                      className="text-[10px] md:text-[12px] font-mono tracking-[0.5em] uppercase text-gray-400 font-black"
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

      {/* --- SECTION KILLSET (4 KOLOM B&W, 2 KOLOM DI HP) --- */}
      <section id="killset" className="px-6 md:px-8 py-32 max-w-6xl mx-auto scroll-mt-20">
        <Reveal>
          <h2 className="text-2xl font-bold text-white mb-20 uppercase tracking-[0.3em] text-center flex items-center justify-center gap-6">
            <span className="hidden md:block w-16 h-px bg-gray-600"></span> Killset <span className="hidden md:block w-16 h-px bg-gray-600"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { cat: "Offensive", title: "Security Tools", items: ['Ip-Tracer', 'Seeker', 'Nmap', 'Sqlmap', 'Metasploit'] },
              { cat: "Creative", title: "Design & UI", items: ['Photopea', 'Inkscape', 'Alight Motion', 'Hypic'] },
              { cat: "System", title: "Environment", items: ['Termux', 'Git', 'Python'] },
              { cat: "Creative", title: "Photography", items: ['Gcam', 'Lightroom', 'Snapseed', 'Ld'] }
            ].map((skill, i) => (
              <div key={i} className="p-8 md:p-10 bg-[#0a0a0a] border border-white/5 rounded-[3rem] hover:border-white/30 transition-all flex flex-col h-full group">
                <div>
                  <p className="text-gray-500 font-mono text-[9px] md:text-[10px] uppercase mb-4 tracking-widest">{skill.cat}</p>
                  <h3 className="text-white font-bold text-lg md:text-2xl mb-6 tracking-tight leading-none">{skill.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 md:gap-2 text-[8px] md:text-[11px] text-gray-400">
                  {skill.items.map(item => (
                    <span key={item} className="px-3 py-1 bg-black rounded-lg border border-white/5">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* --- SECTION PROYEK (2 KOLOM B&W) --- */}
      <section id="proyek" className="px-6 md:px-8 py-32 bg-[#080808] border-y border-white/5 scroll-mt-20">
        <Reveal>
          <div className="max-w-6xl mx-auto text-center space-y-20">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">Proyek</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-left">
              <div className="group relative overflow-hidden rounded-[3rem] bg-[#0a0a0a] border border-white/5 p-8 md:p-10 hover:border-white/20 transition-all">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Media Downloader</h3>
                <p className="text-slate-500 text-sm md:text-lg mb-8 leading-relaxed">Tools scraping Python untuk download media sosmed.</p>
                <div className="flex gap-4 font-mono text-[10px] md:text-xs text-gray-600">#Python #Scraping #Offensive</div>
              </div>
              <div className="group relative overflow-hidden rounded-[3rem] bg-[#0a0a0a] border border-white/5 p-8 md:p-10 hover:border-white/20 transition-all">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Food Packaging</h3>
                <p className="text-slate-500 text-sm md:text-lg mb-8 leading-relaxed">Desain identitas visual Swiss Style minimalis.</p>
                <div className="flex gap-4 font-mono text-[10px] md:text-xs text-gray-600">#Design #Branding #Concept</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* --- SECTION VISUAL ARCHIVE (2 KOLOM DI HP) --- */}
      <section id="gallery" className="px-6 md:px-8 py-32 bg-[#000000] scroll-mt-20">
        <Reveal>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-center md:text-left">
              <div className="w-full">
                <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter italic leading-[0.8] mb-4">
                  Visual <br /> <span className="text-white/40">Archive.</span>
                </h2>
                <p className="text-slate-500 text-[10px] md:text-[12px] tracking-[0.5em] font-mono uppercase">Captured by NdrMeda — Pekalongan</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {['28','31','33','30'].map((num, i) => (
                <div key={num} className={`group space-y-5 ${i % 2 !== 0 ? 'lg:translate-y-16' : ''}`}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-500">
                    <img src={`/gallery/image_${num}.png`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Visual Work" />
                    <div className="absolute bottom-5 left-5 px-4 py-1.5 bg-black/40 backdrop-blur-xl rounded-full text-[8px] font-mono text-white tracking-widest uppercase border border-white/10">{num === '28' ? 'Structure' : num === '31' ? 'Wildlife' : num === '33' ? 'Texture' : 'Atmosphere'}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 text-center border-t border-white/5 bg-[#000000]">
        <p className="text-slate-800 text-[10px] font-mono tracking-[0.5em] uppercase">
          Built in Pekalongan — 2026 — Termux Powered
        </p>
      </footer>

    </div>
  )
}

export default App

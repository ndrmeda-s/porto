import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// --- JURUS ANTI KEDIP: Komponen Reveal ---
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
  
  // LOGO DATA (Grayscale & White)
  const logos = [
    { 
      name: 'Python', 
      type: 'img', 
      // Pake logo Python yang warna aslinya abu-abu/putih
      src: "https://cdn.simpleicons.org/python/eeeeee" 
    },
    { 
      name: 'Termux', 
      type: 'svg', 
      color: '#ffffff', // Putih total
      path: "M1.2 5.2h21.6v21.6H1.2V5.2zm2 2v17.6h17.6V7.2H3.2zm4.8 4.8l4.8 4.8-4.8 4.8-1.4-1.4 3.4-3.4-3.4-3.4 1.4-1.4zm4.8 8.2h6.4v2H12.8v-2z"
    },
    { 
      name: 'Linux', 
      type: 'img', 
      // Pake logo Linux yang putih
      src: "https://cdn.simpleicons.org/linux/ffffff" 
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    // SELECTION & BACKGROUND B&W
    <div className="min-h-screen bg-[#000000] text-slate-300 font-sans selection:bg-white/20 overflow-x-hidden">
      
      {/* --- 1. NAV BAR (Clean White Text) --- */}
      <nav className="p-6 md:p-10 flex justify-between items-center max-w-6xl mx-auto border-b border-white/5 bg-[#000000]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="text-xl text-white font-black tracking-tighter uppercase font-mono">ADIL.DEV</div>
        <div className="flex gap-4 md:gap-8 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50">
          <a href="#tentang" className="hover:text-white transition-colors">Tentang</a>
          <a href="#skill" className="hover:text-white transition-colors">Skill</a>
          <a href="#proyek" className="hover:text-white transition-colors">Proyek</a>
          <a href="#gallery" className="hover:text-white transition-colors">Visual</a>
        </div>
      </nav>

      {/* --- 2. HERO SECTION (HIGH CONTRAST) --- */}
      <section className="px-8 py-16 max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[85vh] text-center">
        <div className="space-y-6 md:space-y-10 flex flex-col items-center">
          {/* Badge: White/Grey */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold uppercase tracking-widest leading-none">
            Informatics Student
          </div>
          
          {/* Headline: True White */}
          <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase">
            CODE <br />
            <span className="text-white/40 block my-2">&</span>
            SECURITY.
          </h1>

          <p className="text-slate-400 text-base md:text-xl leading-relaxed max-w-xl mx-auto">
            Mengeksplorasi dunia <span className="text-white font-semibold">Cybersecurity</span> dan identitas visual melalui baris kode di Termux Pekalongan.
          </p>

          {/* Buttons: Black & White */}
          <div className="flex gap-4 justify-center pt-6">
            <a href="#proyek" className="px-10 py-4 bg-white text-black font-bold rounded-2xl shadow-xl shadow-white/5 text-sm active:scale-95 transition-all hover:bg-gray-200">
              Proyek
            </a>
            <button className="px-10 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 text-sm active:scale-95 transition-all hover:bg-white/10">
              Kontak
            </button>
          </div>
        </div>
      </section>

      {/* --- 3. TENTANG SAYA (LOGO B&W) --- */}
      <section id="tentang" className="px-8 py-32 bg-[#080808] scroll-mt-20">
        <Reveal>
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-12">
            
            {/* AREA LOGO LEBIH KECIL (B&W Gradient) */}
            <div className="flex flex-col items-center justify-center perspective-[1200px] gap-5">
              <div className="relative w-28 h-28 md:w-36 md:h-36">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="absolute inset-0 bg-[#111111] border border-white/10 rounded-3xl shadow-2xl flex items-center justify-center p-8 overflow-hidden"
                  >
                    {/* Gradient: White/Transparent */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                    {logos[index].type === 'img' ? (
                      <img src={logos[index].src} className="w-14 h-14 md:w-20 md:h-20 relative z-10 object-contain drop-shadow-xl grayscale" alt="logo" />
                    ) : (
                      <svg viewBox="0 0 24 24" className="w-14 h-14 md:w-20 md:h-20 relative z-10" fill={logos[index].color}>
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
                    className="text-[9px] md:text-[11px] font-mono tracking-[0.6em] uppercase text-gray-400 font-black"
                  >
                    {logos[index].name}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Teks Deskripsi */}
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italicLEADING-NONE">/ Tentang Saya</h2>
              <p className="text-slate-400 text-base md:text-2xl leading-relaxed max-w-2xl mx-auto">
                Halo, saya Muhammad Adil Keysa Andra. Sebagai mahasiswa informatika, saya aktif mengeksplorasi cyber security, tools open-source, dan otomasi sistem.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* --- 4. KEAHLIAN (WHITE HOVER) --- */}
      <section id="skill" className="px-8 py-32 max-w-6xl mx-auto scroll-mt-20">
        <Reveal>
          <h2 className="text-3xl font-bold text-white mb-16 uppercase tracking-[0.25em] flex items-center justify-center gap-5">
            <span className="hidden md:block w-16 h-px bg-gray-600"></span> Skillset <span className="hidden md:block w-16 h-px bg-gray-600"></span>
          </h2>
          {/* Grid: White Border on Hover */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-12 bg-[#111111] border border-white/5 rounded-[3rem] hover:border-white/30 transition-all text-center md:text-left group">
              <p className="text-gray-400 font-mono text-[11px] uppercase mb-5 tracking-widest">Offensive</p>
              <h3 className="text-white font-bold text-2xl mb-8 tracking-tight">Security Tools</h3>
              <div className="flex flex-wrap gap-2.5 justify-center md:justify-start text-xs text-gray-400">
                {['Nmap', 'Sqlmap', 'Sherlock', 'Metasploit'].map(s => (
                  <span key={s} className="px-3.5 py-1.5 bg-black rounded-lg border border-white/5">{s}</span>
                ))}
              </div>
            </div>
            <div className="p-12 bg-[#111111] border border-white/5 rounded-[3rem] hover:border-white/30 transition-all text-center md:text-left group">
              <p className="text-gray-400 font-mono text-[11px] uppercase mb-5 tracking-widest">Creative</p>
              <h3 className="text-white font-bold text-2xl mb-8 tracking-tight">Design & UI</h3>
              <div className="flex flex-wrap gap-2.5 justify-center md:justify-start text-xs text-gray-400">
                {['Photopea', 'Inkscape', 'Alight Motion', 'Hypic'].map(s => (
                  <span key={s} className="px-3.5 py-1.5 bg-black rounded-lg border border-white/5">{s}</span>
                ))}
              </div>
            </div>
            <div className="p-12 bg-[#111111] border border-white/5 rounded-[3rem] hover:border-white/30 transition-all text-center md:text-left group">
              <p className="text-gray-400 font-mono text-[11px] uppercase mb-5 tracking-widest">System</p>
              <h3 className="text-white font-bold text-2xl mb-8 tracking-tight">Environment</h3>
              <div className="flex flex-wrap gap-2.5 justify-center md:justify-start text-xs text-gray-400">
                {['Termux', 'Git', 'Python'].map(s => (
                  <span key={s} className="px-3.5 py-1.5 bg-black rounded-lg border border-white/5">{s}</span>
                ))}
              </div>
            </div>
            <div className="p-12 bg-[#111111] border border-white/5 rounded-[3rem] hover:border-white/30 transition-all text-center md:text-left group">
              <p className="text-gray-400 font-mono text-[11px] uppercase mb-5 tracking-widest">Creative</p>
              <h3 className="text-white font-bold text-2xl mb-8 tracking-tight">Photography</h3>
              <div className="flex flex-wrap gap-2.5 justify-center md:justify-start text-xs text-gray-400">
                {['Gcam', 'Lightroom', 'Snapseed', 'Ld'].map(s => (
                  <span key={s} className="px-3.5 py-1.5 bg-black rounded-lg border border-white/5">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* --- 5. PROYEK (CLEAN B&W) --- */}
      <section id="proyek" className="px-8 py-32 bg-[#080808] scroll-mt-20">
        <Reveal>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-16 italicLEADING-NONE">Proyek</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
              <div className="group relative overflow-hidden rounded-[3rem] bg-[#111111] border border-white/5 p-10 hover:border-white/20 transition-all">
                <h3 className="text-3xl font-bold text-white mb-3">Web Media Downloader</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">Tools scraping berbasis Python untuk mendownload media dari berbagai platform sosial media.</p>
                {/* Tech Tags: Grey Text */}
                <div className="flex gap-3 font-mono text-[11px] text-gray-500">#Python #Scraping</div>
              </div>
              <div className="group relative overflow-hidden rounded-[3rem] bg-[#111111] border border-white/5 p-10 hover:border-white/20 transition-all">
                <h3 className="text-3xl font-bold text-white mb-3">Bite. Packaging</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">Desain identitas visual dan kemasan produk dengan konsep Swiss Style yang minimalis.</p>
                {/* Tech Tags: Grey Text */}
                <div className="flex gap-3 font-mono text-[11px] text-gray-500">#Design #Branding</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* --- 6. VISUAL GALLERY (B&W WITH BRIGHT HOVER) --- */}
      <section id="gallery" className="px-8 py-32 bg-[#000000] scroll-mt-20">
        <Reveal>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="text-left">
                <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic leading-[0.8] mb-5">
                  Visual <br /> <span className="text-white/40">Archive.</span>
                </h2>
                <p className="text-slate-500 text-[11px] tracking-[0.5em] font-mono uppercase">
                  Captured Through the Lens of NdrMeda
                </p>
              </div>
              <div className="hidden md:block">
                <div className="px-8 py-2.5 border border-white/10 rounded-full">
                  <p className="text-white text-[10px] font-mono tracking-widest uppercase font-bold">
                    Monochrome Selection
                  </p>
                </div>
              </div>
            </div>
            
            {/* Grid Foto: Tetap Grayscale tapi Hover jadi Terang */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Architecture */}
              <div className="group space-y-6">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-[#111111] border border-white/5 hover:border-white/20 transition-all duration-500">
                  <img src="/gallery/tower.webp" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110" alt="Industrial" />
                  {/* Badge: Black/White */}
                  <div className="absolute bottom-5 left-5 px-4 py-1.5 bg-white/5 backdrop-blur-2xl rounded-full text-[9px] font-mono text-white tracking-widest uppercase border border-white/10">Structure</div>
                </div>
                <div className="px-5">
                  <h4 className="text-white font-bold text-lg uppercase tracking-widest">Industrialism</h4>
                  <p className="text-slate-500 text-[11px] mt-2.5 font-mono leading-relaxed">Symmetry in industrial landmarks.</p>
                </div>
              </div>

              {/* Macro Siput */}
              <div className="group space-y-6 lg:translate-y-16">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-[#111111] border border-white/5 hover:border-white/20 transition-all duration-500">
                  <img src="/gallery/snail.webp" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110" alt="Snail Macro" />
                  <div className="absolute bottom-5 left-5 px-4 py-1.5 bg-white/5 backdrop-blur-2xl rounded-full text-[9px] font-mono text-white tracking-widest uppercase border border-white/10">Wildlife</div>
                </div>
                <div className="px-5">
                  <h4 className="text-white font-bold text-lg uppercase tracking-widest">Slow Living</h4>
                  <p className="text-slate-500 text-[11px] mt-2.5 font-mono leading-relaxed">Micro details of garden residents.</p>
                </div>
              </div>

              {/* Macro Kadal */}
              <div className="group space-y-6">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-[#111111] border border-white/5 hover:border-white/20 transition-all duration-500">
                  <img src="/gallery/gekko.webp" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110" alt="Gekko Macro" />
                  <div className="absolute bottom-5 left-5 px-4 py-1.5 bg-white/5 backdrop-blur-2xl rounded-full text-[9px] font-mono text-white tracking-widest uppercase border border-white/10">Texture</div>
                </div>
                <div className="px-5">
                  <h4 className="text-white font-bold text-lg uppercase tracking-widest">Sharp Focus</h4>
                  <p className="text-slate-500 text-[11px] mt-2.5 font-mono leading-relaxed">Sharp details and deep bokeh.</p>
                </div>
              </div>

              {/* Sky */}
              <div className="group space-y-6 lg:translate-y-16">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-[#111111] border border-white/5 hover:border-white/20 transition-all duration-500">
                  <img src="/gallery/clouds.webp" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110" alt="Sky" />
                  <div className="absolute bottom-5 left-5 px-4 py-1.5 bg-white/5 backdrop-blur-2xl rounded-full text-[9px] font-mono text-white tracking-widest uppercase border border-white/10">Atmosphere</div>
                </div>
                <div className="px-5">
                  <h4 className="text-white font-bold text-lg uppercase tracking-widest">Great Cloud</h4>
                  <p className="text-slate-500 text-[11px] mt-2.5 font-mono leading-relaxed">Dramatic Pekalongan sky series.</p>
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </section>

      {/* --- 7. FOOTER (B&W) --- */}
      <footer className="py-24 text-center border-t border-white/5 bg-[#000000]">
        <p className="text-slate-700 text-[10px] font-mono tracking-[0.5em] uppercase">
          Built in Pekalongan — 2026 — Termux Powered
        </p>
      </footer>

    </div>
  )
}

export default App

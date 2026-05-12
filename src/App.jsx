import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// --- JURUS ANTI KEDIP: Komponen Reveal di luar fungsi App ---
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
  
  const logos = [
    { 
      name: 'Python', 
      type: 'img', 
      src: "https://cdn.simpleicons.org/python/3776AB" 
    },
    { 
      name: 'Termux', 
      type: 'svg', 
      color: '#ffffff',
      path: "M1.2 5.2h21.6v21.6H1.2V5.2zm2 2v17.6h17.6V7.2H3.2zm4.8 4.8l4.8 4.8-4.8 4.8-1.4-1.4 3.4-3.4-3.4-3.4 1.4-1.4zm4.8 8.2h6.4v2H12.8v-2z"
    },
    { 
      name: 'Linux', 
      type: 'img', 
      src: "https://cdn.simpleicons.org/linux/fcd34d" 
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-300 font-sans selection:bg-[#9d74fd]/30 overflow-x-hidden">
      
      {/* --- 1. NAV BAR --- */}
      <nav className="p-6 md:p-10 flex justify-between items-center max-w-6xl mx-auto border-b border-white/5 bg-[#0a0a0c]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="text-xl text-[#9d74fd] font-black tracking-tighter uppercase font-mono">ADIL.DEV</div>
        <div className="flex gap-4 md:gap-8 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40">
          <a href="#tentang" className="hover:text-white transition-colors">Tentang</a>
          <a href="#skill" className="hover:text-white transition-colors">Skill</a>
          <a href="#proyek" className="hover:text-white transition-colors">Proyek</a>
        </div>
      </nav>

      {/* --- 2. HERO SECTION (FULL CENTERED) --- */}
      <section className="px-8 py-16 max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[80vh] text-center">
        <div className="space-y-6 md:space-y-8 flex flex-col items-center">
          <div className="inline-block px-3 py-1 rounded-full bg-[#9d74fd]/10 border border-[#9d74fd]/20 text-[#9d74fd] text-[10px] font-bold uppercase tracking-widest leading-none">
            Informatics Student
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase">
            CODE <br />
            <span className="text-[#9d74fd] block my-2">&</span>
            SECURITY.
          </h1>

          <p className="text-slate-400 text-sm md:text-lg leading-relaxed max-w-lg mx-auto">
            Mengeksplorasi dunia <span className="text-white font-semibold">Cybersecurity</span> dan identitas visual melalui baris kode di Termux.
          </p>

          <div className="flex gap-4 justify-center pt-4">
            <a href="#proyek" className="px-8 py-4 bg-[#9d74fd] text-white font-bold rounded-2xl shadow-xl shadow-[#9d74fd]/20 text-sm active:scale-95 transition-all">Proyek</a>
            <button className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 text-sm active:scale-95 transition-all">Kontak</button>
          </div>
        </div>
      </section>

      {/* --- 3. TENTANG SAYA (LOGO PINDAH KE SINI) --- */}
      <section id="tentang" className="px-8 py-32 bg-[#0d0d0f] scroll-mt-20">
        <Reveal>
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">
            
            {/* AREA LOGO LEBIH KECIL (Flip Card + Fade Text) */}
            <div className="flex flex-col items-center justify-center perspective-[1200px] gap-4">
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="absolute inset-0 bg-[#15171e] border border-white/10 rounded-2xl shadow-2xl flex items-center justify-center p-6 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#9d74fd]/10 to-transparent" />
                    {logos[index].type === 'img' ? (
                      <img src={logos[index].src} className="w-12 h-12 md:w-16 md:h-16 relative z-10 object-contain drop-shadow-xl" alt="logo" />
                    ) : (
                      <svg viewBox="0 0 24 24" className="w-12 h-12 md:w-16 md:h-16 relative z-10" fill={logos[index].color}>
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
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.6 }}
                    className="text-[8px] md:text-[10px] font-mono tracking-[0.5em] uppercase text-[#9d74fd] font-black"
                  >
                    {logos[index].name}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Teks Deskripsi */}
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">/ Tentang Saya</h2>
              <p className="text-slate-400 text-base md:text-xl leading-relaxed">
                Halo, saya Muhammad Adil Keysa Andra. Sebagai mahasiswa informatika, saya aktif mengeksplorasi cyber security, tools open-source dan otomasi sistem.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* --- 4. KEAHLIAN --- */}
      <section id="skill" className="px-8 py-32 max-w-6xl mx-auto scroll-mt-20">
        <Reveal>
          <h2 className="text-2xl font-bold text-white mb-12 uppercase tracking-[0.2em] flex items-center justify-center gap-4">
            <span className="hidden md:block w-12 h-px bg-[#9d74fd]"></span> Skillset <span className="hidden md:block w-12 h-px bg-[#9d74fd]"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-10 bg-[#15171e] border border-white/5 rounded-[2.5rem] hover:border-[#9d74fd]/40 transition-all text-center md:text-left">
              <p className="text-[#9d74fd] font-mono text-[10px] uppercase mb-4 tracking-widest">Offensive</p>
              <h3 className="text-white font-bold text-xl mb-6 tracking-tight">Security Tools</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start text-xs text-slate-500">
                {['Nmap', 'Sqlmap', 'Sherlock', 'Metasploit'].map(s => (
                  <span key={s} className="px-3 py-1 bg-black/40 rounded-lg border border-white/5">{s}</span>
                ))}
              </div>
            </div>
            <div className="p-10 bg-[#15171e] border border-white/5 rounded-[2.5rem] hover:border-[#9d74fd]/40 transition-all text-center md:text-left">
              <p className="text-[#9d74fd] font-mono text-[10px] uppercase mb-4 tracking-widest">Creative</p>
              <h3 className="text-white font-bold text-xl mb-6 tracking-tight">Design & UI</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start text-xs text-slate-500">
                {['Photopea', 'Inkscape', 'Alight Motion', 'Hypic'].map(s => (
                  <span key={s} className="px-3 py-1 bg-black/40 rounded-lg border border-white/5">{s}</span>
                ))}
              </div>
            </div>
            <div className="p-10 bg-[#15171e] border border-white/5 rounded-[2.5rem] hover:border-[#9d74fd]/40 transition-all text-center md:text-left">
              <p className="text-[#9d74fd] font-mono text-[10px] uppercase mb-4 tracking-widest">System</p>
              <h3 className="text-white font-bold text-xl mb-6 tracking-tight">Environment</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start text-xs text-slate-500">
                {['Termux', 'Git', 'Python'].map(s => (
                  <span key={s} className="px-3 py-1 bg-black/40 rounded-lg border border-white/5">{s}</span>
                ))}
              </div>
            </div>
            <div className="p-10 bg-[#15171e] border border-white/5 rounded-[2.5rem] hover:border-[#9d74fd]/40 transition-all text-center md:text-left">
              <p className="text-[#9d74fd] font-mono text-[10px] uppercase mb-4 tracking-widest">Creative</p>
              <h3 className="text-white font-bold text-xl mb-6 tracking-tight">Photography</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start text-xs text-slate-500">
                {['Gcam', 'Lightroom', 'Snapseed', 'Ld'].map(s => (
                  <span key={s} className="px-3 py-1 bg-black/40 rounded-lg border border-white/5">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* --- 5. PROYEK --- */}
      <section id="proyek" className="px-8 py-32 bg-[#0d0d0f] scroll-mt-20">
        <Reveal>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-12 italic">Proyek</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#15171e] border border-white/5 p-8 hover:border-[#9d74fd]/30 transition-all">
                <h3 className="text-2xl font-bold text-white mb-2">Web Media Downloader</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Tools scraping berbasis Python untuk mendownload media dari berbagai platform sosial media.</p>
                <div className="flex gap-2 font-mono text-[10px] text-[#9d74fd]">#Python #Scraping</div>
              </div>
              <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#15171e] border border-white/5 p-8 hover:border-[#9d74fd]/30 transition-all">
                <h3 className="text-2xl font-bold text-white mb-2">Bite. Packaging</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Desain identitas visual dan kemasan produk dengan konsep Swiss Style yang minimalis.</p>
                <div className="flex gap-2 font-mono text-[10px] text-[#9d74fd]">#Design #Branding</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* --- 6. FOOTER --- */}
      <footer className="py-20 text-center border-t border-white/5 bg-[#0a0a0c]">
        <p className="text-slate-600 text-[9px] font-mono tracking-[0.5em] uppercase">
          Built in Pekalongan — 2026 — Termux Powered
        </p>
      </footer>

    </div>
  )
}

export default App

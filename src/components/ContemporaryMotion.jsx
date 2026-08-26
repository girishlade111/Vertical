import { useEffect, useRef } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

export default function ContemporaryMotion(){
  const reduce=usePrefersReducedMotion()
  const pillRef=useRef(null)
  useEffect(()=>{
    if(reduce) return
    const el=pillRef.current
    if(!el) return
    const io=new IntersectionObserver(([e])=>{
      if(e.isIntersecting){
        el.style.filter='blur(0)'
        el.style.opacity='1'
        el.style.transform='translateY(0)'
      }
    },{threshold:0.5})
    io.observe(el)
    el.style.filter='blur(8px)'
    el.style.opacity='0'
    el.style.transform='translateY(8px)'
    el.style.transition='filter 0.5s var(--ease-expo), opacity 0.5s var(--ease-expo), transform 0.5s var(--ease-expo)'
    return()=>io.disconnect()
  },[reduce])
  return (
    <section className="bg-white px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_1fr] gap-8">
        <div>
          <div className="text-[10px] font-mono uppercase text-black/60">CONCEPT <span className="text-lime">|</span> MOTION ART</div>
          <h2 className="mt-2 font-black uppercase leading-none tracking-tight text-[32px] md:text-[44px] text-black">CONTEMPORARY<span className="text-lime">/</span><br/><span className="text-black/40">MOTION</span> CONCEPT</h2>
          <p className="mt-4 text-[11px] font-mono uppercase leading-relaxed text-black/70">A STUDY IN RHYTHM, DISTORTION, AND CONTROLLED IMBALANCE. SURFACES REACT TO MOVEMENT. MOVEMENT RESHAPES THE FRAME. THE PIECE SHIFTS BETWEEN CLARITY AND NOISE, REVEALING PATTERNS YOU ONLY SEE WHEN THEY BREAK.</p>
          <div className="mt-4 flex items-center gap-6 text-[18px] font-black text-black">
            <span>2024 —</span><span>2025</span>
            <span ref={pillRef} className="ml-2 bg-lime text-black text-[10px] font-mono uppercase px-3 py-1 rounded-full">IN PROGRESS</span>
          </div>
          <div className="mt-4 text-[10px] font-mono uppercase text-black/60">RIPPLE TRACE</div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80&auto=format&fit=crop" alt="" className="w-full h-[360px] object-cover grayscale" loading="lazy"/>
          <div className="absolute inset-0 scanline-strip opacity-10 pointer-events-none"/>
        </div>
      </div>
      <div className="mt-10 text-center">
        <div className="text-black font-black uppercase leading-none text-[14vw] tracking-tight">AK1.0</div>
      </div>
    </section>
  )
}

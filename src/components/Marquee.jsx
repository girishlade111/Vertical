import { useEffect, useRef } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

export default function Marquee(){
  const reduce=usePrefersReducedMotion()
  const trackRef=useRef(null)
  useEffect(()=>{
    if(reduce) return
    let lastY=window.scrollY, vel=0, skew=0, raf
    const onScroll=()=>{
      const d=window.scrollY - lastY
      vel = d*0.08
      lastY=window.scrollY
    }
    window.addEventListener('scroll', onScroll, {passive:true})
    const loop=()=>{
      skew += (vel - skew)*0.08
      vel *=0.92
      if(trackRef.current) trackRef.current.style.transform=`skewX(${Math.max(-4,Math.min(4,skew))}deg)`
      raf=requestAnimationFrame(loop)
    }
    loop()
    return()=>{window.removeEventListener('scroll',onScroll); cancelAnimationFrame(raf)}
  },[reduce])

  return (
    <section className="bg-black py-8 md:py-12 overflow-hidden border-y border-white/10">
      <div className="overflow-hidden select-none" aria-hidden="true">
        <div ref={trackRef} className="flex will-change-transform" style={reduce? {}:{animation:''}}>
          <div className="flex shrink-0" style={{animation: reduce? 'none':'marquee 45s linear infinite'}}>
            {[0,1].map(i=>(
              <span key={i} className="text-lime font-black uppercase leading-none text-[22vw] whitespace-nowrap pr-8">LADE STACK&nbsp;</span>
            ))}
            {[0,1].map(i=>(
              <span key={'b'+i} className="text-lime font-black uppercase leading-none text-[22vw] whitespace-nowrap pr-8">LADE STACK&nbsp;</span>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 md:px-10 mt-4">
        <p className="text-[#d9d9d9] uppercase font-black leading-none text-[6vw] md:text-[5vw] tracking-tight">THE LIVE ARCHIVE OF EVERYTHING I AM BUILDING AND SHIPPING.</p>
        <div className="mt-6 flex items-center justify-between border-y border-white/15 py-3 text-[10px] font-mono uppercase">
          <span className="text-white/60 flex items-center gap-2"><span className="w-2 h-2 bg-lime inline-block"/> LADESTACK_STORAGE — 2024-2026</span>
          <span className="text-white/40">SOLO DEV BUILDS</span>
        </div>
      </div>
    </section>
  )
}

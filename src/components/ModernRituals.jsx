import { useEffect, useState } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const words=['CONFESSIONS','RITUALS','SIGNALS']

export default function ModernRituals(){
  useScrollReveal('.reveal-modern')
  const reduce=usePrefersReducedMotion()
  const [idx,setIdx]=useState(0)
  useEffect(()=>{
    if(reduce) return
    const sec=document.getElementById('modern')
    let id
    const io=new IntersectionObserver(([e])=>{
      if(e.isIntersecting) id=setInterval(()=>setIdx(v=>(v+1)%words.length),3000)
      else clearInterval(id)
    },{threshold:0.3})
    if(sec) io.observe(sec)
    id=setInterval(()=>setIdx(v=>(v+1)%words.length),3000)
    return()=>{clearInterval(id); io.disconnect()}
  },[reduce])
  return (
    <section id="modern" className="bg-lime grid md:grid-cols-[1fr_40px_1fr] items-stretch">
      <div className="px-6 md:px-10 py-10 md:py-14 flex flex-col">
        <h2 className="text-black font-black uppercase leading-none text-[10vw] md:text-[6vw] tracking-tight">MODERN<br/>RITUALS</h2>
        <div className="mt-2 text-[10px] font-mono uppercase text-black/60">STUDY — 04.13<br/>SELECTED WORK</div>
        <div className="mt-6 border-l-[6px] border-black pl-4">
          <p data-text="LINES BECOME SIGNALS. SURFACES BECOME STORIES." className="reveal-modern text-black uppercase font-black text-[22px] md:text-[28px] leading-none">LINES BECOME SIGNALS. SURFACES BECOME STORIES.</p>
          <p data-text="STRUCTURE ARGUES WITH IMPULSE UNTIL BOTH LEARN TO STAND STILL. GRIDS SET THE PACE. MARGINS HOLD THE QUIET." className="reveal-modern mt-3 text-black/70 text-[11px] font-mono uppercase leading-relaxed">STRUCTURE ARGUES WITH IMPULSE UNTIL BOTH LEARN TO STAND STILL. GRIDS SET THE PACE. MARGINS HOLD THE QUIET.</p>
        </div>
        <div className="mt-auto pt-8 flex gap-3">
          {[
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200&q=80&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=200&q=80&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=200&q=80&auto=format&fit=crop'
          ].map((s,i)=>(
            <div key={i} className="w-[72px] h-[72px] bg-black border border-black overflow-hidden">
              <img src={s} alt="" className="w-full h-full object-cover grayscale" loading="lazy"/>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block w-10 scanline-strip opacity-40" aria-hidden/>
      <div className="relative min-h-[520px] bg-black overflow-hidden">
        <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=80&auto=format&fit=crop" alt="Face wrapped in plastic" className="absolute inset-0 w-full h-full object-cover grayscale contrast-110" loading="lazy"/>
        <div className="absolute inset-0 grid place-items-center">
          <div className="overflow-hidden h-[60px]">
            <div key={idx} className="text-white font-black text-[36px] md:text-[48px] tracking-tight uppercase" style={{animation: reduce? 'none':'clipReveal 0.2s var(--ease-expo)'}}>
              [{words[idx]}]
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes clipReveal{from{transform:translateY(100%)}to{transform:translateY(0)}}`}</style>
    </section>
  )
}

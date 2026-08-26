import { useEffect, useRef } from 'react'

export default function About(){
  const lineRef=useRef(null)
  useEffect(()=>{
    const el=lineRef.current
    if(!el) return
    const io=new IntersectionObserver(([e])=>{
      if(e.isIntersecting) el.style.transform='scaleX(1)'
    },{threshold:0.5})
    el.style.transform='scaleX(0)'
    el.style.transformOrigin='left'
    el.style.transition='transform 0.8s var(--ease-expo)'
    io.observe(el)
    return()=>io.disconnect()
  },[])
  return (
    <section id="about2" className="bg-white px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-8">
        <div>
          <div className="font-black uppercase leading-none tracking-tight text-black text-[12vw] md:text-[9vw]">I'AM</div>
          <div className="text-[11px] font-mono uppercase text-black/60">Adam Knoxville</div>
          <div className="mt-4 text-black uppercase font-black text-[18px] leading-tight">I'M A UK-BASED VISUAL ARTIST DRIVEN BY EXPERIMENTS, SYSTEMS, AND THE SPACES BETWEEN.</div>
          <p className="mt-3 text-[11px] font-mono uppercase leading-relaxed text-black/60">I build work that tests how image, form, and motion behave when pushed. Systems that evolve over time.</p>
          <div className="mt-4 border-l-2 border-black pl-3">
            <p className="text-black uppercase font-black text-[13px] leading-tight">I MAKE WORK ACROSS IMAGE, FORM, MOTION AND TEXT</p>
          </div>
        </div>
        <div className="relative bg-[#f0f0f0] min-h-[380px] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop" alt="Adam portrait" className="w-full h-full object-cover grayscale" loading="lazy"/>
          <div className="absolute bottom-3 left-3 text-[10px] font-mono uppercase bg-black text-white px-2 py-1">STUDIO 204 — LONDON</div>
        </div>
      </div>
      <div className="mt-8 max-w-[1200px] mx-auto flex items-center gap-3">
        <span className="font-serif text-3xl">A<span className="text-[11px] align-super">K</span></span>
        <div ref={lineRef} className="h-px bg-black flex-1"/>
        <span className="text-[10px] font-mono uppercase">Adam Knoxville</span>
      </div>
    </section>
  )
}

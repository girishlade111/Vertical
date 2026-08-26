import { useEffect, useRef } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

export default function EmbracingUnknown(){
  const reduce=usePrefersReducedMotion()
  const canvasRef=useRef(null)
  // glitch canvas effect
  useEffect(()=>{
    if(reduce) return
    const img=new Image()
    img.src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&q=80&auto=format&fit=crop'
    img.crossOrigin='anonymous'
    const canvas=canvasRef.current
    if(!canvas) return
    const ctx=canvas.getContext('2d')
    let w,h, raf, interval
    const draw=()=>{
      w=canvas.width=canvas.offsetWidth*2
      h=canvas.height=canvas.offsetHeight*2
      ctx.filter='grayscale(1) contrast(1.08)'
      ctx.drawImage(img,0,0,w,h)
      // slices
      const slices=28
      for(let i=0;i<slices;i++){
        const sliceH=h/slices
        const y=i*sliceH
        const centerDist=Math.abs(i - slices/2)/(slices/2)
        const amp= (1-centerDist)* 60 * (0.3 + Math.random()*0.7*0.3) // idle 30%
        const off=(Math.random()-0.5)*amp*2
        if(Math.abs(off)>4){
          ctx.drawImage(canvas, 0, y, w, sliceH, off, y, w, sliceH)
          if(Math.random()<0.2){
            ctx.fillStyle='#81ff28'
            ctx.fillRect(off>0? w+off-1: off, y, 1, sliceH)
          }
        }
      }
    }
    img.onload=()=>{
      draw()
      interval=setInterval(draw, 180)
      let lastY=window.scrollY
      const onScroll=()=>{
        const vel=Math.abs(window.scrollY-lastY)
        lastY=window.scrollY
        if(vel>4){ clearInterval(interval); interval=setInterval(draw, 90); setTimeout(()=>{clearInterval(interval); interval=setInterval(draw,180)},600)}
      }
      window.addEventListener('scroll',onScroll,{passive:true})
      return()=>window.removeEventListener('scroll',onScroll)
    }
    return()=>clearInterval(interval)
  },[reduce])

  return (
    <section className="bg-[#d9d9d9] grid md:grid-cols-[1fr_40px_1fr] items-stretch">
      <div className="relative min-h-[620px] bg-black overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{filter:'grayscale(1) contrast(1.08)'}}/>
        {!reduce && <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&q=80&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover grayscale opacity-0" aria-hidden/>}
        {reduce && <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&q=80&auto=format&fit=crop" alt="Hooded figure" className="absolute inset-0 w-full h-full object-cover grayscale" loading="lazy"/>}
        <div className="absolute top-6 left-6 text-white text-[10px] font-mono uppercase leading-tight">
          <div>ILLUSION</div><div>PERSPECTIVE</div><div>CONTROL</div>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-white uppercase font-black leading-none text-[6vw] md:text-[4vw]">PATTERNS EMERGE.<br/>FRICTION CREATES<br/>MEANING.</p>
        </div>
      </div>
      <div className="hidden md:block w-10 scanline-vertical opacity-30"/>
      <div className="px-6 md:px-10 py-10 md:py-16 flex flex-col justify-center bg-[#d9d9d9]">
        <h2 className="text-black uppercase font-black leading-none tracking-tight text-[10vw] md:text-[7vw]">EMBRACING THE<br/><span className="text-[11vw] md:text-[8vw]">UNKNOWN</span></h2>
        <div className="mt-3 h-1 bg-black w-full"/>
        <p className="mt-4 text-black uppercase font-black text-[14px] md:text-[16px] leading-tight">I FOLLOW IDEAS INTO PLACES THAT DON'T HAVE NAMES YET. SOME REVEAL STRUCTURE. SOME COLLAPSE INTO NOISE.</p>
        <p className="mt-3 text-black/50 text-[11px] font-mono uppercase leading-relaxed">Obsession and end misbehave in measure. I return often with the same questions. Discipline is a form of curiosity, and uncertainty a compass.</p>
        <div className="mt-8 border-t border-black/10 pt-6">
          <p className="text-black uppercase font-black text-[18px] leading-tight">WHAT HOLDS UP IS<br/>WHAT MATTERS.</p>
          <p className="mt-2 text-[11px] font-mono uppercase text-black/60">Observation over explanation.<br/>Process over certainty.</p>
        </div>
        <div className="mt-6">
          <p className="text-black uppercase font-black text-[18px] leading-tight">SIGNALS FORM.<br/>SURFACES RESPOND.</p>
        </div>
      </div>
    </section>
  )
}

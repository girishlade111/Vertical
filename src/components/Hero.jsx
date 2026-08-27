import { useEffect, useRef, useState } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

export default function Hero(){
  const reduce=usePrefersReducedMotion()
  const verRef=useRef(null), tiRef=useRef(null), calRef=useRef(null), portraitRef=useRef(null)
  const [loaded,setLoaded]=useState(false)
  const ptr=useRef({x:0,y:0, tx:0, ty:0})
  const rafRef=useRef(null)

  useEffect(()=>{ const t=setTimeout(()=>setLoaded(true), 50); return()=>clearTimeout(t)},[])

  // cursor parallax
  useEffect(()=>{
    if(reduce || !('ontouchstart' in window)===false){ /* allow but check fine pointer */ }
    if(reduce) return
    const isFine = window.matchMedia('(pointer: fine)').matches
    if(!isFine) return
    const hero=document.getElementById('hero')
    if(!hero) return
    const onMove=e=>{
      const r=hero.getBoundingClientRect()
      ptr.current.tx = ((e.clientX - r.left)/r.width -0.5)
      ptr.current.ty = ((e.clientY - r.top)/r.height -0.5)
    }
    hero.addEventListener('mousemove', onMove)
    const loop=()=>{
      ptr.current.x += (ptr.current.tx - ptr.current.x)*0.06
      ptr.current.y += (ptr.current.ty - ptr.current.y)*0.06
      const {x,y}=ptr.current
      if(verRef.current) verRef.current.style.transform=`translate(${x*-18}px, ${y*-10}px)`
      if(tiRef.current) tiRef.current.style.transform=`translate(${x*-26}px, ${y*-14}px)`
      if(calRef.current) calRef.current.style.transform=`translate(${x*-34}px, ${y*-18}px)`
      if(portraitRef.current) portraitRef.current.style.transform=`translate(${x*8}px, ${y*5}px) scale(1)`
      rafRef.current=requestAnimationFrame(loop)
    }
    loop()
    const io=new IntersectionObserver(([e])=>{
      if(!e.isIntersecting){ cancelAnimationFrame(rafRef.current) } else { cancelAnimationFrame(rafRef.current); loop() }
    },{threshold:0})
    io.observe(hero)
    return()=>{ hero.removeEventListener('mousemove',onMove); cancelAnimationFrame(rafRef.current); io.disconnect() }
  },[reduce])

  // phase ticks cycling
  const [activePhase,setActivePhase]=useState(0)
  useEffect(()=>{
    if(reduce) return
    const hero=document.getElementById('hero')
    let id
    const io=new IntersectionObserver(([e])=>{
      if(e.isIntersecting){
        id=setInterval(()=>setActivePhase(v=>(v+1)%4), 1200)
      } else clearInterval(id)
    },{threshold:0.3})
    if(hero) io.observe(hero)
    id=setInterval(()=>setActivePhase(v=>(v+1)%4),1200)
    return()=>{clearInterval(id); io.disconnect()}
  },[reduce])

  return (
    <section id="hero" className="relative h-[100vh] min-h-[620px] bg-black overflow-hidden flex flex-col">
      {/* portrait */}
      <div ref={portraitRef} className="absolute inset-0 left-[36%] md:left-[42%] will-change-transform" style={!reduce?{animation:'driftPortrait 17s ease-in-out infinite alternate'}:{}}>
        <img src="/hero.jpg" alt="Portrait of Girish Lade" className="w-full h-full object-cover object-top grayscale contrast-[1.06]" loading="eager"
          style={{
            opacity: loaded?1:0,
            transform: loaded? 'scale(1)':'scale(1.04)',
            transition: reduce? 'opacity 0.2s': 'opacity 1.1s var(--ease-expo) 0.2s, transform 1.1s var(--ease-expo) 0.2s'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-[30%] pointer-events-none"/>
      </div>

      {/* LA DE STACK */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-10 pointer-events-none select-none">
        <div className="clip-mask">
          <div ref={verRef} className="text-lime font-black uppercase leading-[0.85] tracking-[-0.04em] text-[22vw] md:text-[19vw] will-change-transform"
            style={{
              transform: loaded? 'translateY(0)':'translateY(110%)',
              transition: reduce? 'opacity 0.2s': 'transform 0.9s var(--ease-expo) 0s',
              animation: !reduce && loaded? 'driftVer 11s ease-in-out infinite alternate 1.6s' : undefined
            }}>
            LA
          </div>
        </div>
        <div className="clip-mask ml-[18%] md:ml-[34%] -mt-2 md:-mt-4">
          <div ref={tiRef} className="text-lime font-black uppercase leading-[0.85] tracking-[-0.04em] text-[22vw] md:text-[19vw] will-change-transform"
            style={{
              transform: loaded? 'translateY(0)':'translateY(110%)',
              transition: reduce? 'opacity 0.2s': 'transform 0.9s var(--ease-expo) 0.12s',
              animation: !reduce && loaded? 'driftTi 13s ease-in-out infinite alternate 1.6s' : undefined
            }}>
            DE
          </div>
        </div>
        <div className="clip-mask ml-[10%] md:ml-[36%] -mt-2 md:-mt-4">
          <div ref={calRef} className="text-lime font-black uppercase leading-[0.85] tracking-[-0.04em] text-[22vw] md:text-[19vw] will-change-transform"
            style={{
              transform: loaded? 'translateY(0)':'translateY(110%)',
              transition: reduce? 'opacity 0.2s': 'transform 0.9s var(--ease-expo) 0.24s',
              animation: !reduce && loaded? 'driftCal 9s ease-in-out infinite alternate 1.6s' : undefined
            }}>
            STACK
          </div>
        </div>
      </div>

      {/* headline block top-right */}
      <div className="absolute top-16 md:top-20 right-6 md:right-10 z-20 max-w-[340px] md:max-w-[420px] text-right"
        style={{
          opacity: loaded?1:0,
          transform: loaded? 'translateY(0)':'translateY(24px)',
          transition: reduce? 'opacity 0.2s': 'opacity 0.6s var(--ease-expo) 0.5s, transform 0.6s var(--ease-expo) 0.5s'
        }}
      >
        <div className="font-black uppercase leading-[0.95] tracking-tight text-[24px] md:text-[36px]">
          <div className="text-lime">I BUILD &amp; BREAK</div>
          <div className="text-white">THINGS TO MASTER</div>
          <div className="text-white">HOW THEY WORK</div>
        </div>
        <div className="mt-4 flex justify-end gap-3 items-center">
          <div className="w-1.5 h-7 bg-lime" style={{transform: loaded?'scaleY(1)':'scaleY(0)', transformOrigin:'top', transition:'transform 0.5s var(--ease-expo) 0.7s'}}/>
          <div className="text-left font-mono">
            <div className="text-lime text-[13px] uppercase font-black tracking-wider">GIRISH LADE</div>
            <div className="text-white/80 text-[10px] uppercase tracking-wider">SOLO FOUNDER / LADE STACK</div>
          </div>
        </div>
      </div>

      {/* phase timeline */}
      <div className="absolute top-[58%] md:top-[48%] left-6 md:left-10 right-6 md:right-10 z-20 hidden md:grid grid-cols-4 gap-6">
        {[
          ['001','ARCHITECT'],
          ['002','BUILD'],
          ['003','BREAK'],
          ['004','SHIP'],
        ].map(([num,label],i)=>(
          <div key={num} className="relative">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wide">
              <span className="text-white">{num}</span>
              <span className="h-px w-6 bg-white/30"/>
              <span className="text-white/60">PHASE /</span><span className={activePhase===i?'text-lime':'text-white/40'} style={{opacity: activePhase===i?1:0.7}}>{label}</span>
            </div>
            <div className="mt-3 h-[160px] w-px bg-white/15 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full bg-white/40" style={{
                height:'100%',
                transform: loaded? 'scaleY(1)':'scaleY(0)',
                transformOrigin:'top',
                transition: reduce? 'none' : `transform 0.7s var(--ease-expo) ${0.75 + i*0.1}s`
              }}/>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-lime transition-transform" style={{transform: activePhase===i? 'scale(1)':'scale(0)', transition:'transform 0.3s'}}/>
            </div>
          </div>
        ))}
      </div>

      {/* index list bottom-left */}
      <div className="absolute bottom-6 md:bottom-8 left-6 md:left-10 z-20 flex gap-4 items-start">
        <div className="hidden md:block text-[10px] font-mono leading-none">
          <div className="text-white">IDX/GL</div>
          <div className="text-lime font-bold">2026</div>
        </div>
        <div className="hidden md:block w-px h-[92px] bg-white/20 self-stretch" style={{transform: loaded?'scaleY(1)':'scaleY(0)', transformOrigin:'top', transition:'transform 0.6s var(--ease-expo) 0.85s'}}/>
        <div className="flex flex-col gap-0.5">
          {['PRODUCT BUILDS','SYSTEM & UX','CODE EXPERIMENTS','CAREER LOG','IDEAS IN PROGRESS'].map((t,i)=>(
            <a key={t} href={`#${['produc','system','codeex','career','ideasi'][i]}`} onClick={e=>{e.preventDefault(); document.getElementById(['produc','system','codeex','career','ideasi'][i])?.scrollIntoView({behavior:'smooth'})}} className="text-white uppercase font-black text-[12px] md:text-[14px] leading-none tracking-tight hover:text-lime transition-colors"
              style={{
                opacity: loaded?1:0,
                transform: loaded? 'translateY(0)':'translateY(16px)',
                transition: reduce? 'opacity 0.2s' : `opacity 0.5s var(--ease-expo) ${0.9+i*0.07}s, transform 0.5s var(--ease-expo) ${0.9+i*0.07}s`
              }}
            >{t}</a>
          ))}
        </div>
      </div>
    </section>
  )
}

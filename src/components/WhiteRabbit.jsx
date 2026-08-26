import { useEffect, useRef } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

export default function WhiteRabbit(){
  const reduce=usePrefersReducedMotion()
  const ringRef=useRef(null)
  useEffect(()=>{
    if(reduce) return
    let vel=0, lastY=window.scrollY, speed=1, raf
    const onScroll=()=>{
      const d=window.scrollY - lastY
      vel = d*0.02
      lastY=window.scrollY
      speed = 1 + Math.max(-0.5, Math.min(1, vel))
      setTimeout(()=>{speed=1},800)
    }
    window.addEventListener('scroll', onScroll, {passive:true})
    let rot=0
    const loop=()=>{
      rot += 0.12 * speed
      if(ringRef.current) ringRef.current.style.transform=`rotate(${rot}deg)`
      raf=requestAnimationFrame(loop)
    }
    loop()
    const io=new IntersectionObserver(([e])=>{
      if(!e.isIntersecting) cancelAnimationFrame(raf)
      else { cancelAnimationFrame(raf); loop() }
    },{threshold:0.2})
    const sec=document.getElementById('rabbit')
    if(sec) io.observe(sec)
    return()=>{window.removeEventListener('scroll',onScroll); cancelAnimationFrame(raf); io.disconnect()}
  },[reduce])
  return (
    <section id="rabbit" className="bg-[#efefef] py-12 md:py-16 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
        <p className="text-black uppercase font-black text-[14px] md:text-[16px] leading-tight">I FOLLOW IDEAS INTO PLACES THAT SHIFT AS I STEP INTO THEM. PATHS APPEAR, VANISH, REAPPEAR SOMEWHERE ELSE.<br/><span className="text-black">BOTH KEEP THE RABBIT MOVING.</span></p>
        <div className="relative w-[320px] h-[320px] md:w-[460px] md:h-[460px] mx-auto">
          <div ref={ringRef} className="absolute inset-0 will-change-transform" style={reduce?{}:{}}>
            <svg viewBox="0 0 460 460" className="w-full h-full">
              <defs><path id="circle" d="M230 40 A190 190 0 1 1 229.9 40"/></defs>
              <text fill="#050609" opacity="0.35" fontSize="22" fontWeight="700" letterSpacing="3.2">
                <textPath href="#circle">CHASING THE WHITE RABBIT * CHASING THE WHITE RABBIT * CHASING THE WHITE RABBIT * </textPath>
              </text>
            </svg>
          </div>
          <div className="absolute inset-0 grid place-items-center pointer-events-none">
            <svg width="140" height="180" viewBox="0 0 140 180" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round">
              <ellipse cx="70" cy="38" rx="28" ry="34" />
              <ellipse cx="58" cy="14" rx="10" ry="30" />
              <ellipse cx="82" cy="14" rx="10" ry="30" />
              <path d="M58 30 L64 38 M82 30 L76 38"/>
              <text x="62" y="44" fontSize="10" stroke="none" fill="#000">×</text>
              <text x="80" y="44" fontSize="10" stroke="none" fill="#000">×</text>
              <path d="M70 48 L66 54 L70 52 L74 54 Z"/>
              <path d="M42 70 Q70 85 98 70 L98 140 Q70 160 42 140 Z"/>
              <path d="M52 140 Q48 160 60 165"/>
              <path d="M88 140 Q92 160 80 165"/>
              <path d="M30 60 L42 62 M30 68 L42 68 M30 76 L42 74"/>
              <path d="M110 60 L98 62 M110 68 L98 68 M110 76 L98 74"/>
            </svg>
          </div>
        </div>
        <p className="text-black/40 uppercase font-black text-[14px] md:text-[16px] leading-tight text-right">BECOMES SOMETHING IT WASN'T MEANT TO BE. I STAY WITH IT UNTIL IT REVEALS A REASON TO FOLLOW.<br/><span className="text-black">THE RABBIT IS NEVER STILL.</span></p>
      </div>
      <div className="mt-10">
        <div className="text-center">
          <div className="text-black font-black uppercase leading-none text-[14vw] md:text-[11vw] tracking-tight">VERTICAL</div>
          <div className="mt-2 h-px bg-black max-w-[1200px] mx-auto flex items-center justify-between px-2">
            <span className="bg-[#efefef] px-2 -ml-2 font-serif text-xl">A<span className="text-[10px] align-super">K</span></span>
            <span className="text-[9px] font-mono uppercase bg-[#efefef] px-2">Adam Knoxville</span>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-[1200px] mx-auto bg-black text-white p-6 md:p-8">
          {[
            ['VISUAL','IMAGES PULLED FROM MOVEMENT, MEMORY, AND INTERRUPTION. STUDIES IN LIGHT, DEPTH, AND DISTORTION. WORK BUILT FROM THE URGE TO SEE WHAT HAPPENS NEXT.'],
            ['FORM','OBJECTS, SYSTEMS, AND STRUCTURES UNDER TENSION. WHERE FUNCTION BENDS INTO EXPRESSION. TESTS BUILT TO REVEAL HOW MATERIALS BEHAVE WHEN PUSHED.'],
            ['MOTION','FRAMES DRIVEN BY RHYTHM AND ATMOSPHERE. LOOPS, PULSES, AND SHIFTING PERSPECTIVES. PIECES MEANT TO BE FELT BEFORE THEY\'RE UNDERSTOOD.']
          ].map(([t,b])=>(
            <div key={t}>
              <div className="flex items-center gap-2 text-lime text-[13px] font-black uppercase"><span className="w-2 h-2 rounded-full bg-lime"/> {t}</div>
              <div className="mt-2 h-px bg-white/15"/>
              <p className="mt-3 text-[11px] font-mono uppercase leading-relaxed text-white/70">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

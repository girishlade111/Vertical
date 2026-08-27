import { useEffect, useRef } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

export default function WhiteRabbit() {
  const reduce = usePrefersReducedMotion()
  const ringRef = useRef(null)

  useEffect(() => {
    if (reduce) return
    let vel = 0,
      lastY = window.scrollY,
      speed = 1,
      raf
    const onScroll = () => {
      const d = window.scrollY - lastY
      vel = d * 0.02
      lastY = window.scrollY
      speed = 1 + Math.max(-0.5, Math.min(1, vel))
      setTimeout(() => {
        speed = 1
      }, 800)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    let rot = 0
    const loop = () => {
      rot += 0.15 * speed
      if (ringRef.current) ringRef.current.style.transform = `rotate(${rot}deg)`
      raf = requestAnimationFrame(loop)
    }
    loop()
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) cancelAnimationFrame(raf)
        else {
          cancelAnimationFrame(raf)
          loop()
        }
      },
      { threshold: 0.1 }
    )
    const sec = document.getElementById('rabbit')
    if (sec) io.observe(sec)
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [reduce])

  return (
    <section id="rabbit" className="bg-[#efefef] py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center">
        {/* Left paragraph */}
        <p className="text-black uppercase font-black text-[15px] md:text-[18px] leading-tight">
          I CHASE PROBLEMS THAT REFUSE TO STAY SIMPLE. FROM MANUFACTURING TOLERANCES TO FULL-STACK DEV AGENTS, THE HORIZON CONSTANTLY MOVES.<br />
          <span className="text-black font-extrabold mt-2 block">BOTH KEEP THE BUILDER MOVING.</span>
        </p>

        {/* Center Animated Rabbit Dial */}
        <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] mx-auto">
          {/* Rotating Text Ring */}
          <div ref={ringRef} className="absolute inset-0 will-change-transform">
            <svg viewBox="0 0 480 480" className="w-full h-full">
              <defs>
                <path id="circlePath" d="M 240, 240 m -190, 0 a 190,190 0 1,1 380,0 a 190,190 0 1,1 -380,0" />
              </defs>
              <text fill="#050609" opacity="0.3" fontSize="17" fontWeight="900" letterSpacing="4.5">
                <textPath href="#circlePath">
                  CHASING THE NEXT BUILD • CHASING THE NEXT SKILL • CHASING THE NEXT SHIP • 
                </textPath>
              </text>
            </svg>
          </div>

          {/* Authentic Vector Rabbit SVG */}
          <div className="absolute inset-0 grid place-items-center pointer-events-none">
            <img
              src="/framer/8nraXlqQmF5fUzbvPQXoG2dv944.svg"
              alt="The White Rabbit vector illustration"
              className="w-[130px] sm:w-[150px] md:w-[170px] h-auto"
            />
          </div>
        </div>

        {/* Right paragraph */}
        <p className="text-black/60 uppercase font-black text-[15px] md:text-[18px] leading-tight text-left md:text-right">
          I CHASE THE NEXT BREAKTHROUGH IN SOFTWARE VELOCITY. DIRECTING AI TO SHIP PRODUCTS THAT MATCH FULL ENGINEERING TEAMS.<br />
          <span className="text-black font-extrabold mt-2 block">THE BUILDER IS NEVER STILL.</span>
        </p>
      </div>

      {/* Vertical Brand Divider */}
      <div className="mt-16 md:mt-24">
        <div className="text-center">
          <div className="text-black font-black uppercase leading-none text-[16vw] md:text-[13vw] tracking-tight">
            LADE STACK
          </div>
          <div className="mt-2 h-px bg-black max-w-[1300px] mx-auto flex items-center justify-between px-2">
            <span className="bg-[#efefef] px-2 font-serif text-xl font-bold">
              G<span className="text-[11px] align-super">L</span>
            </span>
            <img
              src="/framer/fU3WmM3L1vdP5RLFKaBh2WUqVs.svg"
              alt="Girish Lade brand mark"
              className="h-5 invert opacity-85 px-2 bg-[#efefef]"
            />
          </div>
        </div>

        {/* 3 Pillars: BUILD, SYSTEMS, TRANSITION */}
        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-[1300px] mx-auto bg-black text-white p-8 md:p-10 shadow-lg">
          {[
            {
              title: 'BUILD',
              body: 'FAST, TESTED WEB TOOLS AND CLIENT-SIDE PDF WORKFLOWS. PROTOTYPING IDEAS AT NIGHT AND PROVING UTILITY THROUGH REAL PRODUCTION USAGE.',
            },
            {
              title: 'SYSTEMS',
              body: 'PRAGMATIC ARCHITECTURE AND AI-ASSISTED WORKFLOWS ENGINEERED FOR SPEED, ZERO RUNTIME OVERHEAD, AND NO UNNECESSARY SIGNUPS.',
            },
            {
              title: 'TRANSITION',
              body: 'THE RIGOROUS ADVANCEMENT FROM MECHANICAL ENGINEERING INTO CORE SOFTWARE TEAMS. INDUSTRIAL DISCIPLINE APPLIED TO MODERN COMPUTING.',
            },
          ].map((item) => (
            <div key={item.title}>
              <div className="flex items-center gap-2 text-lime text-[14px] font-black uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-lime" /> {item.title}
              </div>
              <div className="mt-3 h-px bg-white/20" />
              <p className="mt-4 text-[12px] font-mono uppercase leading-relaxed text-white/75">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

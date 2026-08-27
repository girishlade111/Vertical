import { useEffect, useRef } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

export default function ContemporaryMotion() {
  const reduce = usePrefersReducedMotion()
  const pillRef = useRef(null)

  useEffect(() => {
    if (reduce) return
    const el = pillRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.filter = 'blur(0)'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    el.style.filter = 'blur(8px)'
    el.style.opacity = '0'
    el.style.transform = 'translateY(8px)'
    el.style.transition =
      'filter 0.5s var(--ease-expo), opacity 0.5s var(--ease-expo), transform 0.5s var(--ease-expo)'
    return () => io.disconnect()
  }, [reduce])

  return (
    <section className="bg-white px-6 md:px-12 py-14 md:py-24">
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-[1fr_1fr] gap-10 md:gap-14 items-center">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-black/60 font-bold">
            SOLO FOUNDER <span className="text-lime">|</span> DEVELOPER ECOSYSTEM
          </div>
          <h2 className="mt-3 font-black uppercase leading-[0.9] tracking-tight text-[36px] sm:text-[46px] md:text-[58px] text-black">
            LADE STACK<span className="text-lime">/</span><br />
            <span className="text-black/40">BUILDER</span> JOURNEY
          </h2>
          <p className="mt-6 text-[12px] font-mono uppercase leading-relaxed text-black/75 max-w-[540px]">
            A SUITE OF DEFENSIVE, FREE, NO-LOGIN DEVELOPER TOOLS BUILT SOLO WHILE BALANCING A MANUFACTURING ENGINEERING CAREER. SHIPPED FOR GLOBAL DEVELOPERS WHO NEED FAST, UNRESTRICTED UTILITY WITHOUT AI WRAPPER GIMMICKS.
          </p>
          <div className="mt-6 flex items-center gap-6 text-[22px] font-black text-black">
            <span>2024 —</span>
            <span>ONGOING</span>
            <span
              ref={pillRef}
              className="ml-2 bg-lime text-black text-[11px] font-mono uppercase px-3.5 py-1 rounded-full font-bold tracking-wider"
            >
              ACTIVE
            </span>
          </div>
          <div className="mt-5 text-[11px] font-mono uppercase tracking-widest text-black/50 font-bold">
            LADESTACK.IN
          </div>
        </div>

        <div className="relative overflow-hidden bg-black shadow-md">
          <img
            src="/framer/0akgDfSw8ol9dq6XcrvLJFKJMs.jpg"
            alt="Lade Stack builder journey and architecture"
            className="w-full h-[400px] md:h-[460px] object-cover grayscale contrast-120"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-16 md:mt-24 text-center">
        <div className="text-black font-black uppercase leading-none text-[18vw] md:text-[14vw] tracking-tight">
          GL1.0
        </div>
      </div>
    </section>
  )
}

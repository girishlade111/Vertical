import { useEffect, useState } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const words = ['CONFESS', 'RITUALS', 'SIGNALS']

export default function ModernRituals() {
  useScrollReveal('.reveal-modern')
  const reduce = usePrefersReducedMotion()
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (reduce) return
    const sec = document.getElementById('modern')
    let id
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          id = setInterval(() => setIdx((v) => (v + 1) % words.length), 2600)
        } else {
          clearInterval(id)
        }
      },
      { threshold: 0.3 }
    )
    if (sec) io.observe(sec)
    id = setInterval(() => setIdx((v) => (v + 1) % words.length), 2600)
    return () => {
      clearInterval(id)
      io.disconnect()
    }
  }, [reduce])

  return (
    <section id="modern" className="bg-lime grid md:grid-cols-[1.05fr_1fr] items-stretch">
      {/* Left Lime Column */}
      <div className="px-6 md:px-12 py-12 md:py-16 flex flex-col justify-between">
        <div>
          <h2 className="text-black font-black uppercase leading-[0.88] text-[13vw] md:text-[6.5vw] tracking-tight">
            MODERN<br />RITUALS
          </h2>
          <div className="mt-3 text-[11px] font-mono uppercase text-black/70 font-bold tracking-wider">
            STUDY — 04.13<br />SELECTED WORK
          </div>

          <div className="mt-8 border-l-[5px] border-black pl-5">
            <p
              data-text="LINES BECOME SIGNALS. SURFACES BECOME STORIES."
              className="reveal-modern text-black uppercase font-black text-[22px] md:text-[30px] leading-tight"
            >
              LINES BECOME SIGNALS.<br />SURFACES BECOME STORIES.
            </p>
            <p
              data-text="STRUCTURE ARGUES WITH IMPULSE UNTIL BOTH LEARN TO STAND STILL. GRIDS SET THE PACE. MARGINS HOLD THE QUIET."
              className="reveal-modern mt-3 text-black/80 text-[11px] font-mono uppercase leading-relaxed font-semibold max-w-[520px]"
            >
              STRUCTURE ARGUES WITH IMPULSE UNTIL BOTH LEARN TO STAND STILL. GRIDS SET THE PACE. MARGINS HOLD THE QUIET.
            </p>
          </div>
        </div>

        {/* Artifacts Row */}
        <div className="mt-12 pt-8 flex gap-4 items-end">
          {[
            { tag: 'ARTIFACT—I', img: '/framer/mRBiQFDuE4B7QVSEklk21DWcM.jpeg' },
            { tag: 'ARTIFACT—II', img: '/framer/gLqCslm3A6i3AkKnPkWHelWtkNo.jpg' },
            { tag: 'ARTIFACT—III', img: '/framer/3dhrjEKd33WmxaQ1Mtixa0iI3M4.jpeg' },
          ].map((item) => (
            <div key={item.tag} className="flex flex-col items-center">
              <div className="w-[78px] h-[78px] bg-white border-2 border-black overflow-hidden shadow-sm">
                <img
                  src={item.img}
                  alt={item.tag}
                  className="w-full h-full object-cover grayscale contrast-125"
                  loading="lazy"
                />
              </div>
              <span className="mt-2 text-[9px] font-mono uppercase font-bold text-black tracking-wider">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Column with [CONFESS] overlay */}
      <div className="relative min-h-[560px] md:min-h-[720px] bg-black overflow-hidden flex items-center justify-center">
        <img
          src="/modern_confessions.jpg"
          alt="Modern rituals - face wrapped in cellophane"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-115 brightness-95"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* Centered animated badge */}
        <div className="relative z-10 text-center px-4">
          <div className="overflow-hidden">
            <div
              key={idx}
              className="text-white font-black text-[12vw] md:text-[6vw] tracking-tight uppercase drop-shadow-md"
              style={{
                animation: reduce ? 'none' : 'clipReveal 0.3s var(--ease-expo)',
              }}
            >
              [{words[idx]}]
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes clipReveal {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  )
}

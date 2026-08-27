import { useEffect, useRef } from 'react'

export default function About() {
  const lineRef = useRef(null)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) el.style.transform = 'scaleX(1)'
      },
      { threshold: 0.5 }
    )
    el.style.transform = 'scaleX(0)'
    el.style.transformOrigin = 'left'
    el.style.transition = 'transform 0.8s var(--ease-expo)'
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="about2" className="bg-white px-6 md:px-12 py-14 md:py-24">
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center">
        <div>
          <div className="font-black uppercase leading-[0.88] tracking-tight text-black text-[15vw] md:text-[10vw]">
            I'AM
          </div>
          <div className="text-[12px] font-mono uppercase text-black/60 font-bold tracking-wider mt-2">
            Girish Lade
          </div>
          <div className="mt-6 text-black uppercase font-black text-[22px] md:text-[28px] leading-tight">
            I'M A MAHARASHTRA, INDIA-BASED MECHANICAL ENGINEER AND SOLO FOUNDER BUILDING LADE STACK — A SUITE OF FREE AI-POWERED DEVELOPER TOOLS — WHILE TRANSITIONING INTO SOFTWARE ENGINEERING.
          </div>
          <p className="mt-4 text-[12px] font-mono uppercase leading-relaxed text-black/70">
            FROM PANDHARPUR TO THE MANUFACTURING HUBS OF PUNE/PCMC, I APPLY INDUSTRIAL PRECISION TO AI-DIRECTED SOFTWARE CRAFT. BUILDING FAST, SHIPPING DEFENSIVE TOOLS, AND PREPARING FOR HIGH-IMPACT PRODUCT ENGINEERING TEAMS.
          </p>
          <div className="mt-6 border-l-2 border-black pl-4">
            <p className="text-black uppercase font-black text-[15px] leading-tight">
              SOLO FOUNDER • VIBE CODER • ASPIRING SOFTWARE ENGINEER
            </p>
          </div>
        </div>

        <div className="relative bg-[#111] overflow-hidden shadow-lg">
          <img
            src="/framer/jjJ6XIKZWJ2rtvkJZuo8IqJCQHo.jpg"
            alt="Portrait of Girish Lade"
            className="w-full aspect-[4/5] object-cover grayscale contrast-110"
            loading="lazy"
          />
          <div className="absolute bottom-4 left-4 text-[10px] font-mono uppercase bg-black text-white px-3 py-1.5 font-bold tracking-wider">
            LADE STACK LAB — PUNE / PCMC, INDIA
          </div>
        </div>
      </div>

      <div className="mt-14 max-w-[1300px] mx-auto flex items-center gap-4">
        <span className="font-serif text-3xl font-bold">
          G<span className="text-[11px] align-super">L</span>
        </span>
        <div ref={lineRef} className="h-px bg-black flex-1" />
        <span className="text-[11px] font-mono uppercase font-bold tracking-wider">
          Girish Lade
        </span>
      </div>
    </section>
  )
}

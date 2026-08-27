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
            Adam Knoxville
          </div>
          <div className="mt-6 text-black uppercase font-black text-[22px] md:text-[28px] leading-tight">
            I'M A UK-BASED VISUAL ARTIST DRIVEN BY EXPERIMENTS, SYSTEMS, AND THE SPACES BETWEEN.
          </div>
          <p className="mt-4 text-[12px] font-mono uppercase leading-relaxed text-black/70">
            I build work that tests how image, form, and motion behave when pushed. Systems that evolve over time.
          </p>
          <div className="mt-6 border-l-2 border-black pl-4">
            <p className="text-black uppercase font-black text-[15px] leading-tight">
              I MAKE WORK ACROSS IMAGE, FORM, MOTION AND TEXT
            </p>
          </div>
        </div>

        <div className="relative bg-[#111] overflow-hidden shadow-lg">
          <img
            src="/framer/jjJ6XIKZWJ2rtvkJZuo8IqJCQHo.jpg"
            alt="Portrait of Adam Knoxville in bucket hat"
            className="w-full aspect-[4/5] object-cover grayscale contrast-110"
            loading="lazy"
          />
          <div className="absolute bottom-4 left-4 text-[10px] font-mono uppercase bg-black text-white px-3 py-1.5 font-bold tracking-wider">
            STUDIO 204 — LONDON
          </div>
        </div>
      </div>

      <div className="mt-14 max-w-[1300px] mx-auto flex items-center gap-4">
        <span className="font-serif text-3xl font-bold">
          A<span className="text-[11px] align-super">K</span>
        </span>
        <div ref={lineRef} className="h-px bg-black flex-1" />
        <span className="text-[11px] font-mono uppercase font-bold tracking-wider">
          Adam Knoxville
        </span>
      </div>
    </section>
  )
}

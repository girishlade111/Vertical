import { useEffect, useRef } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

const galleryData = [
  // Column 1
  [
    {
      city: 'LADESTACK CODER (LIVE)',
      img: '/images/ladestack-coder.jpg',
      ratio: 'aspect-[3/4]',
      alt: 'LadeStack Coder - AI-powered HTML/CSS/JS compiler and editor',
    },
    {
      city: 'LS PDF TOOLKIT (LIVE)',
      img: '/images/ladestack-pdf.jpg',
      ratio: 'aspect-[4/5]',
      alt: 'LS PDF - Free client-side PDF toolkit with zero server upload',
    },
  ],
  // Column 2
  [
    {
      city: 'LADEDESIGN (LIVE)',
      img: '/images/ladestack-design.jpg',
      ratio: 'aspect-[4/5]',
      alt: 'LadeDesign - AI UI/UX tool generating multi-screen application flows',
    },
    {
      city: 'LS CLI AGENT (NPM)',
      img: '/images/ladestack-cli.jpg',
      ratio: 'aspect-[3/4]',
      alt: 'LS CLI - Terminal-based autonomous AI coding agent package',
    },
  ],
  // Column 3
  [
    {
      city: 'LS DOCS EDITOR (DEV)',
      img: '/images/ladestack-docs.jpg',
      ratio: 'aspect-[4/5]',
      alt: 'LS Docs - AI-powered document editor and Google Docs alternative',
    },
    {
      city: 'LADESTACK NOTES (DEV)',
      img: '/images/ladestack-notes.jpg',
      ratio: 'aspect-[3/4]',
      alt: 'LadeStack Notes - NotebookLM-style AI notes with RAG chat',
    },
  ],
]

export default function Gallery() {
  const reduce = usePrefersReducedMotion()
  const secRef = useRef(null)
  const colRefs = [useRef(null), useRef(null), useRef(null)]

  // Smooth scroll parallax for columns
  useEffect(() => {
    if (reduce || window.matchMedia('(pointer: coarse)').matches) return
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const sec = secRef.current
        if (!sec) {
          ticking = false
          return
        }
        const r = sec.getBoundingClientRect()
        const vh = window.innerHeight
        // Progress through gallery section (-1 to 1)
        const prog = Math.max(-1, Math.min(1, (vh - r.top) / (vh + r.height) - 0.5))

        // Parallax offsets
        if (colRefs[0].current) {
          colRefs[0].current.style.transform = `translate3d(0, ${prog * 40}px, 0)`
        }
        if (colRefs[1].current) {
          colRefs[1].current.style.transform = `translate3d(0, ${prog * -60}px, 0)`
        }
        if (colRefs[2].current) {
          colRefs[2].current.style.transform = `translate3d(0, ${prog * -110}px, 0)`
        }
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [reduce])

  return (
    <section ref={secRef} id="work" className="relative bg-black px-6 md:px-10 pt-24 md:pt-36 pb-20 md:pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-14 md:mb-20 max-w-[900px]">
          <h2 className="text-lime uppercase font-black text-[32px] sm:text-[44px] md:text-[56px] leading-[0.95] tracking-tight">
            IT ISN'T A STATIC RESUME.
          </h2>
          <p className="mt-4 md:mt-6 text-white uppercase font-black text-[18px] sm:text-[22px] md:text-[26px] leading-[1.1] tracking-tight">
            IT'S A LIVE RECORD OF WHAT I'M SHIPPING. REAL NO-LOGIN DEV TOOLS, CODE EXPERIMENTS, AND A SYSTEMATIC TRANSITION INTO SOFTWARE ENGINEERING.
          </p>
        </div>

        {/* 3-Column Staggered Parallax Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14 items-start">
          {galleryData.map((col, ci) => (
            <div
              key={ci}
              ref={colRefs[ci]}
              className={`flex flex-col gap-12 md:gap-20 will-change-transform ${
                ci === 1 ? 'md:pt-24' : ci === 2 ? 'md:pt-12' : 'md:pt-0'
              }`}
            >
              {col.map((item, idx) => (
                <figure key={item.city} className="group relative block w-full">
                  <div className="relative overflow-hidden bg-[#111] rounded-sm">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className={`w-full ${item.ratio} object-cover grayscale contrast-[1.08] group-hover:scale-[1.04] group-hover:contrast-[1.15] transition-all duration-700 ease-out`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                  </div>
                  <figcaption className="mt-3.5 flex justify-between items-baseline">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white group-hover:text-lime transition-colors duration-300">
                      {item.city}
                    </span>
                    <span className="text-[10px] font-mono text-white/40 tracking-wider">
                      MOD 0{ci * 2 + idx + 1}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

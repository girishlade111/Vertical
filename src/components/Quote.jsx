import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Quote() {
  useScrollReveal('.reveal-quote')
  return (
    <section className="bg-lime grid md:grid-cols-2 items-stretch">
      <div className="px-6 md:px-14 py-12 md:py-20 flex flex-col justify-center">
        <p
          data-text="“WHETHER ON PAPER OR PIXELS, THE GOAL IS CONSTANT — DESIGN THAT DISAPPEARS AS THE STORY APPEARS, LETTING THE WORK SPEAK WITHOUT SHOUTING FOR ATTENTION” — AK"
          className="reveal-quote lime-ghost text-black uppercase font-black leading-[0.95] text-[28px] sm:text-[36px] md:text-[44px] tracking-tight"
        >
          “WHETHER ON PAPER OR PIXELS, THE GOAL IS CONSTANT — DESIGN THAT DISAPPEARS AS THE STORY APPEARS, LETTING THE WORK SPEAK WITHOUT SHOUTING FOR ATTENTION” — AK
        </p>
      </div>
      <div className="relative min-h-[460px] md:min-h-[560px] bg-black m-4 md:m-8 overflow-hidden shadow-lg">
        <img
          src="/framer/WgSXpdQNIRyyqbHxMdMqlYBg4k.jpeg"
          alt="Studio conversation with Daniel Moore and Adam Knoxville"
          className="w-full h-full object-cover grayscale contrast-110"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 text-white text-[10px] font-mono uppercase bg-black/80 px-2.5 py-1.5 tracking-wider border border-white/10">
          Studio CAM66 London<br />
          Daniel & Adam
        </div>
      </div>
    </section>
  )
}

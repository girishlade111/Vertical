import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Quote(){
  useScrollReveal('.reveal-quote')
  return (
    <section className="bg-lime grid md:grid-cols-2 items-stretch">
      <div className="px-6 md:px-10 py-10 md:py-14 flex flex-col justify-center">
        <p data-text="“WHETHER ON PAPER OR PIXELS, THE GOAL IS CONSTANT — DESIGN THAT DISAPPEARS AS THE STORY APPEARS, LETTING THE WORK SPEAK WITHOUT SHOUTING FOR ATTENTION” — AK" className="reveal-quote lime-ghost text-black uppercase font-black leading-none text-[26px] md:text-[34px] tracking-tight">
          “WHETHER ON PAPER OR PIXELS, THE GOAL IS CONSTANT — DESIGN THAT DISAPPEARS AS THE STORY APPEARS, LETTING THE WORK SPEAK WITHOUT SHOUTING FOR ATTENTION” — AK
        </p>
      </div>
      <div className="relative min-h-[420px] bg-black m-4 md:m-6 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80&auto=format&fit=crop" alt="Two men in podcast studio" className="w-full h-full object-cover grayscale" loading="lazy"/>
        <div className="absolute top-3 left-3 text-white text-[10px] font-mono uppercase bg-black/60 px-2 py-1">Studio CAM66 London<br/>Daniel & Adam</div>
      </div>
    </section>
  )
}

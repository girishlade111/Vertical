import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Settle(){
  useScrollReveal('.reveal-settle')
  return (
    <section className="relative bg-black py-16 md:py-24 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 opacity-40 grayscale">
        <img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1600&q=80&auto=format&fit=crop" alt="" className="w-full h-full object-cover" loading="lazy"/>
      </div>
      <div className="absolute inset-0 bg-black/40"/>
      <div className="relative max-w-[1200px] mx-auto text-center">
        <div className="inline-block bg-lime text-black text-[10px] font-mono uppercase px-2 py-1 font-bold tracking-wide">EXPLORATION PHASE</div>
        <h2 data-text="SOME PIECES SETTLE. SOME DON'T." className="reveal-settle mt-6 text-[#d9d9d9] uppercase font-black leading-none text-[9vw] md:text-[7vw] tracking-tight">SOME PIECES SETTLE. SOME DON'T.</h2>
        <p data-text="BOTH REVEAL SOMETHING." className="reveal-settle mt-4 text-white/70 uppercase font-black text-[18px] md:text-[22px]">BOTH REVEAL SOMETHING.</p>
      </div>
    </section>
  )
}

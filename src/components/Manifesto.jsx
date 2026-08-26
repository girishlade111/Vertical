import { useScrollReveal } from '../hooks/useScrollReveal'
import { useEffect } from 'react'

export default function Manifesto(){
  useScrollReveal('.reveal-manifesto')
  useScrollReveal('.reveal-lime')
  return (
    <section id="about" className="relative bg-black px-6 md:px-10 py-16 md:py-24 overflow-hidden">
      <div aria-hidden="true" className="absolute right-[8%] top-[18%] text-white select-none pointer-events-none font-black lowercase leading-none" style={{fontSize:'25vw', opacity:0.05}}>explore</div>
      <div className="relative max-w-[1400px] mx-auto grid md:grid-cols-[420px_1fr] gap-8 md:gap-12">
        <div className="hidden md:block">
          <div className="w-full aspect-[4/5] bg-[#111] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop" alt="" className="w-full h-full object-cover grayscale contrast-110" loading="lazy" />
          </div>
        </div>
        <div className="md:pl-6">
          <p data-text="ART IS A CONTROLLED INTERRUPTION — A PRACTICE OF CATCHING THE MOMENT BEFORE IT DISAPPEARS." className="reveal-manifesto text-white uppercase font-black leading-none text-[28px] md:text-[42px] tracking-tight">
            ART IS A CONTROLLED INTERRUPTION — A PRACTICE OF CATCHING THE MOMENT BEFORE IT DISAPPEARS.
          </p>
          <p data-text="I WORK ACROSS IMAGE, OBJECT, MOTION, AND SOUND TO TRACE THE SHAPE OF WHAT DOESN'T SIT STILL." className="reveal-manifesto mt-6 text-white uppercase font-black leading-none text-[28px] md:text-[42px] tracking-tight">
            I WORK ACROSS IMAGE, OBJECT, MOTION, AND SOUND TO TRACE THE SHAPE OF WHAT DOESN'T SIT STILL.
          </p>
          <p data-text="IT ISN'T A PORTFOLIO." className="reveal-lime mt-8 text-lime uppercase font-black text-[28px] md:text-[42px] leading-none">IT ISN'T A PORTFOLIO.</p>
          <p data-text="IT'S THE PLACE WHERE THE WORK REFUSES TO BEHAVE." className="reveal-manifesto mt-3 text-[#d9d9d9] uppercase font-black text-[16px] md:text-[20px]">IT'S THE PLACE WHERE THE WORK REFUSES TO BEHAVE.</p>
        </div>
      </div>
    </section>
  )
}

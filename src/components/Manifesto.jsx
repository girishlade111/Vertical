import { useScrollReveal } from '../hooks/useScrollReveal'
import { useEffect } from 'react'

export default function Manifesto(){
  useScrollReveal('.reveal-manifesto')
  useScrollReveal('.reveal-lime')
  return (
    <section id="about" className="relative bg-black px-6 md:px-10 py-16 md:py-24 overflow-hidden">
      <div aria-hidden="true" className="absolute right-[8%] top-[18%] text-white select-none pointer-events-none font-black lowercase leading-none" style={{fontSize:'25vw', opacity:0.05}}>build</div>
      <div className="relative max-w-[1400px] mx-auto grid md:grid-cols-[420px_1fr] gap-8 md:gap-12">
        <div className="hidden md:block">
          <div className="w-full aspect-[4/5] bg-[#111] overflow-hidden">
            <img src="/framer/L61MvCY8ttcVvChrDXLqkdiAcFo.jpg" alt="Girish Lade engineering build log" className="w-full h-full object-cover grayscale contrast-110" loading="lazy" />
          </div>
        </div>
        <div className="md:pl-6 flex flex-col justify-center">
          <p data-text="ENGINEERING IS A DISCIPLINE OF PRECISION — BUILDING SOFTWARE IS THE PURSUIT OF VELOCITY AND UTILITY." className="reveal-manifesto text-white uppercase font-black leading-none text-[28px] md:text-[42px] tracking-tight">
            ENGINEERING IS A DISCIPLINE OF PRECISION — BUILDING SOFTWARE IS THE PURSUIT OF VELOCITY AND UTILITY.
          </p>
          <p data-text="MECHANICAL ENGINEER IN A MANUFACTURING PLANT BY DAY. VIBE CODER AND SOLO FOUNDER BUILDING FREE AI DEVELOPER TOOLS AT LADE STACK BY NIGHT." className="reveal-manifesto mt-6 text-[#d9d9d9] uppercase font-black leading-none text-[28px] md:text-[42px] tracking-tight">
            MECHANICAL ENGINEER IN A MANUFACTURING PLANT BY DAY. VIBE CODER AND SOLO FOUNDER BUILDING FREE AI DEVELOPER TOOLS AT LADE STACK BY NIGHT.
          </p>
        </div>
      </div>
    </section>
  )
}

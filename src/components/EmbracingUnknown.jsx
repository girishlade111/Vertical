export default function EmbracingUnknown() {
  return (
    <section className="bg-[#d9d9d9] grid md:grid-cols-2 items-stretch overflow-hidden">
      {/* Media Left */}
      <div className="relative min-h-[720px] md:min-h-[860px] bg-black overflow-hidden flex flex-col justify-between p-6 md:p-10">
        {/* Upper Scanline Portrait */}
        <div className="absolute inset-0 h-[65%] overflow-hidden">
          <img
            src="/framer/UjPdPzwyV1QCG0t3f7GTAsQ5h3c.jpg"
            alt="Scanline glitch hooded portrait"
            className="w-full h-full object-cover grayscale contrast-125"
            loading="lazy"
          />
        </div>

        {/* Lower Frequency Spikes */}
        <div className="absolute inset-x-0 bottom-0 h-[45%] overflow-hidden">
          <img
            src="/framer/rgK3PpbanQ4CVwmKdKQJ7HHUFc.jpeg"
            alt="Frequency noise waves"
            className="w-full h-full object-cover grayscale opacity-90 contrast-125"
            loading="lazy"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

        {/* Top Badges */}
        <div className="relative z-10 text-white font-mono text-[10px] uppercase leading-tight tracking-wider">
          <div>PLANT FLOOR</div>
          <div>VIBE CODING</div>
          <div>ARCHITECTURE</div>
          <div>TRANSITION</div>
        </div>

        {/* Middle Typography */}
        <div className="relative z-10 my-auto pt-16">
          <h3 className="text-white uppercase font-black leading-[0.88] text-[10vw] md:text-[5.5vw] tracking-tight">
            PATTERNS EMERGE.<br />
            FRICTION CREATES<br />
            MOMENTUM.
          </h3>
        </div>

        {/* Bottom Tagline */}
        <div className="relative z-10">
          <div className="text-white uppercase font-black leading-none text-[22px] md:text-[28px] tracking-tight">
            CODE COMPILES.<br />
            PRODUCTS SHIP.
          </div>
        </div>
      </div>

      {/* Content Right */}
      <div className="px-6 md:px-12 py-10 md:py-14 flex flex-col justify-between bg-[#d9d9d9]">
        <div>
          <h2 className="text-black uppercase font-black leading-[0.88] tracking-tight text-[11vw] md:text-[6vw]">
            EMBRACING THE<br />
            <span className="text-[13vw] md:text-[7vw]">UNKNOWN</span>
          </h2>
          <div className="mt-3 h-[3px] bg-black w-full" />
          <p className="mt-5 text-black uppercase font-black text-[15px] md:text-[18px] leading-tight">
            TRANSITIONING FROM MECHANICAL ENGINEERING INTO SOFTWARE WITHOUT A CS DEGREE CREATES FRICTION. I EMBRACE THE UNCERTAINTY BY DIRECTING AI TOOLS, BUILDING REAL SYSTEMS, AND LEARNING AT MAXIMUM VELOCITY.
          </p>
        </div>

        {/* Center Image */}
        <div className="my-8 max-w-[340px]">
          <div className="bg-white overflow-hidden shadow-sm">
            <img
              src="/framer/j0f0boTZxcbNRQJLpyezNUOKAEU.jpg"
              alt="Embracing the builder transition"
              className="w-full aspect-[4/5] object-cover grayscale contrast-110"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom Right Callout */}
        <div className="border-t border-black/20 pt-6">
          <h4 className="text-black uppercase font-black text-[28px] md:text-[36px] leading-[0.95] tracking-tight">
            WHAT SHIPS IS<br />WHAT MATTERS.
          </h4>
          <p className="mt-3 text-[11px] font-mono uppercase tracking-wider text-black/70 font-semibold">
            EXECUTION OVER PEDIGREE.<br />
            SHIPPED TOOLS OVER SPECULATION.
          </p>
        </div>
      </div>
    </section>
  )
}

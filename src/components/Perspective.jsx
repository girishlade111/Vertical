export default function Perspective() {
  return (
    <section id="perspective" className="bg-[#d9d9d9] grid md:grid-cols-2 items-stretch overflow-hidden">
      {/* Media Left */}
      <div className="relative min-h-[640px] md:min-h-[780px] overflow-hidden bg-[#c9c9c9] flex flex-col justify-between p-6 md:p-10">
        <img
          src="/framer/uBxP9U1PLV67RuuwTdMdbEkQA.jpg"
          alt="Conceptual fashion art - girl with bubble hair"
          className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-[1.05]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* Top Badges */}
        <div className="relative z-10 text-[11px] font-mono uppercase tracking-wide">
          <div className="text-black/80 font-bold">INDX —— // DEV LAB</div>
          <div className="mt-2 inline-block bg-black text-white px-2.5 py-1 text-[11px] font-bold tracking-wider">
            REVISION — V2.4
          </div>
        </div>

        {/* Bottom Hero Typography */}
        <div className="relative z-10 mt-auto">
          <h3 className="font-black uppercase leading-[0.88] tracking-tight text-white text-[14vw] md:text-[6.5vw] drop-shadow-sm">
            NOTHING<br />
            STAYS<br />
            STATIC
          </h3>
        </div>
      </div>

      {/* Content Right */}
      <div className="flex flex-col justify-between bg-[#d9d9d9]">
        {/* Top Half: Title & Categories */}
        <div className="px-6 md:px-12 pt-10 md:pt-14 pb-8">
          <h2 className="font-black uppercase leading-[0.86] tracking-tight">
            <span className="block text-black text-[13vw] md:text-[6.5vw]">PERSPECTIVE</span>
            <span className="block text-white text-[13vw] md:text-[6.5vw]">NOT THE</span>
            <span className="block text-white text-[13vw] md:text-[6.5vw]">TRUTH</span>
          </h2>

          <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 border-t border-black/20 pt-6">
            <div>
              <div className="flex justify-between items-center text-[10px] font-mono uppercase">
                <span className="text-black font-bold tracking-wider">CAT — 1.07</span>
                <span className="text-black/40 font-bold tracking-widest">|||</span>
              </div>
              <div className="mt-2 h-px bg-black w-20" />
              <p className="mt-3 text-[11px] font-mono uppercase leading-relaxed text-black/85">
                I BUILD IN SHORT CYCLES AND TIGHT FEEDBACK LOOPS. WHERE CODE MEETS REAL USERS. WHERE RAPID PROTOTYPES EVOLVE BEFORE ARCHITECTURE HARDENS.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center text-[10px] font-mono uppercase">
                <span className="text-black font-bold tracking-wider">CAT — 1.08</span>
                <span className="text-black/40 font-bold tracking-widest">|||</span>
              </div>
              <div className="mt-2 h-px bg-black w-20" />
              <p className="mt-3 text-[11px] font-mono uppercase leading-relaxed text-black/85">
                LADE STACK IS MY LIVE LABORATORY — A HOME FOR DEFENSIBLE TOOLS, SHIP-FIRST ARCHITECTURE, AND ZERO-LOGIN DEV UTILITIES.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Half: Dark Block */}
        <div className="relative min-h-[300px] md:min-h-[360px] bg-black overflow-hidden flex items-end p-6 md:p-10">
          <img
            src="/framer/c1VocAo4m6CyMi0Q18oUoG4UAIM.jpg"
            alt="Product evolution and iteration study"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 contrast-125"
            loading="lazy"
          />
          <div className="relative z-10">
            <p className="font-black uppercase text-white leading-tight text-[18px] sm:text-[22px] md:text-[28px] max-w-[620px] tracking-tight">
              SOFTWARE COMES ALIVE WHEN DEPLOYED TO REAL PEOPLE. TOOLS BECOME INDISPENSABLE WHEN THEY REMOVE FRICTION AND NEVER GET IN THE WAY.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

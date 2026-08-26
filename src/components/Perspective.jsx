export default function Perspective(){
  return (
    <section id="perspective" className="bg-[#d9d9d9] grid md:grid-cols-[1fr_40px_1fr] items-stretch overflow-hidden">
      {/* media left */}
      <div className="relative min-h-[520px] md:min-h-[640px] overflow-hidden bg-[#c9c9c9]">
        <img src="https://images.unsplash.com/photo-1486718448742-163732cd1544?w=900&q=80&auto=format&fit=crop" alt="Architecture light shafts" className="absolute inset-0 w-full h-[115%] object-cover grayscale contrast-110" style={{transform:'translateY(-20px)'}} loading="lazy"/>
        <div className="absolute top-6 left-6 text-[10px] font-mono uppercase leading-tight">
          <div className="text-black/60">INDX —— //CONCEPTUAL</div>
          <div className="mt-2 inline-block bg-black text-white px-2 py-1 text-[11px] font-bold">REVISION — NEUE 7.6</div>
        </div>
      </div>
      <div className="hidden md:block w-10 scanline-vertical opacity-30" aria-hidden/>
      <div className="px-6 md:px-10 py-10 md:py-16 flex flex-col justify-center">
        <h2 className="font-black uppercase leading-none tracking-tight">
          <span className="block text-black text-[10vw] md:text-[7vw]">PERSPECTIVE</span>
          <span className="block text-white text-[10vw] md:text-[7vw]">NOT THE</span>
          <span className="block text-white text-[10vw] md:text-[7vw]">TRUTH</span>
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            ['CAT — 1.07','I WORK BETWEEN ORDER AND INTERRUPTION. WHERE CLEAN LINES ARGUE WITH IMPULSE. WHERE RHYTHM BREAKS BEFORE IT RESOLVES.'],
            ['CAT — 1.08','VERTICAL IS THE STATE I RETURN TO WHEN UNFINISHED THOUGHTS, SHAPES, AND THINGS THAT REFUSE SILENCE COLLIDE.']
          ].map(([k,v])=>(
            <div key={k} className="relative">
              <div className="flex justify-between items-center text-[10px] font-mono uppercase">
                <span className="text-black font-bold">{k}</span><span className="text-black/40">|||</span>
              </div>
              <div className="mt-2 h-px bg-black w-24"/>
              <p className="mt-3 text-[11px] font-mono uppercase leading-relaxed text-black/80">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

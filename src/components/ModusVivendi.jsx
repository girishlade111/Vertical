export default function ModusVivendi(){
  return (
    <section className="bg-[#d9d9d9] grid md:grid-cols-2 items-stretch">
      <div className="relative min-h-[520px] overflow-hidden bg-[#c9c9c9]">
        <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80&auto=format&fit=crop" alt="Woman with hair in motion" className="absolute inset-0 w-full h-full object-cover grayscale contrast-110" loading="lazy"/>
        <div className="absolute inset-0 pointer-events-none scanline-strip opacity-20" aria-hidden/>
      </div>
      <div className="px-6 md:px-10 py-10 md:py-12 flex flex-col justify-center">
        <h2 className="text-black font-black uppercase text-[36px] md:text-[48px] leading-none tracking-tight">MODUS VIVENDI</h2>
        <div className="mt-3 h-[3px] bg-black w-full"/>
        <p className="mt-4 text-black uppercase font-bold text-[13px] md:text-[14px] leading-relaxed">A DELICATE BALANCE OF STILLNESS AND MOVEMENT, PRESENCE AND ABSENCE. IT CAPTURES BODIES IN TRANSFORMATION, SUSPENDED IN QUIET RESISTANCE.</p>
      </div>
    </section>
  )
}

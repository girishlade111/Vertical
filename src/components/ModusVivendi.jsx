export default function ModusVivendi() {
  return (
    <section className="bg-[#d9d9d9] grid md:grid-cols-2 items-stretch overflow-hidden">
      <div className="relative min-h-[560px] md:min-h-[680px] overflow-hidden bg-[#c9c9c9]">
        <img
          src="/framer/VP537IhNaTLW7QOkMnGSrpCPh0.jpg"
          alt="Modus Vivendi - engineering and building philosophy"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-115"
          loading="lazy"
        />
        <div className="absolute inset-0 pointer-events-none bg-black/5" />
      </div>
      <div className="px-6 md:px-14 py-12 md:py-20 flex flex-col justify-center bg-[#d9d9d9]">
        <h2 className="text-black font-black uppercase text-[44px] sm:text-[56px] md:text-[68px] leading-[0.88] tracking-tight">
          MODUS<br />VIVENDI
        </h2>
        <div className="mt-4 h-[3px] bg-black w-full" />
        <p className="mt-6 text-black uppercase font-extrabold text-[15px] sm:text-[17px] md:text-[19px] leading-relaxed max-w-[580px]">
          A RIGOROUS BALANCE BETWEEN FULL-TIME MANUFACTURING PLANT SHIFTS AND NIGHTTIME SOFTWARE ARCHITECTURE. DISCIPLINE OVER MOTIVATION. SHIPPING WORKING SOFTWARE ALWAYS TRUMPS WAITING FOR PERFECTION.
        </p>
      </div>
    </section>
  )
}

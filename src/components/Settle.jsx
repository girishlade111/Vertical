import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Settle() {
  useScrollReveal('.reveal-settle')

  const modules = [
    {
      tag: 'SOURCE — PRODUCTION',
      id: 'MODULE — A.1',
      text: 'TOOLS SHIPPED RAPIDLY TO TEST REAL UTILITY. FAST COMPILERS AND IN-BROWSER PDF PROCESSORS VALIDATED IN LIVE PRODUCTION.',
    },
    {
      tag: 'SOURCE — PRUNING',
      id: 'MODULE — A.2',
      text: "EXPERIMENTS THAT DIDN'T SURVIVE SCRUTINY. OVER-COMPLICATED INTERFACES AND GIMMICKS SCRAPPED TO PROTECT USER FOCUS.",
    },
    {
      tag: 'SOURCE — BUILD LOG',
      id: 'MODULE — A.3',
      text: 'REPETITION THROUGH DAILY BUILDING HABITS. BALANCING FULL-TIME PLANT SHIFTS WITH DEEP CODE SESSIONS UNDER PRESSURE.',
    },
    {
      tag: 'SOURCE — ROADMAP',
      id: 'MODULE — A.4',
      text: 'UNRELEASED AGENTS AND RAG WORKFLOWS UNDER ACTIVE DEVELOPMENT. REAL TOOLS EARNED THROUGH RELENTLESS ITERATION.',
    },
  ]

  return (
    <section className="relative bg-black pt-20 md:pt-32 pb-16 md:pb-24 px-6 md:px-12 overflow-hidden">
      {/* Background with night campfire person */}
      <div className="absolute inset-0 opacity-45 grayscale">
        <img
          src="/framer/loAwY0vHxqQsr7nGViD35Gja94.jpeg"
          alt="Atmospheric study - settle"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto">
        {/* Header Block */}
        <div className="text-center max-w-[1100px] mx-auto">
          <div className="inline-block bg-lime text-black text-[11px] font-mono uppercase px-3 py-1 font-bold tracking-wider">
            BUILD CYCLE
          </div>

          <h2
            data-text="SOME IDEAS SHIP. SOME GET KILLED."
            className="reveal-settle mt-8 text-white uppercase font-black leading-[0.88] text-[11vw] md:text-[8vw] tracking-tight"
          >
            SOME IDEAS SHIP.<br />SOME GET KILLED.
          </h2>

          <p
            data-text="BOTH ARE PART OF DISCOVERING WHAT DEVELOPERS NEED."
            className="reveal-settle mt-6 text-white uppercase font-black text-[18px] sm:text-[22px] md:text-[28px] tracking-tight"
          >
            BOTH ARE PART OF DISCOVERING<br className="sm:hidden" /> WHAT DEVELOPERS NEED.
          </p>
        </div>

        {/* 4 Modules Row */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-white/15">
          {modules.map((m) => (
            <div key={m.id} className="flex flex-col">
              {m.tag && (
                <div className="text-[10px] font-mono uppercase text-white/50 mb-1 tracking-wider">
                  {m.tag}
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-lime inline-block shrink-0" />
                <span className="text-[11px] font-mono uppercase font-bold text-white tracking-wide">
                  {m.id}
                </span>
              </div>
              <div className="mt-2.5 h-px bg-white/20 w-full" />
              <p className="mt-3 text-[11px] font-mono uppercase leading-relaxed text-white/70">
                {m.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

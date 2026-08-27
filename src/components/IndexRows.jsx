import { useScrollReveal } from '../hooks/useScrollReveal'

const rows=[
  {
    meta:'DEV — 01/LS', title:'PRODUCT BUILDS', num:'/001',
    text:'SUITE OF FREE, NO-LOGIN DEVELOPER UTILITIES. LADESTACK CODER, LS PDF, AND LADEDESIGN SERVING FAST BROWSER TOOLS TO GLOBAL DEVS.',
    lime:['FREE, NO-LOGIN','GLOBAL DEVS']
  },
  {
    meta:'DEV — 02/LS', title:'SYSTEM & UX', num:'/002',
    text:'INTERFACE ARCHITECTURE AND MINIMALIST WORKFLOWS. DESIGN DECISIONS DRIVEN BY ZERO SIGNUP ROADBLOCKS, CLIENT-SIDE SPEED, AND CLEAN EXECUTION.',
    lime:['INTERFACE ARCHITECTURE','ZERO SIGNUP ROADBLOCKS']
  },
  {
    meta:'DEV — 03/LS', title:'CODE EXPERIMENTS', num:'/003',
    text:'AI-ASSISTED BUILDS, AUTONOMOUS TERMINAL AGENTS, AND EXPERIMENTAL COMPILERS. DIRECTING AI TOOLS TO BUILD FAST AND SHIP REUSABLE CODE.',
    lime:['AI-ASSISTED BUILDS','SHIP REUSABLE CODE']
  },
  {
    meta:'DEV — 04/LS', title:'CAREER LOG', num:'/004',
    text:'A STRUCTURED TRANSITION FROM MANUFACTURING PLANT ENGINEER INTO SOFTWARE ENGINEERING. MASTERING DSA, SYSTEM DESIGN, AND PRODUCT DISCIPLINE.',
    lime:['STRUCTURED TRANSITION','PRODUCT DISCIPLINE']
  },
  {
    meta:'DEV — 05/LS', title:'IDEAS IN PROGRESS', num:'/005',
    text:'LS DOCS MINIMALIST EDITOR, NOTEBOOKLM-STYLE RAG KNOWLEDGE BASES, AND AGENT WORKFLOWS BEING SHAPED INTO PRODUCTION TOOLS.',
    lime:['NOTEBOOKLM-STYLE RAG','PRODUCTION TOOLS']
  },
]

function LimeText({text, limes}){
  const pattern = new RegExp(`(${limes.map(l=> l.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')})`, 'g')
  const parts = text.split(pattern)
  return <>{parts.map((p,i)=> limes.includes(p) ? <span key={i} className="text-lime">{p}</span> : <span key={i}>{p}</span>)}</>
}

export default function IndexRows(){
  useScrollReveal('.reveal-index')
  return (
    <section className="bg-black">
      {rows.map(r=>(
        <a key={r.title} id={r.title.toLowerCase().replace(/[^a-z]+/g,'').slice(0,6)} href={`#${r.title}`} className="group relative grid md:grid-cols-[120px_1fr_60px_80px_460px] gap-4 px-6 md:px-10 py-8 md:py-12 border-b border-white/10 hover:bg-[#0a0a0a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-inset">
          <div className="text-[10px] font-mono uppercase text-[#d9d9d9]">{r.meta}</div>
          <div>
            <div className="text-[#d9d9d9] group-hover:text-white group-hover:translate-x-6 transition-all duration-300 font-black uppercase text-[28px] md:text-[36px] leading-none tracking-tight" style={{transitionTimingFunction:'cubic-bezier(0.16,1,0.3,1)'}}>{r.title}</div>
            <div className="mt-2 flex gap-1">
              <span className="block h-px w-3 bg-white/40 group-hover:w-7 transition-all duration-300"/>
              <span className="block h-px w-3 bg-lime group-hover:w-7 transition-all duration-300 delay-75"/>
              <span className="block h-px w-3 bg-white/40 group-hover:w-7 transition-all duration-300 delay-150"/>
            </div>
            <div className="mt-2 text-[10px] font-mono text-[#d9d9d9] group-hover:text-lime transition-colors">{r.num}</div>
          </div>
          <div className="hidden md:block"/>
          <div className="hidden md:grid place-items-center">
            <span className="text-white group-hover:text-lime group-hover:translate-x-8 transition-all duration-300 text-xl">→</span>
          </div>
          <div className="relative pl-4">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/15 group-hover:bg-lime group-hover:h-full transition-all" style={{height:'40%'}}/>
            <p className="text-[#d9d9d9] uppercase font-black text-[18px] md:text-[20px] leading-tight">
              <LimeText text={r.text} limes={r.lime} />
            </p>
          </div>
        </a>
      ))}
    </section>
  )
}

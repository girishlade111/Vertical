import { useScrollReveal } from '../hooks/useScrollReveal'

const rows=[
  {
    meta:'MOD — I/AK', title:'VISUAL EXPERIMENTS', num:'/001',
    text:'STUDIES IN IMAGE, LIGHT, AND DISTORTION. TESTS THAT DON\'T CARE IF THEY FAIL.',
    lime:['IMAGE, LIGHT,','TESTS']
  },
  {
    meta:'MOD — II/AK', title:'FORM & FUNCTION', num:'/002',
    text:'OBJECTS, SYSTEMS, AND SHAPES SHAPED WITH INTENTION — THEN PUSHED UNTIL THEY REVEAL THEIR LIMITS. A DIALOGUE BETWEEN WHAT LOOKS RIGHT AND WHAT WORKS.',
    lime:['SHAPED WITH INTENTION','REVEAL THEIR LIMITS']
  },
  {
    meta:'MOD — III/AK', title:'SOUND & MOTION', num:'/003',
    text:'MOVING IMAGES, RHYTHM STUDIES, AND AUDIOVISUAL FRAGMENTS. WORK DRIVEN BY PULSE, TENSION, AND THE QUIET BETWEEN FRAMES.',
    lime:['DRIVEN','BY PULSE, TENSION']
  },
  {
    meta:'MOD — IV/AK', title:'WRITTEN FRAGMENTS', num:'/004',
    text:'POEMS, LYRICS, AND UNFINISHED LINES. THOUGHTS CAUGHT MID-BREATH. WORDS THAT BEHAVE MORE LIKE IMAGES THAN SENTENCES.',
    lime:['THOUGHTS CAUGHT','MID-BREATH']
  },
  {
    meta:'MOD — V/AK', title:"THINGS I CAN'T EXPLAIN", num:'/005',
    text:'CREATIVE IDEAS THAT ARRIVED UNINVITED AND REFUSED TO LEAVE. THE WORK THAT SITS CLOSEST TO WHO I AM AND WHO I\'M STILL BECOMING.',
    lime:['CREATIVE IDEAS','REFUSED TO LEAVE']
  },
]

function highlight(text, limes){
  let out=text
  limes.forEach(l=>{
    out=out.split(l).join(`__LIME__${l}__END__`)
  })
  const parts=out.split(/__LIME__|__END__/)
  // simpler: regex
  return text
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
              {r.text.split(' ').map((w,i)=>{
                const isLime=r.lime.some(l=>r.text.includes(l) && l.split(' ').includes(w.replace(/[^A-Z,]/g,'')) || r.lime.join(' ').includes(w) )
                // simpler: check if word is in lime phrases
                const inLime=r.lime.join(' ').includes(w.replace(/[.,—]/g,''))
                return <span key={i} className={inLime?'text-lime':''}>{w} </span>
              })}
            </p>
          </div>
        </a>
      ))}
    </section>
  )
}

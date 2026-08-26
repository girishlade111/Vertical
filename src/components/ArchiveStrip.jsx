export default function ArchiveStrip(){
  const cols=[
    {title:'MATERIAL STUDIES', body:'VERTEX STUDIES IN RAW STRUCTURE. TEXTURES TESTED UNDER PRESSURE. FORMS PUSHED UNTIL THEY REVEAL INTENTION.'},
    {title:'MUSCLE — THE', body:'EXPERIMENTS WITH PHYSICAL MATERIALS AND CONTROLLED DISTORTION. WHERE TOUCH, WEIGHT, AND FAILURE SHAPE THE OUTCOME.'},
    {title:'MUSCLE — THE', body:'OBJECTS EXAMINED THROUGH REPETITION. SMALL SHIFTS CREATING NEW PATTERNS. A RECORD OF HOW MATTER RESPONDS TO MOTION.'},
    {title:'WORK ABOUT', body:'FRAGMENTS FROM ONGOING INVESTIGATIONS. PART PROTOTYPES, PART UNRESOLVED IDEAS. WORK THAT STAYS HONEST BY NOT PRETENDING TO BE FINISHED.'},
  ]
  return (
    <section className="bg-black border-y border-white/10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
      {cols.map(c=>(
        <div key={c.title} className="p-6 md:p-7">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-lime inline-block"/>
            <span className="text-[10px] font-mono uppercase text-white tracking-wide">{c.title}</span>
          </div>
          <div className="mt-3 h-px bg-white/20 w-full"/>
          <p className="mt-3 text-[11px] font-mono uppercase leading-relaxed text-white/60">{c.body}</p>
        </div>
      ))}
    </section>
  )
}

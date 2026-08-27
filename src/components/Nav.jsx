import { useEffect, useState } from 'react'

export default function Nav(){
  const [open,setOpen]=useState(false)
  useEffect(()=>{
    if(open) document.body.style.overflow='hidden'
    else document.body.style.overflow=''
  },[open])
  const scrollTo=(id)=>{
    setOpen(false)
    const el=document.getElementById(id)
    if(el) el.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto':'smooth'})
  }
  return (
  <>
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[1001] focus:bg-lime focus:text-primary focus:px-4 focus:py-2 focus:text-sm">Skip to content</a>
    <nav aria-label="Primary" className="fixed top-0 inset-x-0 h-16 flex items-center justify-between px-6 md:px-10 z-[1000] pointer-events-none">
      <a href="#" onClick={e=>{e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'})}} className="pointer-events-auto font-black text-[22px] tracking-tight lowercase mix-blend-difference text-white focus-visible:outline-lime" style={{mixBlendMode:'difference'}}>vertical</a>
      <div className="hidden md:flex items-center gap-7 pointer-events-auto">
        {[
          ['work','work'],
          ['about','about'],
          ['thoughts','perspective'],
          ['contact','contact']
        ].map(([label,id])=>(
          <a key={label} href={`#${id}`} onClick={e=>{e.preventDefault(); scrollTo(id)}} className="group relative text-[12px] tracking-[0.04em] uppercase font-bold text-white mix-blend-difference hover:text-lime transition-colors" style={{mixBlendMode:'difference'}}>
            {label}
            <span className="absolute -bottom-1 left-0 w-full h-px bg-current scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200"/>
          </a>
        ))}
      </div>
      <button aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(v=>!v)} className="md:hidden pointer-events-auto w-10 h-10 grid place-items-center text-white mix-blend-difference" style={{mixBlendMode:'difference'}}>
        <span className="sr-only">menu</span>
        <span className="block w-5 h-px bg-current mb-1.5 transition-all" style={{transform: open? 'translateY(6px) rotate(45deg)': ''}}/>
        <span className="block w-5 h-px bg-current transition-opacity" style={{opacity: open?0:1}}/>
        <span className="block w-5 h-px bg-current mt-1.5 transition-all" style={{transform: open? 'translateY(-6px) rotate(-45deg)': ''}}/>
      </button>
    </nav>
    {open && (
      <div className="fixed inset-0 bg-black z-[999] flex flex-col p-6 pt-20">
        {['WORK','ABOUT','THOUGHTS','CONTACT'].map((l,i)=>(
          <a key={l} href={`#${l.toLowerCase()}`} onClick={e=>{e.preventDefault(); scrollTo(l.toLowerCase()==='thoughts'?'perspective':l.toLowerCase())}} className="text-lime text-[13vw] leading-none uppercase font-black border-b border-white/10 py-2" style={{animation:`driftVer 0.6s var(--ease-expo) ${i*60}ms both`}}>{l}</a>
        ))}
        <button onClick={()=>setOpen(false)} className="absolute top-4 right-6 text-white text-2xl">✕</button>
      </div>
    )}
  </>
  )
}

import { useEffect, useRef, useState } from 'react'

export default function Footer(){
  const rulerRef=useRef(null)
  const [toast,setToast]=useState(false)
  useEffect(()=>{
    const el=rulerRef.current
    if(!el) return
    const lines=el.querySelectorAll('[data-line]')
    const io=new IntersectionObserver(([e])=>{
      if(e.isIntersecting){
        lines.forEach((l,i)=>{
          l.style.transform='scaleY(1)'
          l.style.transition=`transform 0.4s var(--ease-expo) ${i*0.04}s`
        })
      }
    },{threshold:0.3})
    lines.forEach(l=>{ l.style.transform='scaleY(0)'; l.style.transformOrigin='top' })
    io.observe(el)
    return()=>io.disconnect()
  },[])
  const copy=(t)=>{
    navigator.clipboard.writeText(t)
    setToast(true)
    setTimeout(()=>setToast(false),2400)
  }
  return (
    <footer id="contact" className="bg-lime text-black overflow-hidden">
      <div ref={rulerRef} className="h-16 flex items-stretch overflow-hidden" aria-hidden="true" style={{maskImage:'linear-gradient(to right, black 60%, transparent 100%)'}}>
        {Array.from({length:64}).map((_,i)=>(
          <div key={i} data-line className="w-px bg-black/20 shrink-0" style={{marginLeft: i===0? '40px': '12px', height:'100%'}}/>
        ))}
      </div>
      <div className="px-6 md:px-10">
        <div className="font-black leading-none tracking-tight text-[16vw] whitespace-nowrap overflow-hidden">Girish Lade</div>
        <div className="grid md:grid-cols-4 gap-6 py-8 border-y border-black/15">
          <div className="border-l-4 border-black pl-3">
            <a href="https://ladestack.in" target="_blank" rel="noopener" className="block font-black text-[18px] hover:underline">ladestack.in</a>
            <button onClick={()=>copy('girish@ladestack.in')} className="text-left font-bold text-[13px] underline decoration-black/20 hover:decoration-black">girish@ladestack.in</button>
          </div>
          <div className="text-[10px] font-mono uppercase leading-relaxed">
            <div className="font-bold">LADE STACK LAB</div>
            <div>PUNE / PCMC REGION<br/>MAHARASHTRA 411019<br/>INDIA<br/>BUILDING FOR GLOBAL DEVS</div>
          </div>
          <div className="border-l-4 border-black pl-3 flex flex-col gap-1 text-[13px] font-black uppercase">
            {['HOME','WORK','ABOUT','THOUGHTS','CONTACT','PRIVACY POLICY','TERMS OF USE'].map(l=>(
              <a key={l} href={`#${l.toLowerCase().replace(' ','')}`} className="relative w-fit group">
                <span className="relative z-10 group-hover:text-lime transition-colors">{l}</span>
                <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform -z-0"/>
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-1 text-[13px] font-black uppercase">
            {['GITHUB','LINKEDIN','X (TWITTER)','LADESTACK.IN','DOCS','404'].map(l=>(
              <a key={l} href="#" target={l!=='404'?'_blank':undefined} rel="noopener" className="relative w-fit group">
                <span className="relative z-10 group-hover:text-lime transition-colors">{l}</span>
                <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform -z-0"/>
              </a>
            ))}
          </div>
        </div>
        <div className="py-6 font-black leading-none tracking-tight text-[16vw] md:text-[18vw] whitespace-nowrap overflow-hidden">LADE STACK</div>
        <div className="flex items-center justify-between py-4 border-t border-black/15 text-[10px] font-mono uppercase">
          <span>© 2026 Girish Lade • Lade Stack. All rights reserved.</span>
          <button aria-label="Back to top" onClick={()=>window.scrollTo({top:0, behavior:'smooth'})} className="w-10 h-10 grid place-items-center border border-black/20 hover:bg-black hover:text-lime transition-colors">↑</button>
          <span className="hidden md:inline">Built by Girish Lade</span>
        </div>
      </div>
      {toast && <div role="status" aria-live="polite" className="fixed bottom-4 left-4 bg-black text-lime text-[11px] font-mono uppercase px-3 py-2 rounded-[11px]">COPIED — GIRISH@LADESTACK.IN</div>}
    </footer>
  )
}

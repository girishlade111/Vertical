import { useEffect, useRef } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

const items=[
  {city:'NEW YORK (2025)', img:'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80&auto=format&fit=crop', ratio:'aspect-[3/4]'},
  {city:'PARIS (2023)', img:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80&auto=format&fit=crop', ratio:'aspect-[4/5]'},
  {city:'SYDNEY (2021)', img:'https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&q=80&auto=format&fit=crop', ratio:'aspect-[3/4]'},
  {city:'OSAKA (2019)', img:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80&auto=format&fit=crop', ratio:'aspect-[4/5]'},
  {city:'BRIGHTON (2018)', img:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80&auto=format&fit=crop', ratio:'aspect-[1/1]'},
  {city:'BERLIN (2016)', img:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80&auto=format&fit=crop', ratio:'aspect-[3/4]'},
]

export default function Gallery(){
  const reduce=usePrefersReducedMotion()
  const secRef=useRef(null)
  const colRefs=[useRef(null),useRef(null),useRef(null)]

  useEffect(()=>{
    if(reduce || window.matchMedia('(pointer: coarse)').matches) return
    let ticking=false
    const onScroll=()=>{
      if(ticking) return
      ticking=true
      requestAnimationFrame(()=>{
        const sec=secRef.current
        if(!sec) { ticking=false; return}
        const r=sec.getBoundingClientRect()
        const vh=window.innerHeight
        // progress through section
        const prog = Math.max(0, Math.min(1, (vh - r.top)/(vh + r.height)))
        const delta = (prog - 0.5) * 200 // -100..+100
        if(colRefs[1].current) colRefs[1].current.style.transform=`translate3d(0, ${delta*-0.06}px, 0)`
        if(colRefs[2].current) colRefs[2].current.style.transform=`translate3d(0, ${delta*-0.12}px, 0)`
        ticking=false
      })
    }
    window.addEventListener('scroll', onScroll, {passive:true})
    return()=>window.removeEventListener('scroll', onScroll)
  },[reduce])

  // entrance wipe
  useEffect(()=>{
    if(reduce) return
    const els=document.querySelectorAll('[data-gallery-item]')
    const io=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.style.clipPath='inset(0 0 0 0)'
          e.target.querySelector('img').style.transform='scale(1)'
          e.target.nextElementSibling?.classList.add('!opacity-100','!translate-y-0')
          io.unobserve(e.target)
        }
      })
    },{threshold:0.12})
    els.forEach(el=>{
      el.style.clipPath='inset(0 0 100% 0)'
      el.style.transition='clip-path 0.9s var(--ease-expo)'
      const img=el.querySelector('img')
      if(img){ img.style.transform='scale(1.08)'; img.style.transition='transform 1.2s var(--ease-expo)'}
      io.observe(el)
    })
    return()=>io.disconnect()
  },[reduce])

  const cols=[ [items[0],items[3]], [items[1],items[4]], [items[2],items[5]] ]

  return (
    <section ref={secRef} id="work" className="bg-black px-6 md:px-10 py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[6%]">
        {cols.map((col,ci)=>(
          <div key={ci} ref={colRefs[ci]} className="flex flex-col gap-[18vh] will-change-transform" style={{paddingTop: ci===1?'22vh': ci===2?'48vh':'0'}}>
            {col.map(item=>(
              <figure key={item.city} className="group">
                <div data-gallery-item className="overflow-hidden bg-[#111] will-change-transform">
                  <img src={item.img} alt={item.city} className={`w-full ${item.ratio} object-cover grayscale contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-[400ms]`} loading="lazy"/>
                </div>
                <figcaption className="mt-3 flex justify-between items-center opacity-0 translate-y-2 transition-all duration-500 delay-150">
                  <span className="text-[10px] font-mono uppercase tracking-wide text-white group-hover:text-lime transition-colors">{item.city}</span>
                  <span className="text-[10px] font-mono text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">IMG_0{ci+1}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

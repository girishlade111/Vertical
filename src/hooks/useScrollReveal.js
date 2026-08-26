import { useEffect } from 'react'

export function useScrollReveal(selector, opts={}){
  useEffect(()=>{
    const els=document.querySelectorAll(selector)
    if(!els.length) return
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if(reduced){ els.forEach(el=>el.querySelectorAll('[data-word]').forEach(w=>w.style.opacity='1')); return }

    els.forEach(container=>{
      const text=container.dataset.text || container.textContent
      if(container.dataset.split==='done') return
      container.dataset.split='done'
      container.innerHTML=''
      const words=text.trim().split(/\s+/)
      words.forEach(w=>{
        const span=document.createElement('span')
        span.textContent=w+' '
        span.dataset.word=''
        span.style.opacity='0.12'
        span.style.transition='opacity 0.15s linear'
        span.style.display='inline'
        // lime section ghost tint handled via parent class
        container.appendChild(span)
      })
    })

    let ticking=false
    const onScroll=()=>{
      if(ticking) return
      ticking=true
      requestAnimationFrame(()=>{
        els.forEach(container=>{
          const rect=container.getBoundingClientRect()
          const vh=window.innerHeight
          const start=vh*0.85
          const end=vh*0.35
          const top=rect.top
          // progress 0..1 as top moves from start to end
          let p=(start - top)/(start - end)
          p=Math.max(0,Math.min(1,p))
          const words=container.querySelectorAll('[data-word]')
          const n=words.length
          const revealCount=p*n
          words.forEach((w,i)=>{
            const dist=i - revealCount
            let o
            if(dist<=-1) o=1
            else if(dist<1) o= 0.12 + (1-0.12)*(1-(dist+1)/2) // frontier 2 words ramp
            else o=0.12
            // lime ghost tweak
            if(container.classList.contains('lime-ghost')){
              w.style.color = o<0.9 ? 'rgba(5,6,9,0.18)' : '#050609'
            }
            w.style.opacity=o
          })
        })
        ticking=false
      })
    }
    window.addEventListener('scroll',onScroll,{passive:true})
    onScroll()
    return()=>window.removeEventListener('scroll',onScroll)
  },[selector])
}

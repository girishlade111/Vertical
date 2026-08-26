import { useEffect, useState } from 'react'
export default function usePrefersReducedMotion(){
  const [v,setV]=useState(false)
  useEffect(()=>{
    const m=window.matchMedia('(prefers-reduced-motion: reduce)')
    setV(m.matches)
    const h=e=>setV(e.matches)
    m.addEventListener('change',h)
    return()=>m.removeEventListener('change',h)
  },[])
  return v
}

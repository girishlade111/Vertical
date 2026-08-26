import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// progress bar
const prog=document.getElementById('progress')
if(prog){
  const onScroll=()=>{
    const h=document.documentElement.scrollHeight - window.innerHeight
    const p= (window.scrollY / Math.max(1,h))*100
    prog.style.height=p+'%'
  }
  window.addEventListener('scroll', onScroll, {passive:true})
}

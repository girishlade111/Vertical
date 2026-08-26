import Nav from './components/Nav'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Gallery from './components/Gallery'
import Perspective from './components/Perspective'
import Settle from './components/Settle'
import ArchiveStrip from './components/ArchiveStrip'
import ModernRituals from './components/ModernRituals'
import Marquee from './components/Marquee'
import IndexRows from './components/IndexRows'
import EmbracingUnknown from './components/EmbracingUnknown'
import WhiteRabbit from './components/WhiteRabbit'
import Quote from './components/Quote'
import ModusVivendi from './components/ModusVivendi'
import ContemporaryMotion from './components/ContemporaryMotion'
import About from './components/About'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-black">
      <Nav/>
      <main id="main">
        <Hero/>
        <Manifesto/>
        <Gallery/>
        <Perspective/>
        <Settle/>
        <ArchiveStrip/>
        <ModernRituals/>
        <Marquee/>
        <IndexRows/>
        <EmbracingUnknown/>
        <WhiteRabbit/>
        <Quote/>
        <ModusVivendi/>
        <ContemporaryMotion/>
        <About/>
      </main>
      <Footer/>
      {/* left scroll progress */}
      <div aria-hidden="true" className="hidden md:block fixed left-10 top-1/2 -translate-y-1/2 w-px h-[40vh] bg-white/10 pointer-events-none">
        <div id="progress" className="w-full bg-lime origin-top" style={{height:'0%'}}/>
      </div>
    </div>
  )
}

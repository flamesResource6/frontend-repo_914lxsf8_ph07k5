import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,122,255,0.08),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.06),transparent_40%)]" />
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

export default App

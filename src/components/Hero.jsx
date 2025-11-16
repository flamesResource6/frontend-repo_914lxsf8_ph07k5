import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-600 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Now accepting early access signups
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Apple Wallet passes, reimagined for memberships & loyalty
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              Loya lets you issue sleek, updatable Wallet passes for stamp cards, event access, and member IDs — built with Scandinavian minimalism and real-time updates.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#early" className="pointer-events-auto inline-flex items-center justify-center gap-2 rounded-lg bg-black px-5 py-3 text-white shadow-sm hover:bg-gray-900 transition">
                Get early access
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#demo" className="pointer-events-auto inline-flex items-center justify-center rounded-lg px-5 py-3 text-gray-800 bg-white border border-gray-200 hover:bg-gray-50">
                View demo pass
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Menu, Wallet, ArrowRight } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-black text-white flex items-center justify-center shadow-sm">
            <Wallet className="h-5 w-5" />
          </div>
          <span className="text-xl font-semibold tracking-tight">Loya</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
          <a href="#faq" className="hover:text-gray-900 transition">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#early" className="text-sm font-medium px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition">
            Sign in
          </a>
          <a href="#early" className="group text-sm font-medium px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-900 transition inline-flex items-center gap-1">
            Get early access
            <ArrowRight className="h-4 w-4 translate-x-0 group-hover:translate-x-0.5 transition" />
          </a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}

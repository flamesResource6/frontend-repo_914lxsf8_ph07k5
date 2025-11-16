import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="early" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
          Be first to launch your wallet passes
        </h3>
        <p className="mt-3 text-gray-600">
          Join the early access list and we’ll notify you when invites roll out. Limited seats for the first cohort.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            required
            placeholder="Work email"
            className="w-full sm:w-80 rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
          />
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-5 py-3 text-white shadow-sm hover:bg-gray-900 transition">
            Request invite
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-500">No spam, unsubscribe anytime.</p>
      </div>
    </section>
  )
}

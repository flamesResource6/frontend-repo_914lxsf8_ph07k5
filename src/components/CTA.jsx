import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="early" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h3
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Be first to launch your wallet passes
        </motion.h3>
        <motion.p
          className="mt-3 text-gray-600"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          Join the early access list and we’ll notify you when invites roll out. Limited seats for the first cohort.
        </motion.p>

        <motion.form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
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
        </motion.form>

        <p className="mt-4 text-xs text-gray-500">No spam, unsubscribe anytime.</p>
      </div>
    </section>
  )
}

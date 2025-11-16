import { Wallet, Stamp, Users, RefreshCw } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Features() {
  const items = [
    {
      icon: Wallet,
      title: 'Native Wallet passes',
      desc: 'Deliver beautiful, secure Apple Wallet passes your customers actually want to keep.',
    },
    {
      icon: Stamp,
      title: 'Stamp cards reinvented',
      desc: 'Create digital punch cards with rules, accrual logic, and automatic rewards.',
    },
    {
      icon: Users,
      title: 'Membership & events',
      desc: 'Issue member IDs and event passes with live status, tiers, and check-in history.',
    },
    {
      icon: RefreshCw,
      title: 'Real-time updates',
      desc: 'Push changes instantly — balances, status, QR codes, and visuals update on-device.',
    },
  ]

  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 -top-24 -z-0 h-48 bg-gradient-to-b from-blue-50/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <motion.h2
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Designed with Scandinavian restraint
          </motion.h2>
          <motion.p
            className="mt-3 text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            Minimal surface, maximal clarity. Opinionated defaults, flexible where it matters.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition will-change-transform"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="h-10 w-10 rounded-xl bg-gray-900 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

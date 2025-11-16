import { useState, useMemo } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { QrCode, Star, Ticket, Crown } from 'lucide-react'

export default function AnimatedWallet() {
  const [hovered, setHovered] = useState(false)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rotateX = useTransform(my, [-50, 50], [8, -8])
  const rotateY = useTransform(mx, [-50, 50], [-8, 8])
  const translateX = useTransform(mx, [-50, 50], [-10, 10])
  const translateY = useTransform(my, [-50, 50], [10, -10])

  const layers = useMemo(() => [
    { id: 'membership', icon: Crown, title: 'Membership', tint: 'from-amber-300/50 to-amber-500/30', glass: 'backdrop-blur-xl bg-white/25' },
    { id: 'event', icon: Ticket, title: 'Event Pass', tint: 'from-indigo-300/50 to-blue-500/30', glass: 'backdrop-blur-xl bg-white/20' },
    { id: 'stamp', icon: Star, title: 'Stamp Card', tint: 'from-emerald-300/50 to-teal-500/30', glass: 'backdrop-blur-xl bg-white/15' },
  ], [])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    mx.set(Math.max(-50, Math.min(50, x / 6)))
    my.set(Math.max(-50, Math.min(50, y / 6)))
  }

  return (
    <motion.div
      className="relative h-[460px] w-full max-w-xl"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); mx.set(0); my.set(0) }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Glow */}
      <motion.div
        className="absolute -inset-8 rounded-[40px] bg-[radial-gradient(ellipse_at_center,rgba(0,122,255,0.25),transparent_60%)] blur-2xl"
        style={{ translateX, translateY }}
      />

      {/* Card stack */}
      <div className="absolute inset-0 grid place-items-center">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.id}
            className={`relative w-[340px] sm:w-[380px] h-[210px] rounded-[28px] border border-white/30 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.35)] ${layer.glass} overflow-hidden`}
            style={{
              rotateX,
              rotateY,
              translateX: useTransform(mx, [-50, 50], [(-10 + i * 8), (10 - i * 8)]),
              translateY: useTransform(my, [-50, 50], [(10 - i * 6), (-10 + i * 6)]),
              zIndex: 10 - i,
            }}
            initial={{ y: 30 + i * 12, scale: 0.96 - i * 0.03, opacity: 0 }}
            animate={{ y: i * -8, scale: 1 - i * 0.04, opacity: 1 }}
            transition={{ delay: 0.12 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${layer.tint}`} />
            <div className="absolute inset-0 backdrop-brightness-125" />

            {/* Header */}
            <div className="relative z-10 p-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-black/70 text-white flex items-center justify-center">
                  <layer.icon className="h-4 w-4" />
                </div>
                <span className="text-white/90 font-medium tracking-tight">{layer.title}</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-white/60">Loya</div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-5">
              <div className="rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-3 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/70">Status</div>
                  <div className="text-white font-semibold">Active</div>
                </div>
                <div className="text-white/80 text-right">
                  <div className="text-[10px] uppercase tracking-wider">Tier</div>
                  <div className="font-semibold">Gold</div>
                </div>
              </div>
            </div>

            {/* QR */}
            <div className="relative z-10 px-5 mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white/80">
                <QrCode className="h-10 w-10" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider">Member</div>
                  <div className="font-semibold -mt-0.5">ID 284 993</div>
                </div>
              </div>
              <div className="text-white/70 text-xs">Updated live</div>
            </div>

            {/* Glass shine */}
            <motion.div
              className="pointer-events-none absolute -inset-1 rounded-[28px] bg-gradient-to-tr from-white/10 via-white/40 to-white/10"
              style={{ opacity: hovered ? 1 : 0.8 }}
              animate={{ x: hovered ? 10 : 0 }}
              transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

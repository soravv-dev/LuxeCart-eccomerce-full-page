import { motion } from 'framer-motion'

export default function Loading({ size = 40, label = '' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        style={{ width: size, height: size }}
        className="rounded-full border-2 border-white/10 border-t-emerald"
      />
      {label && <p className="text-sm text-white/50">{label}</p>}
    </div>
  )
}

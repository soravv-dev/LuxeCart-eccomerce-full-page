import { motion } from 'framer-motion'

const badgeStyles = {
  'Best Seller': 'bg-emerald/15 text-emerald border border-emerald/30',
  'New': 'bg-gold/15 text-gold border border-gold/30',
  'Sale': 'bg-red-500/15 text-red-400 border border-red-500/30',
  'Premium': 'bg-white/10 text-white border border-white/20',
}

export default function ProductBadge({ badge, className = '' }) {
  if (!badge) return null
  return (
    <motion.span
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${badgeStyles[badge] || badgeStyles['Premium']} ${className}`}
    >
      {badge}
    </motion.span>
  )
}

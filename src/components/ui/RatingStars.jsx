import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function RatingStars({ rating = 0, size = 16, showValue = false, reviews = 0 }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.div
            key={star}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: star * 0.05 }}
          >
            <Star
              size={size}
              className={star <= Math.round(rating) ? 'fill-gold text-gold' : 'text-white/20'}
            />
          </motion.div>
        ))}
      </div>
      {showValue && (
        <span className="text-xs text-white/60">
          {rating.toFixed(1)}{reviews > 0 && ` (${reviews})`}
        </span>
      )}
    </div>
  )
}

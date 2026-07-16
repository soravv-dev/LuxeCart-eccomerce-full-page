import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../../data/products'
import RatingStars from '../ui/RatingStars'

export default function Testimonials() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="card-luxury p-6 hover-lift"
          >
            <Quote size={28} className="text-emerald/30 mb-4" />
            <p className="text-white/70 text-sm leading-relaxed mb-6">{t.text}</p>
            <div className="flex items-center gap-3">
              <img src={`${t.avatar}?w=100&q=80`} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
              <div>
                <h4 className="text-sm font-semibold text-white">{t.name}</h4>
                <p className="text-xs text-white/40">{t.role}</p>
              </div>
              <div className="ml-auto">
                <RatingStars rating={t.rating} size={12} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

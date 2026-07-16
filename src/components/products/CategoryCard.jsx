import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { categories } from '../../data/products'

export default function CategoryCard({ category, index = 0 }) {
  const Icon = Icons[category.icon] || Icons.Sparkles
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/shop?category=${category.id}`}
        className="group relative block aspect-[4/5] rounded-3xl overflow-hidden card-luxury hover-lift"
      >
        <img
          src={`${category.image}?w=600&q=80&auto=format&fit=crop`}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center mb-3 group-hover:bg-emerald/20 transition-colors">
            <Icon size={22} className="text-emerald" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-1">{category.name}</h3>
          <div className="flex items-center gap-1 text-sm text-emerald opacity-0 group-hover:opacity-100 transition-opacity">
            Shop now <ArrowRight size={14} />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
      {categories.map((cat, i) => (
        <CategoryCard key={cat.id} category={cat} index={i} />
      ))}
    </div>
  )
}

import { motion } from 'framer-motion'
import { CategoryGrid } from '../components/products/CategoryCard'
import SectionHeading from '../components/ui/SectionHeading'
import { categories, getProductsByCategory } from '../data/products'

export default function Categories() {
  return (
    <div className="pt-24 md:pt-28 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Browse"
          title="All Categories"
          subtitle="Explore our full range of premium product categories."
        />

        <CategoryGrid />

        {/* Category counts */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => {
            const count = getProductsByCategory(cat.id).length
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-5 text-center"
              >
                <div className="text-2xl font-bold gradient-text">{count}</div>
                <div className="text-xs text-white/50 mt-1">{cat.name}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Tag } from 'lucide-react'
import { getSaleProducts } from '../../data/products'

export default function OfferBanner() {
  const saleProducts = getSaleProducts(4)
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-4xl glass p-8 md:p-12"
      >
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gold/10 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-emerald/10 blur-[100px]" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 text-gold text-xs font-semibold mb-4">
              <Tag size={14} /> Limited Time Offer
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold gradient-text mb-3">
              Up to 40% Off Premium Selection
            </h2>
            <p className="text-white/50 max-w-lg mb-6">
              Save big on our curated collection of premium products. From headphones to watches, luxury meets affordability.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gold text-ink-950 font-semibold text-sm hover:bg-gold-soft transition-colors"
            >
              Shop Deals <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 md:w-80">
            {saleProducts.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden"
              >
                <img
                  src={`${p.images[0]}?w=300&q=80&auto=format&fit=crop`}
                  alt={p.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

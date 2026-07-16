import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/common/Hero'
import { CategoryGrid } from '../components/products/CategoryCard'
import ProductGrid from '../components/products/ProductGrid'
import Testimonials from '../components/common/Testimonials'
import OfferBanner from '../components/common/OfferBanner'
import SectionHeading from '../components/ui/SectionHeading'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import {
  getFeaturedProducts,
  getBestSellers,
  getNewProducts,
  stats,
} from '../data/products'

export default function Home() {
  const featured = getFeaturedProducts(8)
  const bestSellers = getBestSellers(4)
  const newArrivals = getNewProducts(4)

  return (
    <div>
      <Hero />

      {/* Categories */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Browse"
          title="Shop by Category"
          subtitle="Explore our carefully curated categories, each handpicked for the discerning shopper."
        />
        <CategoryGrid />
      </section>

      {/* Featured Products */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <SectionHeading
            center={false}
            eyebrow="Handpicked"
            title="Featured Products"
            subtitle="Our top-rated premium selections, chosen for exceptional quality."
          />
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-2 text-sm text-emerald hover:text-emerald-soft transition-colors"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      {/* Best Sellers */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <SectionHeading
            center={false}
            eyebrow="Trending"
            title="Best Sellers"
            subtitle="The most loved products by our customers."
          />
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-2 text-sm text-emerald hover:text-emerald-soft transition-colors"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <ProductGrid products={bestSellers} />
      </section>

      {/* Stats with Animated Counters */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-3xl p-6 md:p-8 text-center"
            >
              <div className="text-3xl md:text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <SectionHeading
            center={false}
            eyebrow="Fresh"
            title="New Arrivals"
            subtitle="The latest additions to our premium collection."
          />
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-2 text-sm text-emerald hover:text-emerald-soft transition-colors"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <ProductGrid products={newArrivals} />
      </section>

      {/* Special Offers */}
      <OfferBanner />

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by Thousands"
            subtitle="Don't just take our word for it. Here's what our customers have to say."
          />
        </div>
        <Testimonials />
      </section>
    </div>
  )
}

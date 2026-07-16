import { motion } from 'framer-motion'
import { Award, Globe, Users, Heart, Target, Sparkles } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import AnimatedCounter from '../components/ui/AnimatedCounter'

const values = [
  { icon: Award, title: 'Quality First', desc: 'Every product is hand-selected for exceptional craftsmanship and durability.' },
  { icon: Heart, title: 'Customer Obsessed', desc: 'Your experience matters. Every detail, from browse to delivery, is crafted for you.' },
  { icon: Globe, title: 'Global Reach', desc: 'Shipping premium products to customers in over 50 countries worldwide.' },
  { icon: Target, title: 'Curated, Not Cluttered', desc: 'We choose depth over breadth. Only the best makes it to our shelves.' },
]

const milestones = [
  { year: '2021', title: 'The Beginning', desc: 'LuxeCart AI started with a simple idea: luxury shopping should be effortless.' },
  { year: '2022', title: 'Rapid Growth', desc: 'Expanded to 10 product categories with 50+ premium brands.' },
  { year: '2023', title: '50K Customers', desc: 'Reached 50,000 happy customers with a 4.9 average rating.' },
  { year: '2024', title: 'Global Expansion', desc: 'Now shipping to 50+ countries with same-day delivery in major cities.' },
]

export default function About() {
  return (
    <div className="pt-24 md:pt-28 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles size={14} className="text-emerald" />
            <span className="text-xs font-medium text-white/80 tracking-wide">OUR STORY</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-semibold gradient-text mb-6 leading-tight">
            Redefining Luxury Shopping
          </h1>
          <p className="text-lg text-white/50 leading-relaxed">
            We believe luxury isn't about price tags — it's about the experience. From the moment you land on our store to the day your product arrives, every touchpoint is designed to feel exceptional.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: Users, value: 50, suffix: 'K+', label: 'Happy Customers' },
            { icon: Globe, value: 50, suffix: '+', label: 'Countries Served' },
            { icon: Award, value: 82, suffix: '+', label: 'Premium Products' },
            { icon: Heart, value: 4.9, suffix: '', label: 'Average Rating' },
          ].map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-3xl p-6 text-center"
              >
                <Icon size={28} className="text-emerald mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-white/50 mt-1">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          eyebrow="What We Stand For"
          title="Our Core Values"
          subtitle="The principles that guide every decision we make."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-luxury p-6 hover-lift flex gap-4"
              >
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center flex-shrink-0">
                  <Icon size={24} className="text-emerald" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{v.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          eyebrow="Our Journey"
          title="Milestones"
          subtitle="From idea to global luxury destination."
        />
        <div className="space-y-6">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`card-luxury p-6 flex flex-col md:flex-row items-start gap-4 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="text-3xl font-bold gold-text md:w-32 flex-shrink-0">{m.year}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">{m.title}</h3>
                <p className="text-sm text-white/50">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

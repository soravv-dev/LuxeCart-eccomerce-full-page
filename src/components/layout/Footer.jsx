import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, Instagram, Twitter, Github, Mail, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const footerLinks = [
  {
    title: 'Shop',
    links: [
      { label: 'All Products', to: '/shop' },
      { label: 'Categories', to: '/categories' },
      { label: 'Wishlist', to: '/wishlist' },
      { label: 'Cart', to: '/cart' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Careers', to: '/about' },
      { label: 'Press', to: '/about' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Shipping', to: '/contact' },
      { label: 'Returns', to: '/contact' },
      { label: 'FAQ', to: '/contact' },
      { label: 'Privacy', to: '/contact' },
    ],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="relative border-t border-white/10 bg-ink-900 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 mb-16 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-semibold gradient-text mb-3">
            Join the LuxeCart Circle
          </h3>
          <p className="text-white/50 mb-6 max-w-xl mx-auto">
            Subscribe for exclusive drops, early access, and members-only offers.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 flex items-center gap-3 glass rounded-2xl px-4 py-3">
              <Mail size={18} className="text-white/40" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40 text-sm"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-emerald text-ink-950 font-semibold text-sm hover:bg-emerald-soft transition-colors inline-flex items-center justify-center gap-2"
            >
              {subscribed ? 'Subscribed!' : 'Subscribe'}
              {!subscribed && <ArrowRight size={16} />}
            </button>
          </form>
        </motion.div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald to-emerald-deep flex items-center justify-center">
                <Sparkles size={18} className="text-ink-950" />
              </div>
              <span className="font-display text-lg font-semibold text-white">LuxeCart </span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Curated premium products for those who appreciate the finer things. Crafted with intention.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Instagram, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/60 hover:text-emerald transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/50 hover:text-emerald transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} LuxeCart AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <Link to="/contact" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

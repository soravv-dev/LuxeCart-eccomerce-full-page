import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, Home, ShoppingBag, LayoutGrid, Heart, Info, Mail, Sparkles } from 'lucide-react'

const links = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/shop', label: 'Shop', icon: ShoppingBag },
  { to: '/categories', label: 'Categories', icon: LayoutGrid },
  { to: '/wishlist', label: 'Wishlist', icon: Heart },
  { to: '/about', label: 'About', icon: Info },
  { to: '/contact', label: 'Contact', icon: Mail },
]

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] md:hidden"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="absolute right-0 top-0 bottom-0 w-72 glass-strong p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald to-emerald-deep flex items-center justify-center">
                  <Sparkles size={16} className="text-ink-950" />
                </div>
                <span className="font-display text-lg font-semibold text-white">LuxeCart</span>
              </div>
              <button onClick={onClose} className="p-2 rounded-xl hover:bg-white/10 text-white/60">
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {links.map((link, i) => {
                const Icon = link.icon
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={link.to}
                      onClick={onClose}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-white/80 hover:text-white hover:bg-white/5 transition-colors text-base font-medium"
                    >
                      <Icon size={20} className="text-emerald" />
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
            <div className="mt-auto pt-6 border-t border-white/10">
              <p className="text-xs text-white/40 leading-relaxed">
                Premium luxury shopping, reimagined.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

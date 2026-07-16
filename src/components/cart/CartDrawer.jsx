import { AnimatePresence, motion } from 'framer-motion'
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../data/products'
import EmptyState from '../ui/EmptyState'

export default function CartDrawer() {
  const {
    items, isOpen, setIsOpen, removeFromCart, updateQuantity,
    subtotal, shipping, tax, total, itemCount,
  } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80]"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-md glass-strong flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-emerald" />
                <h2 className="text-lg font-semibold text-white">
                  Cart {itemCount > 0 && <span className="text-white/40 text-sm">({itemCount})</span>}
                </h2>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 rounded-xl hover:bg-white/10 text-white/60">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            {items.length === 0 ? (
              <div className="flex-1 overflow-y-auto">
                <EmptyState
                  icon={ShoppingBag}
                  title="Your cart is empty"
                  message="Add some premium products to your cart to get started."
                  actionLabel="Browse Products"
                  onAction={() => { setIsOpen(false); window.location.href = '/shop' }}
                />
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      className="flex gap-4 glass rounded-2xl p-3"
                    >
                      <img
                        src={`${item.images[0]}?w=200&q=80&auto=format&fit=crop`}
                        alt={item.name}
                        className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-white truncate">{item.name}</h3>
                        <p className="text-xs text-white/40 capitalize">{item.category}</p>
                        <p className="text-sm font-semibold text-emerald mt-1">{formatPrice(item.price)}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-lg glass flex items-center justify-center text-white/60 hover:text-white"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm text-white w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-lg glass flex items-center justify-center text-white/60 hover:text-white"
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto p-1.5 rounded-lg text-white/40 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Summary */}
                <div className="border-t border-white/10 p-6 space-y-3">
                  <div className="flex justify-between text-sm text-white/60">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-white/60">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-white/60">
                    <span>Tax (8%)</span>
                    <span>{formatPrice(tax)}</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex justify-between text-base font-semibold text-white">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <Link
                    to="/cart"
                    onClick={() => setIsOpen(false)}
                    className="w-full mt-2 px-6 py-4 rounded-2xl bg-emerald text-ink-950 font-semibold text-sm hover:bg-emerald-soft transition-colors inline-flex items-center justify-center gap-2"
                  >
                    Checkout <ArrowRight size={16} />
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

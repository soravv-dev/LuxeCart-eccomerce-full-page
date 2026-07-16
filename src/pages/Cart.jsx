import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ShoppingBag, Plus, Minus, Trash2, Tag, Truck, ShieldCheck } from 'lucide-react'
import { useCart } from '../hooks/useCart'
import { formatPrice } from '../data/products'
import EmptyState from '../components/ui/EmptyState'
import Button from '../components/ui/Button'

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, subtotal, shipping, tax, total, itemCount } = useCart()

  if (items.length === 0) {
    return (
      <div className="pt-24 md:pt-28 min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display text-3xl md:text-4xl font-semibold gradient-text mb-8 text-center">
            Your Cart
          </h1>
          <EmptyState
            icon={ShoppingBag}
            title="Your cart is empty"
            message="Looks like you haven't added anything yet. Let's fix that."
            actionLabel="Browse Products"
            onAction={() => (window.location.href = '/shop')}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 md:pt-28 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-semibold gradient-text">
          Your Cart <span className="text-white/40 text-lg">({itemCount} items)</span>
        </h1>
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
          <ArrowLeft size={16} /> Continue Shopping
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="card-luxury p-4 flex gap-4"
            >
              <Link to={`/product/${item.id}`} className="flex-shrink-0">
                <img
                  src={`${item.images[0]}?w=300&q=80&auto=format&fit=crop`}
                  alt={item.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover"
                />
              </Link>
              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider">{item.brand}</p>
                  <Link to={`/product/${item.id}`}>
                    <h3 className="text-base font-medium text-white hover:text-emerald transition-colors line-clamp-1">{item.name}</h3>
                  </Link>
                  <p className="text-xs text-white/40 capitalize">{item.category}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 glass rounded-xl px-3 py-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-white/60 hover:text-white">
                      <Minus size={16} />
                    </button>
                    <span className="text-sm text-white w-8 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-white/60 hover:text-white">
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold text-white">{formatPrice(item.price * item.quantity)}</span>
                    <button onClick={() => removeFromCart(item.id)} className="p-2 rounded-xl text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <button
            onClick={clearCart}
            className="text-sm text-white/40 hover:text-red-400 transition-colors flex items-center gap-2"
          >
            <Trash2 size={16} /> Clear cart
          </button>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 card-luxury p-6 space-y-4">
            <h2 className="text-lg font-semibold text-white">Order Summary</h2>

            {/* Promo */}
            <div className="flex items-center gap-2 glass rounded-2xl px-4 py-3">
              <Tag size={16} className="text-emerald" />
              <input
                placeholder="Promo code"
                className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-white/40"
              />
              <button className="text-sm text-emerald font-medium">Apply</button>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-sm text-white/60">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-white/60">
                <span>Shipping</span>
                <span>{shipping === 0 ? <span className="text-emerald">Free</span> : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between text-sm text-white/60">
                <span>Tax (8%)</span>
                <span>{formatPrice(tax)}</span>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            <div className="flex justify-between text-base font-semibold text-white">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>

            <Button size="lg" className="w-full">
              Proceed to Checkout
            </Button>

            <div className="flex items-center justify-center gap-4 pt-4 text-xs text-white/40">
              <span className="flex items-center gap-1"><Truck size={14} /> Fast Delivery</span>
              <span className="flex items-center gap-1"><ShieldCheck size={14} /> Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

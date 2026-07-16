import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, ShoppingBag, Trash2 } from 'lucide-react'
import { useWishlist } from '../hooks/useWishlist'
import { useCart } from '../hooks/useCart'
import { formatPrice } from '../data/products'
import EmptyState from '../components/ui/EmptyState'
import RatingStars from '../components/ui/RatingStars'
import ProductBadge from '../components/ui/ProductBadge'

export default function Wishlist() {
  const { items, removeFromWishlist, clearWishlist } = useWishlist()
  const { addToCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="pt-24 md:pt-28 min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display text-3xl md:text-4xl font-semibold gradient-text mb-8 text-center">
            Your Wishlist
          </h1>
          <EmptyState
            icon={Heart}
            title="Your wishlist is empty"
            message="Save your favorite products here to revisit them later."
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
          Your Wishlist <span className="text-white/40 text-lg">({items.length})</span>
        </h1>
        <button
          onClick={clearWishlist}
          className="text-sm text-white/40 hover:text-red-400 transition-colors flex items-center gap-2"
        >
          <Trash2 size={16} /> Clear all
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((product, i) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="card-luxury overflow-hidden hover-lift"
          >
            <div className="relative aspect-square overflow-hidden bg-ink-700">
              <Link to={`/product/${product.id}`}>
                <img
                  src={`${product.images[0]}?w=600&q=80&auto=format&fit=crop`}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </Link>
              <div className="absolute top-3 left-3">
                <ProductBadge badge={product.badge} />
              </div>
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-3 right-3 w-9 h-9 rounded-xl glass flex items-center justify-center hover:bg-red-500/20 transition-colors"
              >
                <Heart size={18} className="fill-red-500 text-red-500" />
              </button>
            </div>
            <div className="p-5">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">{product.brand}</p>
              <Link to={`/product/${product.id}`}>
                <h3 className="text-base font-medium text-white mb-1 hover:text-emerald transition-colors line-clamp-1">
                  {product.name}
                </h3>
              </Link>
              <RatingStars rating={product.rating} size={14} showValue />
              <div className="flex items-center justify-between mt-3">
                <span className="text-lg font-semibold text-white">{formatPrice(product.price)}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="px-4 py-2 rounded-xl bg-emerald text-ink-950 text-sm font-semibold flex items-center gap-2 hover:bg-emerald-soft transition-colors"
                >
                  <ShoppingBag size={16} /> Add
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, ShoppingBag, Eye } from 'lucide-react'
import { formatPrice, getDiscount } from '../../data/products'
import { useCart } from '../../hooks/useCart'
import { useWishlist } from '../../hooks/useWishlist'
import RatingStars from '../ui/RatingStars'
import ProductBadge from '../ui/ProductBadge'

export default function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()
  const inWishlist = isInWishlist(product.id)
  const discount = getDiscount(product)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group card-luxury overflow-hidden hover-lift hover:shadow-glow"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-ink-700">
        <Link to={`/product/${product.id}`}>
          <motion.img
            src={`${product.images[0]}?w=600&q=80&auto=format&fit=crop`}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <ProductBadge badge={product.badge} />
          {discount > 0 && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-500/20 text-red-400 border border-red-500/30">
              -{discount}%
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-3 right-3 w-9 h-9 rounded-xl glass flex items-center justify-center transition-all hover:scale-110"
        >
          <Heart
            size={18}
            className={inWishlist ? 'fill-red-500 text-red-500' : 'text-white/70'}
          />
        </button>

        {/* Quick Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-3 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
          <button
            onClick={() => addToCart(product)}
            className="flex-1 px-4 py-2.5 rounded-xl bg-emerald text-ink-950 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-emerald-soft transition-colors"
          >
            <ShoppingBag size={16} /> Add to Cart
          </button>
          <Link
            to={`/product/${product.id}`}
            className="w-11 h-11 rounded-xl glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <Eye size={18} />
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="text-xs text-white/40 uppercase tracking-wider mb-1">{product.brand}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-base font-medium text-white mb-1 group-hover:text-emerald transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-white/40 capitalize mb-3">{product.category}</p>
        <RatingStars rating={product.rating} size={14} showValue reviews={product.reviews} />
        <div className="flex items-center gap-2 mt-3">
          <span className="text-lg font-semibold text-white">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="text-sm text-white/40 line-through">{formatPrice(product.oldPrice)}</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

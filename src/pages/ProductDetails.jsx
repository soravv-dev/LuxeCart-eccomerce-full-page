import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Heart, ShoppingBag, Minus, Plus, Check, ChevronRight, Truck, Shield, RotateCcw,
} from 'lucide-react'
import ProductGallery from '../components/products/ProductGallery'
import ProductGrid from '../components/products/ProductGrid'
import RatingStars from '../components/ui/RatingStars'
import ProductBadge from '../components/ui/ProductBadge'
import Button from '../components/ui/Button'
import { getProductById, getRelatedProducts, formatPrice, getDiscount } from '../data/products'
import { useCart } from '../hooks/useCart'
import { useWishlist } from '../hooks/useWishlist'

export default function ProductDetails() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="pt-32 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-display text-3xl font-semibold gradient-text mb-4">Product Not Found</h1>
        <p className="text-white/50 mb-6">The product you're looking for doesn't exist.</p>
        <Link to="/shop" className="px-6 py-3 rounded-2xl bg-emerald text-ink-950 font-semibold text-sm">
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product, 4)
  const inWishlist = isInWishlist(product.id)
  const discount = getDiscount(product)

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="pt-24 md:pt-28 min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-sm text-white/40">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
          <ChevronRight size={14} />
          <Link to={`/shop?category=${product.category}`} className="hover:text-white transition-colors capitalize">{product.category}</Link>
          <ChevronRight size={14} />
          <span className="text-white/60 truncate">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductGallery images={product.images} alt={product.name} />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <ProductBadge badge={product.badge} />
              {discount > 0 && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500/15 text-red-400 border border-red-500/30">
                  Save {discount}%
                </span>
              )}
            </div>
            <p className="text-xs text-white/40 uppercase tracking-wider mb-1">{product.brand}</p>
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">{product.name}</h1>
            <div className="flex items-center gap-3 mb-6">
              <RatingStars rating={product.rating} size={18} showValue reviews={product.reviews} />
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-white">{formatPrice(product.price)}</span>
              {product.oldPrice && (
                <span className="text-lg text-white/40 line-through">{formatPrice(product.oldPrice)}</span>
              )}
            </div>

            <p className="text-white/60 leading-relaxed mb-6">{product.description}</p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-white mb-3">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                    <Check size={16} className="text-emerald flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2 mb-6 text-sm">
              <span className={`w-2 h-2 rounded-full ${product.stock > 5 ? 'bg-emerald' : 'bg-gold'}`} />
              <span className="text-white/60">
                {product.stock > 5 ? 'In Stock' : `Only ${product.stock} left`}
              </span>
            </div>

            {/* Quantity + Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex items-center gap-3 glass rounded-2xl px-4 py-3">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="text-white/60 hover:text-white">
                  <Minus size={18} />
                </button>
                <span className="text-white font-medium w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="text-white/60 hover:text-white">
                  <Plus size={18} />
                </button>
              </div>
              <Button onClick={handleAddToCart} size="lg" className="flex-1">
                {added ? <><Check size={18} /> Added!</> : <><ShoppingBag size={18} /> Add to Cart</>}
              </Button>
              <button
                onClick={() => toggleWishlist(product)}
                className="w-14 h-14 rounded-2xl glass flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Heart size={22} className={inWishlist ? 'fill-red-500 text-red-500' : 'text-white/70'} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
              {[
                { icon: Truck, label: 'Free Shipping', sub: 'Over $500' },
                { icon: Shield, label: '2 Year Warranty', sub: 'Full coverage' },
                { icon: RotateCcw, label: '30 Day Returns', sub: 'No questions' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="text-center">
                    <Icon size={22} className="text-emerald mx-auto mb-2" />
                    <div className="text-xs font-medium text-white">{item.label}</div>
                    <div className="text-xs text-white/40">{item.sub}</div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h2 className="font-display text-2xl md:text-3xl font-semibold gradient-text mb-8 text-center">
            You May Also Like
          </h2>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  )
}

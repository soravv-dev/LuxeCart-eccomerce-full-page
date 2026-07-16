import ProductCard from './ProductCard'
import EmptyState from '../ui/EmptyState'
import { PackageSearch } from 'lucide-react'

export default function ProductGrid({ products = [], loading = false }) {
  if (loading) return null
  if (products.length === 0) {
    return (
      <EmptyState
        icon={PackageSearch}
        title="No products found"
        message="Try adjusting your filters or search query to find what you're looking for."
      />
    )
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </div>
  )
}

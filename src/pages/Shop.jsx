import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SlidersHorizontal, X, PackageSearch } from 'lucide-react'
import ProductGrid from '../components/products/ProductGrid'
import FilterSidebar from '../components/products/FilterSidebar'
import EmptyState from '../components/ui/EmptyState'
import { products, categories, formatPrice } from '../data/products'

const MAX_PRICE = 3000

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [priceRange, setPriceRange] = useState([0, MAX_PRICE])
  const [minRating, setMinRating] = useState(0)
  const [sortBy, setSortBy] = useState('featured')
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'all')
    setSearchQuery(searchParams.get('q') || '')
  }, [searchParams])

  const filtered = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    if (minRating > 0) {
      result = result.filter((p) => p.rating >= minRating)
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0))
        break
      default:
        break
    }
    return result
  }, [selectedCategory, priceRange, minRating, sortBy, searchQuery])

  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  useEffect(() => { setCurrentPage(1) }, [selectedCategory, priceRange, minRating, sortBy, searchQuery])

  const handleReset = () => {
    setSelectedCategory('all')
    setPriceRange([0, MAX_PRICE])
    setMinRating(0)
    setSortBy('featured')
    setSearchQuery('')
    setSearchParams({})
  }

  return (
    <div className="pt-24 md:pt-28 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald mb-3 block">
            Collection
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold gradient-text mb-3">
            Shop All Products
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            {filtered.length} premium products across {categories.length} categories
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-28">
            <FilterSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              maxPrice={MAX_PRICE}
              minRating={minRating}
              setMinRating={setMinRating}
              sortBy={sortBy}
              setSortBy={setSortBy}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onReset={handleReset}
            />
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setShowFilters(true)}
            className="lg:hidden mb-4 px-4 py-3 rounded-2xl glass text-sm text-white flex items-center gap-2"
          >
            <SlidersHorizontal size={16} /> Filters
          </button>

          {paginated.length === 0 ? (
            <EmptyState
              icon={PackageSearch}
              title="No products found"
              message="Try adjusting your filters or search query."
              actionLabel="Reset Filters"
              onAction={handleReset}
            />
          ) : (
            <>
              <ProductGrid products={paginated} />

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-xl glass text-sm text-white/70 hover:text-white disabled:opacity-30 transition-colors"
                  >
                    Prev
                  </button>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-xl text-sm transition-colors ${
                        currentPage === i + 1
                          ? 'bg-emerald text-ink-950 font-semibold'
                          : 'glass text-white/60 hover:text-white'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-xl glass text-sm text-white/70 hover:text-white disabled:opacity-30 transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowFilters(false)} />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28 }}
              className="absolute left-0 top-0 bottom-0 w-80 glass-strong p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Filters</h2>
                <button onClick={() => setShowFilters(false)} className="p-2 rounded-xl hover:bg-white/10 text-white/60">
                  <X size={20} />
                </button>
              </div>
              <FilterSidebar
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                maxPrice={MAX_PRICE}
                minRating={minRating}
                setMinRating={setMinRating}
                sortBy={sortBy}
                setSortBy={setSortBy}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onReset={handleReset}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

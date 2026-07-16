import { Search, SlidersHorizontal, Star, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FilterSidebar({
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  maxPrice,
  minRating,
  setMinRating,
  sortBy,
  setSortBy,
  searchQuery,
  setSearchQuery,
  onReset,
}) {
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
    { value: 'newest', label: 'Newest' },
  ]

  return (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="text-sm font-medium text-white/80 mb-2 block">Search</label>
        <div className="flex items-center gap-2 glass rounded-2xl px-4 py-3">
          <Search size={18} className="text-white/40" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40 text-sm"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="text-white/40 hover:text-white">
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Sort */}
      <div>
        <label className="text-sm font-medium text-white/80 mb-2 block flex items-center gap-2">
          <SlidersHorizontal size={16} /> Sort By
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full glass rounded-2xl px-4 py-3 text-sm text-white outline-none cursor-pointer [&>option]:bg-ink-800"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Categories */}
      <div>
        <label className="text-sm font-medium text-white/80 mb-3 block">Category</label>
        <div className="space-y-1">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-colors ${
              selectedCategory === 'all' ? 'bg-emerald/15 text-emerald' : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`w-full text-left px-3 py-2 rounded-xl text-sm capitalize transition-colors ${
                selectedCategory === cat.id ? 'bg-emerald/15 text-emerald' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="text-sm font-medium text-white/80 mb-3 block">
          Price Range: <span className="text-emerald">${priceRange[0]} - ${priceRange[1]}</span>
        </label>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max={maxPrice}
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Math.min(Number(e.target.value), priceRange[1] - 50), priceRange[1]])}
            className="w-full accent-emerald"
          />
          <input
            type="range"
            min="0"
            max={maxPrice}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Math.max(Number(e.target.value), priceRange[0] + 50)])}
            className="w-full accent-emerald"
          />
        </div>
      </div>

      {/* Rating */}
      <div>
        <label className="text-sm font-medium text-white/80 mb-3 block flex items-center gap-2">
          <Star size={16} /> Minimum Rating
        </label>
        <div className="flex gap-2">
          {[0, 3, 4, 4.5].map((r) => (
            <button
              key={r}
              onClick={() => setMinRating(r)}
              className={`px-3 py-2 rounded-xl text-sm transition-colors ${
                minRating === r ? 'bg-emerald/15 text-emerald border border-emerald/30' : 'glass text-white/60 hover:text-white'
              }`}
            >
              {r === 0 ? 'All' : `${r}+`}
            </button>
          ))}
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={onReset}
        className="w-full px-4 py-3 rounded-2xl border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-colors text-sm"
      >
        Reset Filters
      </button>
    </div>
  )
}

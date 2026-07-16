import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProductGallery({ images = [], alt = '' }) {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 transition-all ${
              active === i ? 'border-emerald' : 'border-white/10 hover:border-white/30'
            }`}
          >
            <img src={`${src}?w=200&q=80&auto=format&fit=crop`} alt={`${alt} ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 relative aspect-square rounded-3xl overflow-hidden bg-ink-700">
        <motion.img
          key={active}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          src={`${images[active]}?w=900&q=80&auto=format&fit=crop`}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

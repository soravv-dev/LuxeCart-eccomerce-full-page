import { motion } from 'framer-motion'
import { PackageOpen } from 'lucide-react'
import Button from './Button'

export default function EmptyState({
  icon: Icon = PackageOpen,
  title = 'Nothing here yet',
  message = 'Looks like there are no items to display.',
  actionLabel,
  onAction,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center text-center py-20 px-6"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 15 }}
        className="w-20 h-20 rounded-3xl glass flex items-center justify-center mb-6"
      >
        <Icon size={36} className="text-white/40" />
      </motion.div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/50 max-w-sm mb-6">{message}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="primary">
          {actionLabel}
        </Button>
      )}
    </motion.div>
  )
}

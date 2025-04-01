'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCartIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface PurchaseButtonProps {
  price: string
  onClick?: () => void
}

export default function PurchaseButton({ price, onClick }: PurchaseButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative w-full overflow-hidden"
    >
      <motion.div
        className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold flex items-center justify-center space-x-3"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <ShoppingCartIcon className="h-5 w-5" />
        <span>Commander maintenant</span>
        <span className="font-bold">{price}</span>
        <motion.div
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <ChevronRightIcon className="h-5 w-5" />
        </motion.div>
      </motion.div>

      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg"
        initial={false}
        animate={{
          scale: isHovered ? 1.1 : 1,
          opacity: isHovered ? 0.8 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Shine effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-45deg]"
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            exit={{ x: '200%' }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  )
} 
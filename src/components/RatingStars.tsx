'use client'

import { motion } from 'framer-motion'
import { StarIcon as StarOutline } from '@heroicons/react/24/outline'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'

interface RatingStarsProps {
  rating: number
  maxRating?: number
  size?: 'sm' | 'md' | 'lg'
  showCount?: boolean
  count?: number
  className?: string
}

export default function RatingStars({
  rating,
  maxRating = 5,
  size = 'md',
  showCount = false,
  count,
  className = '',
}: RatingStarsProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  }

  const starSize = sizeClasses[size]

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex">
        {[...Array(maxRating)].map((_, index) => {
          const isFilled = index < Math.floor(rating)
          const isPartiallyFilled = index === Math.floor(rating) && rating % 1 !== 0
          
          return (
            <motion.div
              key={index}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              className="relative"
            >
              {isFilled ? (
                <StarSolid
                  className={`${starSize} text-yellow-400`}
                  aria-hidden="true"
                />
              ) : isPartiallyFilled ? (
                <div className="relative">
                  <StarOutline
                    className={`${starSize} text-yellow-400`}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${(rating % 1) * 100}%` }}
                  >
                    <StarSolid
                      className={`${starSize} text-yellow-400`}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ) : (
                <StarOutline
                  className={`${starSize} text-gray-400`}
                  aria-hidden="true"
                />
              )}
            </motion.div>
          )
        })}
      </div>
      {showCount && count !== undefined && (
        <span className="ml-2 text-sm text-gray-400">({count})</span>
      )}
    </div>
  )
} 
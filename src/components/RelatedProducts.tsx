'use client'

import { motion } from 'framer-motion'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import RatingStars from '@/components/RatingStars'

const relatedProducts = [
  {
    id: 1,
    name: 'Pack Pro Entreprise',
    description: 'Solution complète pour flottes et entreprises',
    price: '2,499€',
    rating: 4.9,
    reviews: 45,
    image: '/products/pack-pro/main.jpg',
    href: '/products/professional',
  },
  {
    id: 2,
    name: 'Borne Murale Basic',
    description: 'Solution économique pour particuliers',
    price: '899€',
    rating: 4.7,
    reviews: 89,
    image: '/products/basic/main.jpg',
    href: '/products/basic',
  },
  {
    id: 3,
    name: 'Câble Type 2 Premium',
    description: 'Câble renforcé haute qualité',
    price: '199€',
    rating: 4.8,
    reviews: 156,
    image: '/products/cable/main.jpg',
    href: '/products/cable',
  },
]

export default function RelatedProducts() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Produits similaires</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedProducts.map((product, index) => (
          <motion.a
            key={product.id}
            href={product.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="group bg-gray-800 rounded-lg overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-900">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <RatingStars
                    rating={product.rating}
                    showCount={true}
                    count={product.reviews}
                    size="sm"
                  />
                  <div className="text-blue-500 font-bold">{product.price}</div>
                </div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="text-blue-400"
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </motion.div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
} 
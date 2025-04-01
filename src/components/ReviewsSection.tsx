'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RatingStars from '@/components/RatingStars'
import { UserCircleIcon } from '@heroicons/react/24/solid'

const reviews = [
  {
    id: 1,
    author: 'Jean Dupont',
    rating: 5,
    date: '2024-03-15',
    title: 'Excellent produit, installation facile',
    content:
      'Installation très simple grâce au guide fourni. La borne fonctionne parfaitement et l\'application est vraiment intuitive. Le service client a été très réactif pour répondre à mes questions.',
    verified: true,
  },
  {
    id: 2,
    author: 'Marie Martin',
    rating: 4.5,
    date: '2024-03-10',
    title: 'Très satisfaite de mon achat',
    content:
      'La borne répond parfaitement à mes besoins. La fonction de programmation des heures creuses permet de réelles économies. Seul petit bémol : l\'application pourrait avoir plus d\'options de personnalisation.',
    verified: true,
  },
  {
    id: 3,
    author: 'Pierre Durand',
    rating: 5,
    date: '2024-03-05',
    title: 'Un investissement qui vaut le coup',
    content:
      'Après 3 mois d\'utilisation, je suis pleinement satisfait. La qualité de fabrication est au rendez-vous et les mises à jour régulières apportent de nouvelles fonctionnalités intéressantes.',
    verified: true,
  },
]

export default function ReviewsSection() {
  const [showAllReviews, setShowAllReviews] = useState(false)
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 2)

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  return (
    <div className="space-y-8">
      {/* Rating summary */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold mb-2">{averageRating.toFixed(1)}</div>
            <RatingStars rating={averageRating} size="lg" />
            <div className="text-sm text-gray-400 mt-2">
              Basé sur {reviews.length} avis
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Donner mon avis
          </motion.button>
        </div>
      </div>

      {/* Reviews list */}
      <div className="space-y-6">
        <AnimatePresence>
          {displayedReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <UserCircleIcon className="h-12 w-12 text-gray-400" />
                  <div>
                    <div className="font-semibold flex items-center">
                      {review.author}
                      {review.verified && (
                        <span className="ml-2 text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                          Achat vérifié
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-400">
                      {new Date(review.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </div>
                </div>
                <RatingStars rating={review.rating} size="sm" />
              </div>
              <h3 className="font-semibold mt-4 mb-2">{review.title}</h3>
              <p className="text-gray-400">{review.content}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show more button */}
      {reviews.length > 2 && (
        <div className="text-center">
          <motion.button
            onClick={() => setShowAllReviews(!showAllReviews)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
          >
            {showAllReviews ? 'Voir moins d\'avis' : 'Voir plus d\'avis'}
          </motion.button>
        </div>
      )}
    </div>
  )
} 
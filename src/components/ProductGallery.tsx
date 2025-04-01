'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProductGalleryProps {
  images: {
    id: number
    src: string
    alt: string
  }[]
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Thumbnails */}
      <div className="md:col-span-2 flex md:flex-col gap-4 order-2 md:order-1">
        {images.map((image) => (
          <motion.button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 ${
              selectedImage.id === image.id
                ? 'border-blue-500'
                : 'border-transparent'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>

      {/* Main image */}
      <div className="md:col-span-10 order-1 md:order-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-video rounded-xl overflow-hidden bg-gray-800"
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
              initial={false}
            >
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
} 
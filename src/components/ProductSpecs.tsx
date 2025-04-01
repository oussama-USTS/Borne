'use client'

import { motion } from 'framer-motion'

interface SpecCategory {
  name: string
  items: {
    label: string
    value: string
  }[]
}

interface ProductSpecsProps {
  specs: SpecCategory[]
}

export default function ProductSpecs({ specs }: ProductSpecsProps) {
  return (
    <div className="space-y-12">
      {specs.map((category, categoryIndex) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.1 }}
        >
          <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.items.map((item, itemIndex) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                className="bg-gray-800 rounded-lg p-4"
              >
                <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                <div className="font-medium">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
} 
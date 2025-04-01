'use client'

import { motion } from 'framer-motion'
import {
  BoltIcon,
  ChartBarIcon,
  CogIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  WifiIcon,
} from '@heroicons/react/24/outline'

const iconMap = {
  performance: BoltIcon,
  connectivity: WifiIcon,
  security: ShieldCheckIcon,
  monitoring: ChartBarIcon,
  mobile: DevicePhoneMobileIcon,
  configuration: CogIcon,
}

interface Feature {
  name: string
  description: string
  icon: keyof typeof iconMap
}

interface ProductFeaturesProps {
  features: Feature[]
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => {
        const Icon = iconMap[feature.icon]
        return (
          <motion.div
            key={feature.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center"
                >
                  <Icon className="h-6 w-6 text-blue-400" />
                </motion.div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
} 
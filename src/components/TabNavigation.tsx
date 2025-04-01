'use client'

import { motion } from 'framer-motion'

interface Tab {
  id: string
  label: string
}

interface TabNavigationProps {
  tabs: Tab[]
  activeTab: string
  onChange: (tabId: string) => void
}

export default function TabNavigation({
  tabs,
  activeTab,
  onChange,
}: TabNavigationProps) {
  return (
    <div className="border-b border-gray-700">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab
          
          return (
            <motion.button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`
                relative py-4 px-1 text-sm font-medium
                ${
                  isActive
                    ? 'text-blue-500'
                    : 'text-gray-400 hover:text-gray-300'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          )
        })}
      </nav>
    </div>
  )
} 
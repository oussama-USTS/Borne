'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  BoltIcon,
  ChartBarIcon,
  ClockIcon,
  ShieldCheckIcon,
  Battery100Icon,
  WrenchIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'
import ReviewsSection from '@/components/ReviewsSection'
import RelatedProducts from '@/components/RelatedProducts'
import ProductGallery from '@/components/ProductGallery'
import ProductFeatures from '@/components/ProductFeatures'
import ProductSpecs from '@/components/ProductSpecs'
import PurchaseButton from '@/components/PurchaseButton'
import RatingStars from '@/components/RatingStars'
import TabNavigation from '@/components/TabNavigation'

const products = {
  'smart-home': {
    name: 'Smart Home',
    description: 'Solution de recharge intelligente pour votre maison',
    price: '1,499€',
    rating: 4.8,
    reviews: 128,
    features: [
      {
        name: 'Recharge Intelligente',
        description: 'Optimisation automatique des temps de charge en fonction de vos habitudes',
        icon: 'performance',
      },
      {
        name: 'Connectivité Wi-Fi',
        description: 'Contrôle à distance via l\'application mobile dédiée',
        icon: 'connectivity',
      },
      {
        name: 'Sécurité Avancée',
        description: 'Protection contre les surtensions et authentification sécurisée',
        icon: 'security',
      },
      {
        name: 'Suivi en Temps Réel',
        description: 'Monitoring de la consommation et des sessions de charge',
        icon: 'monitoring',
      },
      {
        name: 'Application Mobile',
        description: 'Interface intuitive pour gérer vos sessions de charge',
        icon: 'mobile',
      },
      {
        name: 'Configuration Flexible',
        description: 'Paramètres personnalisables selon vos besoins',
        icon: 'configuration',
      },
    ],
    images: [
      {
        id: 1,
        src: '/products/smart-home/main.jpg',
        alt: 'Vue principale de la borne Smart Home',
      },
      {
        id: 2,
        src: '/products/smart-home/detail-1.jpg',
        alt: 'Interface utilisateur intuitive',
      },
      {
        id: 3,
        src: '/products/smart-home/detail-2.jpg',
        alt: 'Installation murale facile',
      },
      {
        id: 4,
        src: '/products/smart-home/detail-3.jpg',
        alt: 'Application mobile connectée',
      },
    ],
    specs: [
      {
        name: 'Caractéristiques Électriques',
        items: [
          { label: 'Puissance de charge', value: '22 kW' },
          { label: 'Tension d\'entrée', value: '400V AC triphasé' },
          { label: 'Courant maximal', value: '32A par phase' },
          { label: 'Protection', value: 'Différentiel Type B' },
        ],
      },
      {
        name: 'Connectivité',
        items: [
          { label: 'Wi-Fi', value: '802.11 b/g/n (2.4 GHz)' },
          { label: 'Bluetooth', value: '5.0 BLE' },
          { label: 'Protocoles', value: 'OCPP 1.6J, MQTT' },
          { label: 'Sécurité', value: 'WPA2, TLS 1.3' },
        ],
      },
      {
        name: 'Caractéristiques Physiques',
        items: [
          { label: 'Dimensions', value: '40 x 25 x 15 cm' },
          { label: 'Poids', value: '5.2 kg' },
          { label: 'Indice IP', value: 'IP54' },
          { label: 'Température d\'utilisation', value: '-25°C à +50°C' },
        ],
      },
    ],
  },
  // Autres produits...
}

const chargingData = {
  'guide-recharge': {
    name: 'Guide de Recharge',
    description: 'Comprendre les différents aspects de la recharge de véhicules électriques',
    sections: [
      {
        title: 'Types de Recharge',
        content: [
          {
            name: 'Recharge AC',
            power: '7 - 22 kW',
            duration: '4-8 heures',
            usage: 'Domicile, Travail, Centre Commercial',
            details: 'Solution idéale pour la recharge quotidienne, avec une puissance modulable selon vos besoins'
          }
        ]
      },
      {
        title: 'Courbes de Recharge',
        graphs: [
          {
            type: 'AC',
            title: 'Recharge AC Intelligente (7-22kW)',
            description: 'Courbe optimisée pour une recharge efficace et sûre de votre véhicule',
            points: [
              { time: '0h', percentage: '0%', power: '22.0 kW', temp: '25°C' },
              { time: '1h', percentage: '20%', power: '22.0 kW', temp: '26°C' },
              { time: '2h', percentage: '40%', power: '20.0 kW', temp: '27°C' },
              { time: '3h', percentage: '55%', power: '17.5 kW', temp: '28°C' },
              { time: '4h', percentage: '70%', power: '15.0 kW', temp: '28°C' },
              { time: '5h', percentage: '82%', power: '12.0 kW', temp: '27°C' },
              { time: '6h', percentage: '92%', power: '9.0 kW', temp: '26°C' },
              { time: '7h', percentage: '98%', power: '7.0 kW', temp: '25°C' },
              { time: '8h', percentage: '100%', power: '0.0 kW', temp: '25°C' }
            ]
          }
        ]
      }
    ],
    specifications: [
      {
        category: 'Puissances de Charge',
        items: [
          { label: 'Puissance Minimale', value: '7 kW' },
          { label: 'Puissance Maximale', value: '22 kW' },
          { label: 'Modulation', value: 'Automatique' }
        ]
      },
      {
        category: 'Temps de Recharge Estimés',
        items: [
          { label: 'Batterie 40 kWh', value: '~4 heures' },
          { label: 'Batterie 60 kWh', value: '~6 heures' },
          { label: 'Batterie 80 kWh', value: '~8 heures' }
        ]
      },
      {
        category: 'Facteurs Influençant la Recharge',
        items: [
          { label: 'Température Optimale', value: '15-25°C' },
          { label: 'État de la Batterie', value: 'SoH > 80%' },
          { label: 'Plage de Charge', value: '20-80% optimal' }
        ]
      }
    ]
  }
}

const tabs = [
  { id: 'types', label: 'Types de Recharge' },
  { id: 'courbes', label: 'Courbes de Charge' },
  { id: 'specifications', label: 'Spécifications' }
]

const ProductPage = ({ params }: { params: { slug: string } }) => {
  const [activeTab, setActiveTab] = useState('types')
  const product = products[params.slug as keyof typeof products]
  const data = chargingData['guide-recharge']

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Illustration */}
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 border border-gray-700 rounded-lg">
                <BoltIcon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Puissance</h3>
                <p className="text-gray-400">22 kW max</p>
              </div>
              <div className="text-center p-4 border border-gray-700 rounded-lg">
                <ChartBarIcon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Tension</h3>
                <p className="text-gray-400">400V AC</p>
              </div>
              <div className="text-center p-4 border border-gray-700 rounded-lg">
                <ShieldCheckIcon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Protection</h3>
                <p className="text-gray-400">Type B</p>
              </div>
              <div className="text-center p-4 border border-gray-700 rounded-lg">
                <Battery100Icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Courant</h3>
                <p className="text-gray-400">32A/phase</p>
              </div>
            </div>
            <div className="mt-8 p-4 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">Dimensions Techniques</h3>
              <div className="flex justify-around text-center">
                <div>
                  <p className="text-gray-400">Hauteur</p>
                  <p className="text-lg">40 cm</p>
                </div>
                <div>
                  <p className="text-gray-400">Largeur</p>
                  <p className="text-lg">25 cm</p>
                </div>
                <div>
                  <p className="text-gray-400">Profondeur</p>
                  <p className="text-lg">15 cm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-400 mb-6">{product.description}</p>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Caractéristiques Techniques</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <BoltIcon className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Puissance de charge jusqu'à 22 kW</span>
                </li>
                <li className="flex items-center">
                  <ChartBarIcon className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Compatible AC et DC</span>
                </li>
                <li className="flex items-center">
                  <ShieldCheckIcon className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Protection électrique intégrée</span>
                </li>
                <li className="flex items-center">
                  <WrenchIcon className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Installation murale ou sur pied</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
        
        <div className="mt-8">
          {activeTab === 'types' && data?.sections && data.sections.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="prose prose-invert max-w-none"
            >
              <h2 className="text-2xl font-bold mb-6">Types de Recharge</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {data?.sections?.[0]?.content?.map((type) => (
                  <div key={type.name} className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">{type.name}</h3>
                    <div className="space-y-2">
                      <p><span className="text-blue-400">Puissance:</span> {type.power}</p>
                      <p><span className="text-blue-400">Durée:</span> {type.duration}</p>
                      <p><span className="text-blue-400">Usage:</span> {type.usage}</p>
                      <p className="text-gray-400">{type.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'courbes' && data?.sections && data.sections.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="prose prose-invert max-w-none"
            >
              <h2 className="text-2xl font-bold mb-6">Courbes de Recharge</h2>
              <div className="space-y-12">
                {data?.sections?.[1]?.graphs?.map((graph, graphIndex) => (
                  <div key={graph.type} className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">{graph.title}</h3>
                    <p className="text-gray-400 mb-6">{graph.description}</p>
                    <div className="relative h-80">
                      {/* Grille de fond */}
                      <div className="absolute inset-0 grid grid-cols-8 gap-0.5">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <div key={i} className="border-t border-gray-700" style={{ top: `${(8-i) * 12.5}%` }} />
                        ))}
                      </div>
                      
                      {/* Courbe de puissance */}
                      <div className="absolute inset-0">
                        <svg className="w-full h-full" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id={`gradient-${graphIndex}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path
                            d={`M 0,${100 - parseInt(graph.points[0].percentage)} ${graph.points.map((point, i) => 
                              `L ${(i / (graph.points.length - 1)) * 100},${100 - parseInt(point.percentage)}`
                            ).join(' ')}`}
                            fill="url(#gradient-${graphIndex})"
                            stroke="#3B82F6"
                            strokeWidth="2"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </div>

                      {/* Points de données */}
                      <div className="absolute inset-0 flex">
                        {graph.points.map((point, i) => (
                          <div key={i} className="flex-1 relative group">
                            <div 
                              className="absolute bottom-0 w-2 h-2 bg-blue-500 rounded-full left-1/2 transform -translate-x-1/2"
                              style={{ bottom: `${parseInt(point.percentage)}%` }}
                            >
                              {/* Tooltip */}
                              <div className="opacity-0 group-hover:opacity-100 absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded p-2 w-32">
                                <div className="text-center">
                                  <div>SoC: {point.percentage}</div>
                                  <div>Puissance: {point.power}</div>
                                  <div>Temp: {point.temp}</div>
                                  <div>Temps: {point.time}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Axes et labels */}
                      <div className="absolute inset-x-0 bottom-0 flex justify-between text-sm text-gray-400 mt-2">
                        {graph.points.map((point, i) => (
                          <div key={i} className="text-center">
                            <div className="transform -rotate-45 origin-top-left ml-4">{point.time}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'specifications' && data?.specifications && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-2xl font-bold mb-6">Spécifications Techniques</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.specifications.map((spec) => (
                  <div key={spec.category} className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">{spec.category}</h3>
                    <div className="space-y-3">
                      {spec.items.map((item) => (
                        <div key={item.label} className="border-b border-gray-700 pb-2">
                          <p className="text-sm text-gray-400">{item.label}</p>
                          <p className="text-lg">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Spécifications Techniques</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Caractéristiques techniques détaillées pour une compréhension approfondie
            des capacités de recharge.
          </p>
        </div>
        <ProductSpecs specs={product.specs} />
      </div>
    </div>
  )
}

export default ProductPage 
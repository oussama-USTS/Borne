'use client'

import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Overview from '../components/Overview'
import NewProducts from '../components/NewProducts'
import ProductHighlights from '../components/ProductHighlights'
import TechnicalSpecs from '../components/TechnicalSpecs'
import Features from '../components/Features'
import Accessories from '../components/Accessories'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Overview />
      <NewProducts />
      <Accessories />
      <ProductHighlights />
      <TechnicalSpecs />
      <Features />
    </main>
  )
} 
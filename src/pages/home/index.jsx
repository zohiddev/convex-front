import React from 'react'
import Banner from './components/Banner'
import Features from './components/Features'
import ProductsSection from '../../components/ProductsSection'

function Home() {
  return (
    <div className='page home-page'>
      <Banner />
      <Features />
      <ProductsSection />
      <ProductsSection />
      <ProductsSection />
    </div>
  )
}

export default Home

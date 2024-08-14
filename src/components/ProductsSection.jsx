import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

function ProductsSection() {
    const [title, setTitle] = useState('Акции')

    return (
        <section className='ProductsSection'>
            <div className="container">
                <div className="ProductsSection-row">
                    <div className="ProductsSection-top">
                        <h1>{title}</h1>
                        <Link to='/product' className='ProductsSection-top-link'>Cмотреть все</Link>
                    </div>
                    <div className="ProductsSection-cards">
                        <ProductCard />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsSection
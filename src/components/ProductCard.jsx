import React from 'react'
import { cardinfos } from '../constants/router'

function ProductCard() {
  return (
    <>
      {
        cardinfos.map(info => (
          <div className='productcard' key={info.id}>
            <div className="productcard__image">
              <img src={info.image} alt="" />
            </div>

            <div className="productcard__content">
              <h4 className="productcard__content-title">{info.title}</h4>
              <span className="productcard__content-count">{info.count}</span>
              <span className="productcard__content-weight">{info.weight}</span>
            </div>

            <div className="productcard__shop">
              <div className="productcard__shop-prices">
                <span className="productcard__shop-prices-old">{info.oldprice}</span>
                <span className="productcard__shop-prices-new">{info.newprice}</span>
              </div>
              <div className="productcard__shop-btn">
                <button className='productcard__shop-btn__btn'>В корзину</button>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default ProductCard

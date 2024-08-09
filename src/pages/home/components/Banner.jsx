import React from 'react'

function Banner() {
  return (
    <section className='banner'>
      <div className='container'>
        <div className='banner-row'>
          <div className='banner-left'>
            <h1 className='banner-left-title'>
              Всегда свежие <br /> молочные продукты
            </h1>
            <p className='banner-left-subtitle'>
              Только качественные товары, за <br /> которыми мы всегда следим
            </p>
            <button className='banner-left-btn'>Подробнее</button>
          </div>
          <div className='banner-right'>
            <img src='/images/banner-bg.png' alt='banner-bg image' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner

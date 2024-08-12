import React from 'react'
import { Cart, Location, Search } from '../../assets/icons'
import { Link } from 'react-router-dom'
import { links } from '../../constants/router'


function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-row'>
          <div className='header-top'>
            <Link to='/'>
            <div className='header-logo'>
              <img src='/images/logo.png' alt='convex logo' />
            </div>
            </Link>
            <div className='header-call'>
              <span className='header-call__hot'>Бесплатный звонок</span>
              <a href='tel:8 800 080 5011' className='header-call__num'>8 800 080 5011</a>
            </div>
            <div className='header-search'>
              <Search />
              <input
                type='text'
                className='header-search-input'
                placeholder='Поиск товаров'
              />
            </div>
            <div className='header-location'>
              <p className='header-location-green'>
                <Location />
                <span>ЕЦ-166/4</span>
              </p>
              <p className='header-location-name'>Нур-Султан</p>
            </div>
            <button className='header-btn-login'>Войти</button>
          </div>
          <div className='header-bottom'>
            <div className='header-selectors'>
              {
                links.map(item => (
                  <Link to={item.path} key={item.id} className='header-selector'>
                    {item.title}
                  </Link>
                ))
              }
            </div>
            <div className='header-card-btn'>
              <Cart />
              <div className='header-card-btn-texts'>
                <span className='header-card-btn-title'>Корзина</span>
                <span className='header-card-btn-subtitle'>2 400 г.</span>
              </div>
              <button className='header-card-btn-counter'>
                <span className='header-card-btn-counter-text'>12</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

import React from 'react'

function CategoryPage() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
  <section className='search'>
  <div className="container">
      <div className="search-row">
        <div className="search-links">
          <a href="#" className="link">Главная /</a>
          <a href="#" className="link"> Еда /</a>
          <a href="#" className="link">Консервы</a>
        </div>
        <div className="search-title">
          <h1>Консервы</h1>
        </div>
        <div className="search-subtitle_first">
          <h3>Стоимость в тенге</h3>
          <div className="search-subtitle_first__input">
            <p>от</p>
            <input type="number" placeholder='0 тг'/>
            <p>до</p>
            <input type="number" placeholder='0 тг'/>
          </div>
          <div className="search-subtitle_second">Вес (грамм)
          <div className="search-subtitle_second__input">
            <p>от</p>
            <input type="number" placeholder='0 гр'/>
            <p>до</p>
            <input type="number" placeholder='0 гр'/>
          </div>
          </div>
          .
        </div>
      </div>
  </div>
</section>
)}

export default CategoryPage

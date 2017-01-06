import React from 'react'

import Icon from './icon'

export default ({ closeMenu }) => (
  <div className='menu'>
    <h1 className='menu__title'>горчичка</h1>
    <p>
      мы выбрали для вас только самые важные цитаты
    </p>
    <p>
      дизайнил даня, кодил саша
    </p>
    <p>
      тут еще какая-то важная информация
    </p>
    <div className='links'>
      <a className='links__item' href='' onClick={closeMenu}>
        <Icon name='close' />
      </a>
    </div>
    <style jsx>{`
      .menu {
        font-family: 'Playfair Display', serif;
        line-height: 1.5;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: black;
        font-size: 1.5rem;
        padding: 2rem;
        color: #dcdcdc;
      }

      .menu__title {
        font-family: sans-serif;
        font-size: 2rem;
        margin: 0;
      }

      .menu__list {
        margin: 0;
        padding: 0;
        list-style: none;
      }
    `}</style>
  </div>
)

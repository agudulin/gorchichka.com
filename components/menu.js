import React from 'react'

import savePicture from '../lib/savePicture'
import preventDefault from '../lib/preventDefault'
import { Links, LinksItem } from './links'
import Icon from './icon'

export default ({ closeMenu }) => (
  <div className='menu'>
    <h1 className='menu__title'>горчичка</h1>
    <p>мы выбрали для вас только самые важные цитаты</p>
    <p>
      дизайнил <a className='menu__link' href='https://vk.com/dan.chaptykov' target='_blank'>даня</a>,
      кодил <a className='menu__link' href='https://vk.com/agudulin' target='_blank'>саша</a>
    </p>
    <div className='menu__separator' />
    <p>
      <button className='menu__btn' onClick={preventDefault(savePicture)}>сохранить цитату</button>
    </p>
    <Links>
      <LinksItem onClick={closeMenu}><Icon name='close' /></LinksItem>
    </Links>

    <style jsx>{`
      .menu {
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

      .menu__separator {
        border-bottom: 1px solid #333;
        width: 3rem;
        margin: 0 auto;
      }

      .menu__title {
        font-size: 2rem;
        margin: 0;
      }

      .menu__link {
        color: inherit;
        text-decoration: none;
      }

      .menu__list {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .menu__btn {
        display: block;
        width: 100%;
        max-width: 20rem;
        background: transparent;
        color: #dcdcdc;
        font-size: 1rem;
        padding: 1rem;
        border-radius: .3rem;
        outline: none;
        cursor: pointer;
        text-transform: uppercase;
        margin: 2rem auto 0;
      }
    `}</style>
  </div>
)

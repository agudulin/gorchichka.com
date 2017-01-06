import React from 'react'
import Link from 'next/prefetch'

import Icon from './icon'

export default ({ nextQuoteUrl, openMenu }) => (
  <div className='links'>
    <a className='links__item' href='#' onClick={openMenu}>
      <Icon name='hamburger' />
    </a>
    <Link href={nextQuoteUrl}>
      <a className='links__item'><Icon name='refresh' /></a>
    </Link>
    <style jsx>{`
      .links {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 5rem;
        background-color: #dcdcdc;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
      }

      .links__item {
        padding: 1rem 2rem;
        font-size: 2.5rem;
        text-decoration: none;
        color: black;
        display: flex;
        align-items: center;
        color: darkgoldenrod;
        transition: color .1s ease;
      }
      .links__item:hover {
        color: goldenrod;
      }
    `}</style>
  </div>
)

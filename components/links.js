import React from 'react'
import Link from 'next/prefetch'

import Icon from './icon'
import { colors } from '../stylesheets'

const style = `
  .links {
    position: absolute;
    bottom: 0;
    height: 4rem;
    background-color: ${colors.grey};
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  .links__item {
    padding: 1rem 2rem;
    font-size: 2rem;
    text-decoration: none;
    color: ${colors.black};
    display: flex;
    align-items: center;
  }
  .links__item:hover {
    color: ${colors.gold};
  }
`

export default ({ nextQuoteUrl }) => (
  <div className='links'>
    <a className='links__item' href='#'><Icon name='hamburger' /></a>
    <Link href={nextQuoteUrl}>
      <a className='links__item'><Icon name='refresh' /></a>
    </Link>
    <style>{ style }</style>
  </div>
)

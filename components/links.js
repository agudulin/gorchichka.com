import React from 'react'
import Link from 'next/prefetch'

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
    padding: 1rem;
    font-size: 1.5rem;
    text-decoration: none;
    color: ${colors.black};
  }
`

export default ({ nextQuoteUrl }) => (
  <div className='links'>
    <div className='links__item'>menu</div>
    <Link href={nextQuoteUrl}>
      <a className='links__item'>еще</a>
    </Link>
    <style>{ style }</style>
  </div>
)

import React from 'react'
import Link from 'next/link'

import { colors } from '../style'

export const Links = ({ children }) => (
  <div className='links'>
    {children}
    <style jsx>{`
      .links {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 5rem;
        background-color: ${colors.grey};
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
      }
    `}
    </style>
  </div>
)

export const LinksItem = ({ children, prefetch, ...props }) => prefetch ? (
  <Link href={props.href} prefetch>
    <a className='links__item' {...props}>
      {children}
      <style jsx>{`
        .links__item {
          padding: 1rem 2rem;
          font-size: 2.5rem;
          text-decoration: none;
          color: black;
          display: flex;
          align-items: center;
          color: ${colors.darkGold};
          transition: color .1s ease;
        }
        .links__item:hover {
          color: ${colors.gold};
          cursor: pointer;
        }
      `}
      </style>
    </a>
  </Link>
) : (
  <a className='links__item' {...props}>
    {children}
    <style jsx>{`
      .links__item {
        padding: 1rem 2rem;
        font-size: 2.5rem;
        text-decoration: none;
        color: ${colors.black};
        display: flex;
        align-items: center;
        color: ${colors.darkGold};
        transition: color .1s ease;
      }
      .links__item:hover {
        color: ${colors.gold};
        cursor: pointer;
      }
    `}
    </style>
  </a>
)

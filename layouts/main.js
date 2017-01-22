import React from 'react'
import Head from 'next/head'
import { colors, font } from '../style'

export default ({ children, title }) => (
  <div className='root'>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta content='initial-scale=1.0, width=device-width' name='viewport' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black' />
      <link href='https://fonts.googleapis.com/css?family=Playfair+Display:400,700&subset=cyrillic' rel='stylesheet' />
    </Head>

    { children }

    <style jsx>{`
      .root {
        height: 100%;
        width: 100%;
        position: absolute;
      }
    `}</style>
    <style jsx global>{`
      @font-face {
        font-family: '${font.family.icon}';
        src:
          url('/static/fonts/icomoon.ttf?i1h4ks') format('truetype'),
          url('/static/fonts/icomoon.woff?i1h4ks') format('woff'),
          url('/static/fonts/icomoon.svg?i1h4ks#icomoon') format('svg');
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: '${font.family.gilroy}';
        src:
          url('/static/fonts/gilroy-light.woff2') format('woff2'),
          url('/static/fonts/gilroy-light.woff') format('woff'),
          url('/static/fonts/gilroy-light.ttf') format('truetype');
      }
      @font-face {
        font-family: '${font.family.gilroyBold}';
        src:
          url('/static/fonts/gilroy-bold.woff2') format('woff2'),
          url('/static/fonts/gilroy-bold.woff') format('woff'),
          url('/static/fonts/gilroy-bold.ttf') format('truetype');
      }

      :root {
        box-sizing: border-box;
        height: 100%;
        font-size: ${font.size.base};
      }
      *, *:before, *:after {
        box-sizing: inherit;
      }
      :root, body {
        height: 100%;
        margin: 0;
      }
      body {
        background-color: ${colors.black};
        font-family: ${font.family.base};
      }
    `}</style>
  </div>
)

import React from 'react'

import { font, icons } from '../style'

export default ({ name }) => (
  <span className={`icon icon--${name}`}>
    <style jsx global>{`
      .icon {
        display: inline-flex;
      }

      .icon:before {
        font-family: '${font.family.icon}';
        font-family: '${font.family.icon}' !important;
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .icon--close:before {
        content: '${icons.close}';
      }

      .icon--refresh:before {
        content: '${icons.refresh}';
      }

      .icon--hamburger:before {
        content: '${icons.hamburger}';
      }
    `}</style>
  </span>
)

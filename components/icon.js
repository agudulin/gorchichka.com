import React from 'react'

export default ({ name }) => (
  <span className={`icon icon--${name}`}>
    <style jsx>{`
      .icon {
        display: inline-flex;
      }

      .icon:before {
        font-family: 'icomoon';
        font-family: 'icomoon' !important;
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
        content: '\f00d';
      }

      .icon--refresh:before {
        content: '\f021';
      }

      .icon--hamburger:before {
        content: '\f0c9';
      }
    `}</style>
  </span>
)

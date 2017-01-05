import colors from './colors'

export default `
  :root {
    box-sizing: border-box;
    height: 100%;
    font-size: 16px;
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
  }
`

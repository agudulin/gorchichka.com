import { saveAs } from 'file-saver'

import canvasToBlob from '../lib/canvasToBlob'

export default ({ filename = 'quote.png' }) => {
  const html2canvas = require('html2canvas')

  return html2canvas(document.querySelector('.content'), { backgroundColor: 'black' }).then(canvas =>
    canvasToBlob(canvas)(blob => saveAs(blob, filename))
  )
}

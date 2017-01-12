import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'

import canvasToBlob from '../lib/canvasToBlob'

export default ({ filename = 'quote.png' }) => (
  html2canvas(document.querySelector('.content'), { background: 'black' }).then(canvas =>
    canvasToBlob(canvas)(blob => saveAs(blob, filename))
  )
)


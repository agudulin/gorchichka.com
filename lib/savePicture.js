import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'

export default ({ filename = 'quote.png' }) => {
  require('canvas-to-blob').init()

  html2canvas(document.querySelector('.content'), { background: 'black' }).then(canvas => {
    canvas.toBlob(blob => {
      saveAs(blob, filename)
    })
  })
}


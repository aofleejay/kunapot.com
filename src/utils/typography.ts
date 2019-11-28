import Typography from 'typography'

const systemFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen-Sans',
  'Ubuntu',
  'Cantarell',
  'Helvetica Neue',
  'Helvetica',
  'Arial',
  'sans-serif',
]

const typography = new Typography({
  headerFontFamily: systemFontStack,
  bodyFontFamily: systemFontStack,
})

export default typography
export const rhythm = typography.rhythm

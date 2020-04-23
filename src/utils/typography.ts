import Typography from 'typography'

const systemFontStack = [
  'Sarabun',
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
  baseFontSize: '16px',
  baseLineHeight: 1.8,
  googleFonts: [
    {
      name: 'Sarabun',
      styles: ['100', '200', '300', '400', '500', '600', '700', '800'],
    },
  ],
  includeNormalize: true,
  overrideStyles: () => ({
    a: {
      color: 'var(--textNormal)',
      textDecoration: 'none',
    },
  }),
})

export default typography

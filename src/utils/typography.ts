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
  headerColor: 'var(--textTitle)',
  bodyWeight: 300,
  baseFontSize: '18px',
  baseLineHeight: 1.666,
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
    p: {
      letterSpacing: '0.2px',
    },
  }),
})

export default typography

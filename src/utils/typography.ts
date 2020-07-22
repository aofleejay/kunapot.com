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
  headerColor: 'var(--textPrimary)',
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Sarabun',
      styles: ['100', '200', '300', '400', '500', '600', '700', '800'],
    },
  ],
  includeNormalize: true,
  overrideStyles: ({ rhythm }) => ({
    a: {
      color: 'var(--textSecondary)',
      textDecoration: 'none',
    },
    p: {
      letterSpacing: '0.2px',
    },
    blockquote: {
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(3 / 16)} solid var(--textSecondary)`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    hr: {
      backgroundColor: 'var(--hr)',
    },
    img: {
      borderRadius: '4px',
    },
  }),
})

export default typography

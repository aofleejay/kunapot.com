/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        muted: 'var(--muted)',
        faded: 'var(--faded)',
        line: 'var(--line)',
        nav: 'var(--nav)',
        ascending: 'var(--ascending)',
      },
      fontFamily: {
        // Google Sans covers Latin; Thai glyphs fall through to the looped (มีหัว) face
        sans: [
          'Google Sans',
          'IBM Plex Sans Thai Looped',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            // Thai stacked vowels/tone marks need taller lines than Latin text
            fontSize: '1.125rem',
            lineHeight: '1.9',
            color: 'var(--secondary)',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            strong: {
              color: 'var(--primary)',
              fontWeight: '600',
            },
            em: {
              color: 'var(--primary)',
            },
            blockquote: {
              color: 'var(--primary)',
              fontWeight: '400',
              borderInlineStartColor: 'var(--ascending)',
            },
            a: {
              color: 'var(--ascending)',
              fontWeight: '400',
            },
            hr: {
              borderColor: 'var(--line)',
            },
            'ul > li::marker': {
              color: 'var(--muted)',
            },
            'ol > li::marker': {
              color: 'var(--muted)',
            },
            figcaption: {
              color: 'var(--muted)',
            },
            h1: {
              color: 'var(--primary)',
              fontWeight: '600',
            },
            h2: {
              color: 'var(--primary)',
              fontWeight: '600',
              lineHeight: '1.4',
              marginTop: '2.25em',
            },
            h3: {
              color: 'var(--primary)',
              fontWeight: '600',
              lineHeight: '1.5',
            },
            h4: {
              color: 'var(--primary)',
              fontWeight: '600',
            },
            h5: {
              color: 'var(--primary)',
            },
            h6: {
              color: 'var(--primary)',
            },
            img: {
              borderRadius: '1rem',
            },
            // Inline code: theme-aware pill instead of the plugin's fixed dark text + backticks
            code: {
              color: 'var(--primary)',
              backgroundColor: 'var(--faded)',
              border: '1px solid var(--line)',
              borderRadius: '0.375rem',
              padding: '0.15em 0.4em',
              fontWeight: '400',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

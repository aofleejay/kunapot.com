/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        faded: 'var(--faded)',
        ascending: 'var(--ascending)',
      },
      fontFamily: {
        sans: [
          'Quicksand',
          'IBM Plex Sans Thai',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--secondary)',
            strong: {
              color: 'var(--primary)',
            },
            em: {
              color: 'var(--primary)',
            },
            blockquote: {
              color: 'var(--primary)',
            },
            a: {
              color: 'var(--ascending)',
            },
            h1: {
              color: 'var(--primary)',
            },
            h2: {
              color: 'var(--primary)',
            },
            h3: {
              color: 'var(--primary)',
            },
            h4: {
              color: 'var(--primary)',
            },
            h5: {
              color: 'var(--primary)',
            },
            h6: {
              color: 'var(--primary)',
            },
            img: {
              borderRadius: '0.25rem',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

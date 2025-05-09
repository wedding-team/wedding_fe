/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slideDown': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'scaleY(0)', opacity: 0 },
          '100%': { transform: 'scaleY(1)', opacity: 1 },
        }
      },
      colors: {
        primary: {
          100: '#eadcf8',
          200: '#dec1fb',
          300: '#d5b2f8',
          400: '#d1a6fb',
          500: '#cd9cfd',
          600: '#C68EFD',
          700: '#bd7dff',
          800: '#b368fd',
          900: '#ac5bfb'
        },
        secondary: {
          100: '#c3bfef',
          200: '#b9b4ef',
          300: '#b0aaf1',
          400: '#a6a0f1',
          500: '#9992f1',
          600: '#8F87F1',
          700: '#847bef',
          800: '#7a71ef',
          900: '#7066ed'
        }
      },
      fontFamily: {
        GreatVibes: ['GreatVibes', 'sans-serif'],
        Sigmar: ['Sigmar', 'monospace'],
        SigmarOne: ['SigmarOne', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'input:focus': { outline: 'none' },
        'textarea:focus': { outline: 'none' },
        'select:focus': { outline: 'none' },
        'button:focus': { outline: 'none' },
        'a:focus': { outline: 'none' },
        'label:focus': { outline: 'none' },
      });
    }
  ],
}
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0a0a',
          900: '#121212',
          850: '#181818',
          800: '#1c1c1c',
          700: '#242424',
          600: '#2c2c2c',
          500: '#3a3a3a',
        },
        brand: {
          red: '#ff4c4c',
          redLight: '#fc5c5c',
          redDark: '#8f2b2b',
          blue: '#241bd6',
          gold: '#ffc702',
        },
      },
      fontFamily: {
        display: ['"Orbitron"', 'sans-serif'],
        body: ['"Rajdhani"', '"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #fc5c5c 0%, #9e2f2f 100%)',
        'brand-gradient-br': 'linear-gradient(135deg, #fc5c5c 0%, #8f2b2b 100%)',
      },
      maxWidth: {
        container: '1500px',
      },
    },
  },
  plugins: [],
}

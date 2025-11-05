import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        peacock: '#0f4c81',
        gold: '#D4AF37',
      },
      backgroundImage: {
        'radha-krishna': "url('https://images.unsplash.com/photo-1589976897928-7818ccddb5a2?q=80&w=1887&auto=format&fit=crop')"
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-merriweather)'],
      },
    },
  },
  plugins: [],
}
export default config

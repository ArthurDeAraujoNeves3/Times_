import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        
        'gray-100-a': '#838288',
        'gray-200-a': '#343434',
        'gray-300-a': '#171717',
        'orange-100-a': '#FF5C00',
      },
      screens: {

        '2xl': {'max': '1535px'},
        'xl': {'max': '1279px'},
        'lg': {'max': '1024px'},
        'lgMin': {'min': '1024px'},
        'md': {'max': '800px'},
        'sm': {'max': '600px'},
      },
    },
  },
  plugins: [],
}
export default config

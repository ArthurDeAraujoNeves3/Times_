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
        
        'beige-100-a': '#FFF6E0',
        'beige-200-a': '#ECE3CE',
        'green-100-a': '#3A4D39',
        'green-200-a': '#4F6F52',
        'green-300-a': '#84A783',
        'green-400-a': '#F8FB77',
        'green-500-a': '#CCCE5E',
      },
      screens: {

        '2xl': {'max': '1535px'},
        'xl': {'max': '1279px'},
        'lg': {'max': '1024px'},
        'md': {'max': '800px'},
        'sm': {'max': '600px'},
      },
    },
  },
  plugins: [],
}
export default config

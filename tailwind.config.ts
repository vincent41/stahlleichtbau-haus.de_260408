import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F3F4F6',
        card: '#E4E5E7',
        border: '#C5C6C7',
        font: '#2C2C2C',
        muted: '#C5C6C7',
        accent: '#A6111B',
        'accent-hover': '#8B0E17',
        success: '#16A34A',
        error: '#DC2626'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config

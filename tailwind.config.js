/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary':    '#07071A',
        'bg-secondary':  '#0D1B4B',
        'blue-royal':    '#1A3A8F',
        'blue-electric': '#2E5FD9',
        'blue-light':    '#5B8CFF',
        'amber':         '#F5C842',
        'text-primary':  '#F5F0E8',
        'text-muted':    '#8A9CC4',
        'card-bg':       '#0D1B4B',
        'card-border':   '#1A3A8F',
      },
    },
  },
  plugins: [],
}

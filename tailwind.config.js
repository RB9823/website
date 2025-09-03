/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0B0F',
        surface: '#0F1117',
        'surface-alt': '#111318',
        'text-primary': '#F8F9FB',
        'text-muted': '#B5BDC9',
        brand: {
          DEFAULT: '#76D0FF',
          50: '#EDF9FF',
          100: '#D6F1FF',
          200: '#AFE4FF',
          300: '#87D6FF',
          400: '#60C8FF',
          500: '#38BAFF',
          600: '#1EA1E6',
          700: '#167CB3',
          800: '#0F5780',
          900: '#08304A',
        },
        stroke: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
        ],
      },
      fontSize: {
        'display': ['3.5rem', '1'],
        'display-lg': ['4rem', '1'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        'container': '1120px',
      },
      boxShadow: {
        'card': '0 8px 24px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      backdropBlur: {
        'glass': '20px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'drift-slow': 'driftSlow 15s ease-in-out infinite',
        'tile-expand': 'tileExpand 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'pulse-gentle': 'pulseGentle 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        driftSlow: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -5px)' },
          '50%': { transform: 'translate(-5px, 10px)' },
          '75%': { transform: 'translate(-10px, -10px)' },
        },
        tileExpand: {
          '0%': { transform: 'scale(1)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(118, 208, 255, 0.1)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(118, 208, 255, 0.2)'
          },
        },
      },
    },
  },
  plugins: [],
}

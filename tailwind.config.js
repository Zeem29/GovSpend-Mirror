module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E40AF", // blue-800 - Deep institutional blue
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800
          900: "#1E3A8A", // blue-900
        },
        secondary: {
          DEFAULT: "#64748B", // slate-500 - Neutral slate
          50: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
        },
        accent: {
          DEFAULT: "#059669", // emerald-600 - Vibrant emerald
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
        },
        background: "#FAFBFC", // custom off-white
        surface: "#FFFFFF", // white
        text: {
          primary: "#1F2937", // gray-800 - Rich charcoal
          secondary: "#6B7280", // gray-500 - Balanced gray
        },
        success: {
          DEFAULT: "#10B981", // emerald-500 - Bright green
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500 - Attention-grabbing amber
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
        },
        error: {
          DEFAULT: "#EF4444", // red-500 - Clear red
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
        },
        border: {
          DEFAULT: "#E5E7EB", // gray-200
          light: "#F3F4F6", // gray-100
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        caption: ['Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      boxShadow: {
        'civic': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'civic-elevated': '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'civic': '8px',
        'civic-sm': '4px',
      },
      transitionTimingFunction: {
        'civic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        'fast': '200ms',
        'civic': '300ms',
      },
      animation: {
        'skeleton-pulse': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}
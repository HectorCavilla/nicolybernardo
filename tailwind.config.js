/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#722F37', // Deep Burgundy
          foreground: '#FDFCFA',
        },
        background: '#FDFCFA', // Warm Ivory
        foreground: '#3D3330', // Warm Charcoal
        accent: {
          DEFAULT: '#8B7355', // Warm Taupe
          foreground: '#FDFCFA',
        },
        muted: {
          DEFAULT: '#F0EDE8',
          foreground: '#7A6F64',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#3D3330',
        },
        secondary: {
          DEFAULT: '#F5F2ED', // Soft Cream
          foreground: '#722F37',
        },
        border: '#E5DFD5',
        input: '#F0EDE8',
        // Keeping legacy names for gradual migration if needed, or remove if confident. 
        // Plan says replace, so I will remove 'vino' and 'gold' after I ensure everything is migrated.
        // For now, I'll keep them aliased to the new tokens to prevent breaking the build immediately, 
        // but I will aim to replace them in the code.
        vino: {
           DEFAULT: '#722F37',
           light: '#9E424E',
           dark: '#4A1E24',
         },
         gold: {
           DEFAULT: '#8B7355', // Mapped to accent for continuity during refactor
           light: '#E8D5CA',
           dark: '#B08848',
         }
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        script: ['Great Vibes', 'cursive'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};

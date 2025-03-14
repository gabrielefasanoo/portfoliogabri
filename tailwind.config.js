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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        dark: "var(--dark)",
        darker: "var(--darker)"
      },
      backgroundImage: {
        'gradient-main': 'var(--gradient-1)',
        'gradient-accent': 'var(--gradient-2)',
        'gradient-section': 'var(--gradient-3)',
        'gradient-cta': 'var(--gradient-cta)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-hero-accent': 'var(--gradient-hero-accent)',
      },
      boxShadow: {
        'primary': '0 4px 14px 0 rgba(255, 107, 107, 0.25)',
        'primary-lg': '0 10px 25px -3px rgba(255, 107, 107, 0.25)',
        'secondary': '0 4px 14px 0 rgba(78, 205, 196, 0.25)',
        'accent': '0 4px 14px 0 rgba(255, 230, 109, 0.25)',
        'glow': 'var(--accent-glow)',
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      backgroundColor: {
        'solid': 'var(--bg-solid)',
        'solid-light': 'var(--bg-solid-light)',
      },
    },
  },
  plugins: [],
}

import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '360px', // extra small
        sm: '480px', // small
        md: '640px', // medium
        lg: '768px', // large
        xl: '992px', // extra large
        '2xl': '1280px', // Small laptops
        '3xl': '1440px', // Large laptops
        '4xl': '1920px', // Medium desktops
        '5xl': '2560px', // Large desktops
      },
      colors: {
        primary: {
          DEFAULT: '#26A4FF',
          'text-light': '#BCBDC1',
          'text-normal': '#838A9A',
          'text-dark': '#25324B',
          'bg-light': '#F8F8FD',
          'bg-dark': '#202430',
        },

        // Secondary Colors
        // secondary: {
        //   DEFAULT: '#9333EA',
        //   light: '#A855F7',
        //   dark: '#6B21A8',
        // },

        // Neutrals
        // neutral: {
        //   '50': '#F9FAFB', // Very light gray
        //   '100': '#F3F4F6', // Light gray
        //   '200': '#E5E7EB', // Gray
        //   '300': '#D1D5DB', // Medium gray
        //   '400': '#9CA3AF', // Dark gray
        //   '500': '#6B7280', // Darker gray
        //   '600': '#4B5563', // Very dark gray
        //   '700': '#374151', // Darkest gray
        //   '800': '#1F2937', // Charcoal gray
        //   '900': '#111827', // Almost black
        // },

        // Status Colors
        success: {
          DEFAULT: '#4ADE80', // Success color
          light: '#BBF7D0', // Light success color
          dark: '#16A34A', // Dark success color
        },
        error: {
          DEFAULT: '#DC2626', // Error color
          light: '#FECACA', // Light error color
          dark: '#B91C1C', // Dark error color
        },
        warning: {
          DEFAULT: '#F59E0B', // Warning color
          light: '#FDE68A', // Light warning color
          dark: '#B45309', // Dark warning color
        },
        info: {
          DEFAULT: '#3B82F6', // Info color
          light: '#93C5FD', // Light info color
          dark: '#1E40AF', // Dark info color
        },
      },
    },
  },
  plugins: [animate],
};
export default config;

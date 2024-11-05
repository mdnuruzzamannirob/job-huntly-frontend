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
        // Brand colors
        primary: '#4640DE',
        secondary: '#CCCCF5',
        tertiary: '#E7F6FD',

        // Accent colors
        accent: {
          purple: '#7B61FF',
          blue: '#26A4FF',
          red: '#FF6550',
          green: '#56CDAD',
          yellow: '#FFB836',
        },

        // Neutral colors
        neutral: {
          '100': '#F8F8FD',
          '200': '#F9FAFC',
          '300': '#E4E5E7',
          '400': '#A8ADB7',
          '500': '#7C8493',
          '600': '#515B6F',
          '700': '#25324B',
        },

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
      fontFamily: {
        RHDisplay: ['Red Hat Display', 'Epilogue', 'sans-serif'],
        Epilogue: ['Epilogue', 'Red Hat Display', 'sans-serif'],
      },
    },
  },
  plugins: [animate],
};
export default config;

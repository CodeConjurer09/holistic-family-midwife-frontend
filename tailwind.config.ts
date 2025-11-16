import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Primary brand colors (Magenta theme)
        primary: {
          DEFAULT: "#C21890",
          50: "#FCE4F3",
          100: "#F9C9E7",
          200: "#F394CF",
          300: "#ED5EB7",
          400: "#E7299F",
          500: "#C21890",
          600: "#9B1373",
          700: "#740E56",
          800: "#4D0939",
          900: "#26051D",
          foreground: "#FFFFFF",
        },
        
        // Secondary accent colors (Deep purple)
        secondary: {
          DEFAULT: "#880E4F",
          50: "#F3E5EC",
          100: "#E7CBD9",
          200: "#CF97B3",
          300: "#B7638D",
          400: "#9F2F67",
          500: "#880E4F",
          600: "#6D0B3F",
          700: "#52082F",
          800: "#370620",
          900: "#1C0310",
          foreground: "#FFFFFF",
        },
        
        // Text colors - MUCH DARKER
        textdark: {
          DEFAULT: "#1a202c", // Darker
          foreground: "#FFFFFF",
        },
        textgray: {
          DEFAULT: "#2d3748", // Darker
          light: "#4a5568", // Darker
          foreground: "#FFFFFF",
        },
        
        // Background colors
        sectionbg: {
          DEFAULT: "#F5F5F5",
          light: "#FAFAFA",
          dark: "#EEEEEE",
        },
        
        // Utility colors
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#1EBE56",
          light: "#4ADE80",
        },
        
        // Additional semantic colors
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#f8f9fa",
          foreground: "#4a5568", // Much darker
        },
        accent: {
          DEFAULT: "#FCE4F3",
          foreground: "#C21890",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#1a202c",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1a202c",
        },
        
        // Legacy color names for backward compatibility
        "warm-cream": "#FAFAF8",
        "soft-teal": "#E0F2F1",
        "sage-green": "#C8E6C9",
        "warm-coral": "#FFCCBC",
        "deep-navy": "#1a202c", // Darker
        "light-sage": "#F1F8E9",
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Crimson Text', 'Georgia', 'serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
        sm: ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        base: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        lg: ['1.125rem', { lineHeight: '1.6', fontWeight: '500' }],
        xl: ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        '2xl': ['1.5rem', { lineHeight: '1.4', fontWeight: '700' }],
        '3xl': ['1.875rem', { lineHeight: '1.3', fontWeight: '700' }],
        '4xl': ['2.25rem', { lineHeight: '1.2', fontWeight: '800' }],
        '5xl': ['3rem', { lineHeight: '1.1', fontWeight: '800' }],
      },
      
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      
      boxShadow: {
        'soft': '0 2px 8px rgba(194, 24, 144, 0.08)',
        'medium': '0 4px 12px rgba(194, 24, 144, 0.12)',
        'strong': '0 8px 24px rgba(194, 24, 144, 0.16)',
      },
      
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
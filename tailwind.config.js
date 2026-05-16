/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Orange Theme
        'km-teal': '#F97316',      // orange-500
        'km-cyan': '#FB923C',      // orange-400
        'km-teal-deep': '#EA580C', // orange-600
        'km-navy': '#001C3D',
        'km-navy-mid': '#002B5C',
        'km-navy-light': '#00387A',
        
        // Light Theme Colors
        'bg-light': '#FFFFFF',
        'bg-gray': '#F8F9FA',
        'bg-gray-light': '#F1F3F5',
        'text-dark': '#1A1A1A',
        'text-gray': '#6B7280',
        'text-muted': '#9CA3AF',
        'border-light': '#E5E7EB',
        
        // Product Category Accents
        'cat-mono': '#64748B',
        'cat-colour': '#F97316',   // orange-500
        'cat-volume': '#F59E0B',
        'cat-riso': '#10B981',
        'cat-wide': '#8B5CF6',
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

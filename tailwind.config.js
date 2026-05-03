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
        // Konica Minolta Brand Colors
        'km-teal': '#00B0CA',
        'km-cyan': '#00D4E8',
        'km-teal-deep': '#007EA6',
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
        'cat-colour': '#00B0CA',
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

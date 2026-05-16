/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        petalFall: {
          '0%': { transform: 'translateY(-60px) translateX(0px) rotate(0deg)', opacity: '0' },
          '5%': { opacity: '0.85' },
          '85%': { opacity: '0.65' },
          '100%': { transform: 'translateY(105vh) translateX(70px) rotate(520deg)', opacity: '0' },
        },
        petalFallLeft: {
          '0%': { transform: 'translateY(-60px) translateX(0px) rotate(0deg)', opacity: '0' },
          '5%': { opacity: '0.85' },
          '85%': { opacity: '0.65' },
          '100%': { transform: 'translateY(105vh) translateX(-70px) rotate(-520deg)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-14px) rotate(2deg)' },
          '75%': { transform: 'translateY(-7px) rotate(-2deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-22px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(50px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.85)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 18px rgba(244,114,182,0.4), 0 0 36px rgba(196,128,216,0.2)' },
          '50%': { boxShadow: '0 0 35px rgba(244,114,182,0.75), 0 0 65px rgba(196,128,216,0.45)' },
        },
        bloomIn: {
          '0%': { transform: 'scale(0) rotate(-45deg)', opacity: '0' },
          '60%': { transform: 'scale(1.1) rotate(5deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-7deg)', transformOrigin: 'bottom center' },
          '50%': { transform: 'rotate(7deg)', transformOrigin: 'bottom center' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.6)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.1)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.1)' },
          '70%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'petal-fall': 'petalFall linear infinite',
        'petal-fall-left': 'petalFallLeft linear infinite',
        'float': 'float 4.5s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.9s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards',
        'spin-slow': 'spinSlow 25s linear infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'bloom-in': 'bloomIn 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards',
        'sway': 'sway 3.5s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'heartbeat': 'heartbeat 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

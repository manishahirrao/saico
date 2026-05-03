'use client';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,176,202,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,176,202,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '55px 55px',
          animation: 'gridDrift 65s linear infinite',
        }}
      />

      {/* Animated Orbs */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.15]"
        style={{
          background: 'radial-gradient(circle, rgba(0,176,202,0.3) 0%, transparent 70%)',
          animation: 'orbFloat1 14s ease-in-out infinite',
        }}
      />
      
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[420px] h-[420px] rounded-full blur-[100px] opacity-[0.12]"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,232,0.3) 0%, transparent 70%)',
          animation: 'orbFloat2 18s ease-in-out infinite reverse',
        }}
      />
      
      <div
        className="absolute top-[40%] left-[50%] w-[320px] h-[320px] rounded-full blur-[90px] opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, rgba(0,176,202,0.25) 0%, transparent 70%)',
          animation: 'orbFloat3 22s ease-in-out 5s infinite',
        }}
      />

      <style jsx>{`
        @keyframes gridDrift {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(55px);
          }
        }

        @keyframes orbFloat1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, 40px) scale(1.1);
          }
        }

        @keyframes orbFloat2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(40px, -30px) scale(1.15);
          }
        }

        @keyframes orbFloat3 {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(calc(-50% + 20px), calc(-50% - 20px)) scale(1.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          div {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

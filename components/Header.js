'use client';

import confetti from 'canvas-confetti';

export default function Header() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#fb7185', '#ec4899', '#fde047'],
    });
  };

  return (
    <div className="text-center max-w-2xl px-4 pt-10 pb-4 flex flex-col items-center">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/70 text-pink-600 text-xs font-semibold uppercase tracking-wider mb-4">
        Aug 02 🎂
      </div>

      <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900 leading-tight">
        Happy Birthday <br />
        <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
          Sweety
        </span>
      </h1>

      <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-lg">
        May this year bring you closer to everything you&apos;re chasing. Here&apos;s to celebrating you today and every day.
      </p>

      <button
        onClick={triggerConfetti}
        className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-pink-500 hover:bg-pink-600 active:scale-95 text-white font-medium text-sm rounded-full shadow-md shadow-pink-200 transition-all cursor-pointer"
      >
        <span>Send Love</span>
        <span>🎉</span>
      </button>
    </div>
  );
}

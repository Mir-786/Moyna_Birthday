'use client';

import { useEffect, useState } from 'react';

export default function Counter({ birthDateString = "2002-08-02T00:00:00" }) {
  const [timeData, setTimeData] = useState(null);

  useEffect(() => {
    const targetDate = new Date(birthDateString);

    const updateTimer = () => {
      const now = new Date();
      const totalDiff = now.getTime() - targetDate.getTime();

      if (totalDiff < 0) return;

      const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
      const years = Math.floor(totalDiff / msPerYear);
      
      const remainderAfterYears = totalDiff % msPerYear;
      const days = Math.floor(remainderAfterYears / (1000 * 60 * 60 * 24));
      const hours = Math.floor((totalDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((totalDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((totalDiff % (1000 * 60)) / 1000);

      setTimeData({ years, days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [birthDateString]);

  if (!timeData) {
    return <div className="h-14 flex items-center justify-center text-sm text-pink-300">Loading counter...</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="inline-flex items-center gap-2 sm:gap-4 bg-white/90 shadow-sm border border-pink-100 rounded-full px-5 py-2.5 sm:px-8 sm:py-3.5 backdrop-blur-md">
        <span className="font-mono text-base sm:text-xl font-bold text-neutral-800">
          {timeData.years}<span className="text-pink-500 font-semibold text-sm sm:text-base">y</span>
        </span>
        <span className="text-pink-300">·</span>
        <span className="font-mono text-base sm:text-xl font-bold text-neutral-800">
          {timeData.days}<span className="text-pink-500 font-semibold text-sm sm:text-base">d</span>
        </span>
        <span className="text-pink-300">·</span>
        <span className="font-mono text-base sm:text-xl font-bold text-neutral-800">
          {String(timeData.hours).padStart(2, '0')}:
          {String(timeData.minutes).padStart(2, '0')}:
          {String(timeData.seconds).padStart(2, '0')}
        </span>
      </div>
      <span className="mt-2 text-xs uppercase tracking-wider font-semibold text-pink-400">
        Counting The Years
      </span>
    </div>
  );
}

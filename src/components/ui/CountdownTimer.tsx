"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-alert/20 border-2 border-alert rounded-2xl p-6 countdown-glow">
      <p className="text-alert text-center font-bold text-lg mb-4">
        모집 마감까지
      </p>
      <div className="grid grid-cols-4 gap-3">
        <div className="text-center">
          <div className="bg-alert text-white text-3xl font-black rounded-xl py-3">
            {String(timeLeft.days).padStart(2, "0")}
          </div>
          <p className="text-n-400 text-sm mt-2">일</p>
        </div>
        <div className="text-center">
          <div className="bg-alert text-white text-3xl font-black rounded-xl py-3">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <p className="text-n-400 text-sm mt-2">시</p>
        </div>
        <div className="text-center">
          <div className="bg-alert text-white text-3xl font-black rounded-xl py-3">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <p className="text-n-400 text-sm mt-2">분</p>
        </div>
        <div className="text-center">
          <div className="bg-alert text-white text-3xl font-black rounded-xl py-3">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
          <p className="text-n-400 text-sm mt-2">초</p>
        </div>
      </div>
    </div>
  );
}

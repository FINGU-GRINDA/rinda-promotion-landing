"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
  variant?: "default" | "compact" | "hero";
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({
  targetDate,
  variant = "default",
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return null;
  }

  const TimeBlock = ({
    value,
    label,
  }: {
    value: number;
    label: string;
  }) => {
    if (variant === "hero") {
      return (
        <div className="flex flex-col items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[52px] md:min-w-[64px]">
            <span className="text-2xl md:text-3xl font-bold text-white tabular-nums">
              {String(value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs md:text-sm text-white/60 mt-1.5">{label}</span>
        </div>
      );
    }

    if (variant === "compact") {
      return (
        <div className="flex items-baseline gap-0.5">
          <span className="text-lg font-bold text-rd-red-01 tabular-nums">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-xs text-rd-n-03">{label}</span>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center">
        <div className="bg-n-black rounded-lg px-3 py-2 min-w-[56px]">
          <span className="text-2xl font-bold text-white tabular-nums">
            {String(value).padStart(2, "0")}
          </span>
        </div>
        <span className="text-xs text-rd-n-03 mt-1">{label}</span>
      </div>
    );
  };

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-1.5">
        <TimeBlock value={timeLeft.days} label="일" />
        <span className="text-rd-n-04">:</span>
        <TimeBlock value={timeLeft.hours} label="시" />
        <span className="text-rd-n-04">:</span>
        <TimeBlock value={timeLeft.minutes} label="분" />
        <span className="text-rd-n-04">:</span>
        <TimeBlock value={timeLeft.seconds} label="초" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 md:gap-3">
      <TimeBlock value={timeLeft.days} label="일" />
      <span
        className={`text-xl font-bold ${
          variant === "hero" ? "text-white/40" : "text-rd-n-04"
        }`}
      >
        :
      </span>
      <TimeBlock value={timeLeft.hours} label="시간" />
      <span
        className={`text-xl font-bold ${
          variant === "hero" ? "text-white/40" : "text-rd-n-04"
        }`}
      >
        :
      </span>
      <TimeBlock value={timeLeft.minutes} label="분" />
      <span
        className={`text-xl font-bold ${
          variant === "hero" ? "text-white/40" : "text-rd-n-04"
        }`}
      >
        :
      </span>
      <TimeBlock value={timeLeft.seconds} label="초" />
    </div>
  );
}

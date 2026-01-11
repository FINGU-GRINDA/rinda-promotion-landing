"use client";

import { useState, useEffect } from "react";

const includedItems = [
  { text: "GRINDA Launch 플랜 (30만원 상당)", highlight: true },
  { text: "3주 강의형 온보딩 프로그램", highlight: false },
  { text: "1:1 킥오프 컨설팅 (20분)", highlight: false },
  { text: "카카오톡 커뮤니티 참여", highlight: false },
  { text: "전문가 실시간 피드백", highlight: false },
  { text: "모든 세션 녹화본 제공", highlight: false },
];

// Countdown Timer Component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const deadline = new Date("2025-01-31T23:59:59").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = deadline - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-4 gap-2">
        {["일", "시간", "분", "초"].map((label) => (
          <div key={label} className="text-center">
            <div className="bg-n-black/60 border border-alert/30 rounded-xl py-3 px-2 mb-2">
              <span className="text-alert font-black text-2xl">--</span>
            </div>
            <span className="text-n-400 text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: "일" },
    { value: timeLeft.hours, label: "시간" },
    { value: timeLeft.minutes, label: "분" },
    { value: timeLeft.seconds, label: "초" },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="text-center">
          <div className={`bg-n-black/60 border border-alert/30 rounded-xl py-3 px-2 mb-2 ${index === 3 ? 'animate-pulse' : ''}`}>
            <span className="text-alert font-black text-2xl">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-n-400 text-sm font-medium">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="apply" className="min-h-screen flex flex-col justify-center bg-n-black py-24 px-5">
      <div className="container-default">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-alert font-bold text-lg mb-4 tracking-wide">⚡ 마감 임박</p>
          <h2 className="text-[1.875rem] font-extrabold text-white leading-tight mb-6">
            지금 바로
            <br />
            <span className="text-primary">시작하세요</span>
          </h2>
          <p className="text-n-300 text-base">1기 모집이 곧 마감됩니다</p>
        </div>

        {/* FOMO Countdown Timer */}
        <div className="bg-alert/10 border border-alert/30 rounded-2xl p-6 mb-10">
          <p className="text-center text-alert font-bold text-lg mb-5">
            🔥 1기 마감까지 남은 시간
          </p>
          <CountdownTimer />
        </div>

        {/* Pricing Card */}
        <div className="bg-dark-light rounded-3xl overflow-hidden border-2 border-primary shadow-[0_0_40px_rgba(0,212,170,0.15)]">

          {/* Price Header */}
          <div className="bg-primary px-6 py-8 text-center">
            <div className="mb-4">
              <span className="bg-n-black/20 text-n-black font-bold text-sm px-4 py-1.5 rounded-full">
                1기 얼리버드 특별가
              </span>
            </div>
            <div className="mb-2">
              <span className="text-n-black/50 line-through text-lg">300,000원</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <p className="text-n-black text-4xl font-black">205,000원</p>
              <span className="bg-alert text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                32%
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-7">

            {/* Urgency */}
            <div className="bg-alert/15 border border-alert/30 rounded-2xl p-5 mb-7 flex items-center gap-4">
              <span className="w-4 h-4 bg-alert rounded-full pulse-dot shrink-0" />
              <div>
                <p className="text-alert font-bold text-lg">잔여 3자리</p>
                <p className="text-n-400 text-base">선착순 10명 중 7명 신청 완료</p>
              </div>
            </div>

            {/* Program Info */}
            <div className="bg-n-black/30 rounded-2xl p-6 mb-7">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-n-500 text-sm mb-2">일정</p>
                  <p className="text-white font-bold text-lg">2025.2.7 ~ 2.21</p>
                </div>
                <div>
                  <p className="text-n-500 text-sm mb-2">시간</p>
                  <p className="text-white font-bold text-lg">매주 금 19:30</p>
                </div>
              </div>
            </div>

            {/* Included Items */}
            <p className="text-white font-bold text-lg mb-5">포함 내역</p>
            <div className="space-y-4 mb-7">
              {includedItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg className={`w-6 h-6 shrink-0 ${item.highlight ? "text-primary" : "text-primary/70"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className={`text-base ${item.highlight ? "text-white font-bold" : "text-n-300"}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full bg-primary active:bg-primary-dark text-n-black font-bold text-lg py-4 rounded-xl mb-6 transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(0,212,170,0.3)]">
              지금 바로 신청하기
            </button>

            {/* 7-Day Refund Policy - Prominent */}
            <div className="bg-primary/15 border border-primary/30 rounded-2xl p-5 flex items-start gap-4">
              <svg className="w-8 h-8 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-primary font-bold text-lg mb-1">7일 내 100% 환불 보장</p>
                <p className="text-n-300 text-base">불만족시 전액 환불, 질문 없이</p>
              </div>
            </div>

          </div>
        </div>

        <p className="text-center text-n-500 text-base mt-8">
          마감: 2025년 1월 31일 | 문의: help@rinda.ai
        </p>

      </div>
    </section>
  );
}

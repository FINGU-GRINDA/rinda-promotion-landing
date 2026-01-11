"use client";

import { useState, useEffect } from "react";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 400) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-[480px] z-50 animate-slide-up">
      {/* Main CTA area - 수직 배치 */}
      <div className="bg-n-black/95 backdrop-blur-md border-t border-white/10 px-5 py-4 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">

        {/* 상단: 가격 정보 + 닫기 버튼 */}
        <div className="flex items-center justify-between mb-3">
          {/* Price Info */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-n-500 line-through text-sm">300,000원</span>
              <span className="bg-alert text-white text-xs font-bold px-2 py-0.5 rounded">
                32%
              </span>
            </div>
            <p className="text-white font-black text-xl tracking-tight">205,000원</p>
          </div>

          {/* Close Button - 터치 영역 확대 */}
          <button
            onClick={() => setIsDismissed(true)}
            className="w-10 h-10 flex items-center justify-center text-n-400 hover:text-white rounded-full hover:bg-white/10 transition-colors -mr-2"
            aria-label="닫기"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* CTA Button - 전체 너비 */}
        <button
          onClick={() => {
            const el = document.getElementById("apply");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-full bg-primary active:bg-primary-dark active:scale-[0.98] transition-all text-n-black font-bold py-4 rounded-xl text-lg shadow-[0_0_15px_rgba(0,212,170,0.3)]"
        >
          지금 바로 신청하기
        </button>

        {/* Trust indicator */}
        <p className="text-center text-n-400 text-xs mt-3">
          잔여 3자리 · 7일 내 100% 환불 보장
        </p>
      </div>
    </div>
  );
}

"use client";

import CountdownTimer from "@/components/ui/CountdownTimer";

export default function HeroSection() {
  const scrollToApply = () => {
    const el = document.getElementById("apply");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const deadlineDate = new Date("2025-01-31T23:59:59");

  return (
    <section className="min-h-screen flex flex-col justify-center pt-32 pb-20 px-5 relative overflow-hidden bg-n-black">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-60" />

      <div className="container-default relative z-10 flex flex-col items-center text-center">

        {/* Main Title: The Hook */}
        <div className="mb-16 animate-slide-up opacity-0 mt-8" style={{ animationDelay: '0.2s' }}>
          {/* Accelerating Badge */}
          <div className="flex justify-center" style={{ marginBottom: '0.75rem' }}>
            <span 
              className="bg-primary/20 text-primary font-bold text-xs rounded-lg border border-primary/30 block w-fit"
              style={{ padding: '0.25rem 1rem' }}
            >
              3주 집중 수출 액셀러레이팅
            </span>
          </div>

          <h1 className="text-[2.5rem] leading-[1.2] font-extrabold text-white mb-8 -tracking-[0.03em] break-keep text-center">
            영어 못해도, 무역 몰라도<br />
            <span className="text-gradient-primary">3주 만에</span><br />
            <span className="text-white underline decoration-primary/60 decoration-4 underline-offset-4">첫 수출</span> 시작합니다.
          </h1>
          <p className="text-n-200 text-lg leading-[1.8] max-w-[90%] mx-auto break-keep">
            전문가가 <span className="text-white font-semibold">1:1로 동행</span>하며<br />
            <span className="text-primary font-bold">해외 바이어 50개사 리스트</span>와<br />
            검증된 콜드메일 템플릿까지 제공합니다.
          </p>
        </div>

        {/* CTA Button: Primary Action */}
        <div className="w-full animate-slide-up opacity-0 relative z-20 mb-12" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={scrollToApply}
            className="w-full bg-primary active:bg-primary-dark active:scale-[0.98] text-n-black font-bold text-lg py-4 rounded-xl transition-all shadow-[0_0_30px_rgba(0,212,170,0.4)] relative overflow-hidden group"
            style={{ marginBottom: '10px' }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              지금 바로 신청하기
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </span>
          </button>

          <div className="flex items-center justify-center gap-2 text-n-400 text-sm" style={{ marginBottom: '10px' }}>
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>100% 환불 보장 - 위험 부담 없이 시작하세요</span>
          </div>
        </div>

        {/* Social Proof: Text Only for Cleanliness */}
        <div className="w-full glass-panel p-6 rounded-2xl animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <p className="text-n-200 text-base mb-4 leading-relaxed text-center">
            <span className="text-primary font-bold">"</span>
            수출 초보였던 저도 3주 만에<br />
            <span className="text-white font-bold">싱가포르 백화점 입점 계약</span>했습니다!
            <span className="text-primary font-bold">"</span>
          </p>
          <div className="flex items-center justify-center gap-2 bg-white/5 py-2.5 px-4 rounded-lg">
            <span className="text-sm text-n-400">익투스 침구 브랜드</span>
            <span className="text-sm font-bold text-primary">김민성 대표님</span>
          </div>
        </div>

      </div>
    </section>
  );
}

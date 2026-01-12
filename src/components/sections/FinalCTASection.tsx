"use client";

export default function FinalCTASection() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center bg-primary py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.05)_0%,transparent_60%)]" />

      <div className="container-default text-center relative z-10">

        {/* Main Copy */}
        <p className="text-n-black text-lg mb-6 font-semibold">
          10개 자리가 마감되면, 1기 혜택은 영원히 사라집니다
        </p>
        <h2 className="text-[2.25rem] font-extrabold text-n-black leading-tight mb-8">
          <span className="underline decoration-n-black/30 underline-offset-8">지금 신청</span>하고
          <br />
          글로벌 시장으로 나가세요
        </h2>
        <p className="text-n-black text-lg mb-10 leading-relaxed font-medium">
          3주 후, 당신은
          <br />
          <span className="font-extrabold underline decoration-n-black/40 underline-offset-4">첫 해외 바이어</span>와 미팅하고 있을 겁니다
        </p>

        {/* Price Card - Compact */}
        <div className="bg-n-black/10 backdrop-blur-sm rounded-2xl p-5 mb-8 border border-n-black/20 mx-auto max-w-xs">
          <div className="flex flex-col items-center gap-1">
            <span className="text-n-black/80 line-through text-base">300,000원</span>
            <div className="flex items-center gap-2">
              <span className="text-n-black font-black text-3xl">205,000원</span>
              <span className="bg-n-black text-white text-xs font-bold px-2 py-1 rounded">32%</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-8">
          <button
            onClick={() => {
              const el = document.getElementById("apply");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full max-w-xs bg-n-black text-white py-4 rounded-xl transition-all text-lg font-bold shadow-[0_10px_30px_rgba(0,0,0,0.2)] active:scale-[0.98] active:bg-n-700"
          >
            <span className="flex items-center justify-center gap-2">
              지금 바로 신청하기
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>

        {/* Trust Badges - Horizontal Compact */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-sm mx-auto">
          <span className="bg-n-black/10 text-n-black text-sm font-bold px-4 py-2 rounded-full border border-n-black/20">
            선착순 10명
          </span>
          <span className="bg-n-black/10 text-n-black text-sm font-bold px-4 py-2 rounded-full border border-n-black/20">
            7일 환불 보장
          </span>
          <span className="bg-n-black/10 text-n-black text-sm font-bold px-4 py-2 rounded-full border border-n-black/20">
            1월 31일 마감
          </span>
        </div>

        {/* Contact */}
        <p className="text-n-black text-sm font-medium">
          문의: help@rinda.ai
        </p>

      </div>
    </section>
  );
}

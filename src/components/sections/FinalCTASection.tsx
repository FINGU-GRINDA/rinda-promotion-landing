"use client";

export default function FinalCTASection() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center bg-primary py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.05)_0%,transparent_60%)]" />

      <div className="container-default text-center relative z-10 flex flex-col items-center">

        {/* Main Copy */}
        <p className="text-n-black text-lg mb-8 font-semibold">
          망설이는 동안, 경쟁자는 앞서갑니다
        </p>
        <h2 className="text-[2.25rem] font-extrabold text-n-black leading-tight mb-10">
          지금 시작하면
          <br />
          <span className="underline decoration-n-black/30 underline-offset-8">3주 후가 달라집니다</span>
        </h2>
        <p className="text-n-black text-lg mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
          해외 바이어 <span className="font-extrabold underline decoration-n-black/40 underline-offset-4">50개사 리스트</span>와
          <br />
          <span className="font-extrabold underline decoration-n-black/40 underline-offset-4">첫 수출 파이프라인</span>을 갖게 됩니다
        </p>

        {/* Price Card - Compact */}
        <div className="bg-n-black/10 backdrop-blur-sm rounded-2xl p-5 mb-10 border border-n-black/20 mx-auto max-w-xs w-full">
          <div className="flex flex-col items-center justify-center gap-1 w-full">
            <span className="text-n-black/80 line-through text-base text-center">300,000원</span>
            <div className="flex items-center justify-center gap-2 w-full">
              <span className="text-n-black font-black text-3xl">205,000원</span>
              <span className="bg-n-black text-white text-xs font-bold px-2 py-1 rounded shrink-0">32%</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-10 flex justify-center items-center w-full">
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
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10 w-full">
          <span className="bg-n-black/10 text-n-black text-sm font-bold px-4 py-2 rounded-full border border-n-black/20 whitespace-nowrap">
            선착순 10명
          </span>
          <span className="bg-n-black/10 text-n-black text-sm font-bold px-4 py-2 rounded-full border border-n-black/20 whitespace-nowrap">
            7일 환불 보장
          </span>
          <span className="bg-n-black/10 text-n-black text-sm font-bold px-4 py-2 rounded-full border border-n-black/20 whitespace-nowrap">
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

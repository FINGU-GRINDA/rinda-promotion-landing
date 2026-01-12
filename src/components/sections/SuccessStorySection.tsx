"use client";

export default function SuccessStorySection() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-n-black py-24 px-5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-default relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm mb-4 uppercase tracking-widest animate-pulse">Real Result</p>
          <h2 className="text-[2rem] font-extrabold text-white leading-[1.3]">
            수강생의 성과가<br />
            <span className="text-gradient-gold">가장 확실한 증명</span>입니다
          </h2>
        </div>

        {/* Case Study Card - Highlighted */}
        <div className="glass-panel border-primary/30 rounded-2xl p-8 mb-12 relative overflow-hidden group shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 bg-primary text-n-black text-xs font-black px-4 py-1.5 rounded-bl-xl shadow-lg z-10 tracking-wide">
            VERIFIED
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />

          {/* Profile */}
          <div className="flex items-center gap-5 mb-12 relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 ring-4 ring-white/5">
              <span className="text-n-black text-2xl font-black">익</span>
            </div>
            <div>
              <p className="text-white font-bold text-xl mb-1">김민성 대표님</p>
              <p className="text-n-300 text-sm font-medium">익투스 (기능성 침구)</p>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="relative z-10 mb-12">
            <p className="text-white text-[1.5rem] leading-[1.4] font-bold break-keep">
              "수출 초보였는데,<br />
              <span className="relative inline-block text-primary">
                단 7일 만에
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-primary/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span><br />
              <span className="text-gradient-primary decoration-primary/30 underline-offset-4">싱가포르 백화점 입점 계약</span><br />
              따냈습니다."
            </p>
          </blockquote>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 text-sm font-bold relative z-10">
            <span className="bg-white/10 text-n-200 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">3주 수강</span>
            <span className="bg-primary/20 text-primary px-4 py-2 rounded-lg border border-primary/20 backdrop-blur-sm">첫 수출 성공</span>
          </div>
        </div>

        {/* Additional Testimonials */}
        <div className="grid gap-6 mb-12">
          {/* Testimonial 2 */}
          <div className="glass-panel-light border-primary/20 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary-dark/30 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">박</span>
              </div>
              <div>
                <p className="text-white font-bold text-base">박지현 대표</p>
                <p className="text-n-400 text-sm">식품 제조업</p>
              </div>
              <div className="ml-auto flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-n-200 text-base leading-relaxed">
              "2주차에 <span className="text-primary font-bold">호주 바이어에게 첫 답장</span>을 받았을 때 정말 믿을 수 없었어요. 3주차에는 <span className="text-white font-semibold">샘플 발송까지 완료</span>했습니다!"
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="glass-panel-light border-primary/20 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary-dark/30 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">최</span>
              </div>
              <div>
                <p className="text-white font-bold text-base">최민수 대표</p>
                <p className="text-n-400 text-sm">패션 액세서리</p>
              </div>
              <div className="ml-auto flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-n-200 text-base leading-relaxed">
              "영어를 못해서 포기했던 수출을 <span className="text-primary font-bold">AI가 도와줘서</span> <span className="text-white font-semibold">일본 바이어 3곳과 상담 중</span>입니다. 템플릿 덕분에 이메일 작성이 너무 쉬워요!"
            </p>
          </div>
        </div>

        {/* Result Highlight Box */}
        <div className="glass-panel-light border-primary/30 rounded-2xl px-6 py-10 text-center bg-primary/5">
          <p className="text-white font-bold text-lg leading-relaxed mb-3">
            <span className="text-primary text-3xl font-black block mb-2">당신의 차례입니다</span>
            지금 신청하고<br />
            3주 만에 수출 준비를 완료하세요
          </p>
        </div>

      </div>
    </section>
  );
}

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
            <span className="text-gradient-gold">실제 성과</span>가<br />
            <span className="text-gradient-gold">가장 확실한 증명</span>입니다
          </h2>
        </div>

        {/* Case Study Card - Highlighted */}
        <div className="glass-panel border-primary/30 rounded-2xl relative overflow-hidden group shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] success-story-card">
          <div className="absolute top-0 right-0 bg-primary text-n-black text-xs font-black px-4 py-1.5 rounded-bl-xl shadow-lg z-10 tracking-wide">
            VERIFIED
          </div>

          <div className="absolute top-0 left-0 right-0 bottom-[2rem] bg-gradient-to-br from-primary/5 to-transparent opacity-50" />


          {/* Quote */}
          <blockquote className="relative z-10 mb-6">
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

          {/* Profile */}
          <div className="text-center mb-2 relative z-10">
            <p className="text-n-300 font-bold text-sm" style={{ textAlign: 'center' }}>
              김민성 대표님 - 익투스 (기능성 침구)
            </p>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 text-sm font-bold relative z-10 justify-center success-tags">
            <span className="bg-white/10 text-n-200 rounded-lg border border-white/10 backdrop-blur-sm" style={{ padding: '0.25rem 0.75rem' }}>3주 수강</span>
            <span className="bg-primary/20 text-primary rounded-lg border border-primary/20 backdrop-blur-sm" style={{ padding: '0.25rem 0.75rem' }}>첫 수출 성공</span>
          </div>
        </div>

        {/* Result Highlight Box */}
        <div className="glass-panel-light border-primary/30 rounded-2xl px-6 py-10 text-center bg-primary/5 result-highlight-box flex items-center justify-center">
          <p className="text-white font-bold text-lg leading-relaxed">
            3주 완료 후<br />
            <span className="text-primary text-4xl font-black mx-1 inline-block transform -translate-y-1">실전 수출</span> 시작 가능
          </p>
        </div>

      </div>
    </section>
  );
}

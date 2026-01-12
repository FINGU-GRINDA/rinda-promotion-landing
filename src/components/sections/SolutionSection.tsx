"use client";

const benefits = [
  {
    number: 1,
    title: "AI 타겟 시장 분석",
    desc: "내 제품이 팔리는 국가와 시장을 데이터로 찾아냅니다.",
    before: "컨설팅 업체에 500만원 지불, 2주 소요",
    after: "AI가 30분 만에 분석 완료, 추가 비용 0원"
  },
  {
    number: 2,
    title: "진성 바이어 50개사",
    desc: "담당자 이메일/SNS까지 포함된 DB를 직접 제공합니다.",
    before: "직접 검색하며 1개사당 2시간 소요",
    after: "업종별 맞춤 DB 50개사 즉시 제공"
  },
  {
    number: 3,
    title: "검증된 콜드메일",
    desc: "실제 수출 성공 기업들이 사용한 템플릿으로 바로 시작합니다.",
    before: "무작정 보내면 100통에 답장 0~1건",
    after: "검증된 템플릿으로 바이어 답장률 대폭 상승"
  },
  {
    number: 4,
    title: "3주 실전 코칭",
    desc: "매일 과제 피드백과 매주 라이브 Q&A로 끝까지 함께합니다.",
    before: "혼자 하면 중도 포기, 3개월 이상 소요",
    after: "전문가와 함께 3주 만에 첫 바이어 컨택"
  },
];

export default function SolutionSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-n-black py-24 px-5 border-t border-white/5 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-default relative z-10">

        {/* Transition Header */}
        <div className="text-center mb-20">
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4 animate-pulse">The Solution</p>
          <h2 className="text-[2rem] font-extrabold text-white leading-[1.3] -tracking-[0.03em] mb-6">
            하지만 <span className="text-primary">린다(Rinda)</span>와<br />
            함께라면 다릅니다.
          </h2>
          <p className="text-n-300 text-lg leading-relaxed">
            복잡한 이론은 뺍니다.<br />
            오직 <span className="text-white font-bold underline decoration-primary/50 underline-offset-4">매출로 연결되는 실행</span>만 합니다.
          </p>
        </div>

        {/* Benefits Steps */}
        <div className="space-y-6 mb-24">
          {benefits.map((item) => (
            <div
              key={item.number}
              className="glass-panel rounded-2xl overflow-hidden group relative"
            >
              {/* Highlight Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Header */}
              <div className="bg-primary/10 border-b border-primary/20 px-5 py-3 flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-n-black text-base font-bold">{item.number}</span>
                </div>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </div>

              {/* Content */}
              <div className="p-5 relative z-10">
                <p className="text-n-200 text-base leading-relaxed mb-4 break-keep">{item.desc}</p>

                {/* Before/After Comparison */}
                <div className="grid gap-3">
                  {/* Before */}
                  <div className="bg-alert/5 border border-alert/20 rounded-lg p-3 flex items-start gap-2">
                    <svg className="w-5 h-5 text-alert shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <p className="text-alert/80 font-semibold text-xs mb-1">기존 방법</p>
                      <p className="text-n-300 text-sm leading-relaxed">{item.before}</p>
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-primary/80 font-semibold text-xs mb-1">Rinda 방식</p>
                      <p className="text-white text-sm leading-relaxed font-medium">{item.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus Box - Using primary gradient instead of accent */}
        <div className="bg-gradient-to-r from-primary to-primary-dark backdrop-blur-md rounded-2xl p-8 text-center transform shadow-[0_0_30px_rgba(0,212,170,0.3)] border border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/20 animate-pulse pointer-events-none" />
          <p className="text-n-black/80 font-bold text-sm mb-3 uppercase tracking-wide relative z-10">Special Bonus</p>
          <p className="text-n-black font-extrabold text-2xl relative z-10 leading-tight">
            30만원 상당 <br />
            Global Launch Kit 무료 제공
          </p>
        </div>

      </div>
    </section>
  );
}

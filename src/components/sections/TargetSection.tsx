"use client";

const targets = [
  {
    pain: "국내 시장은 포화... 더 이상 성장이 안 보여요",
    desire: "→ 해외로 나가면 매출 10배 기회"
  },
  {
    pain: "박람회에 3,000만원 썼는데 계약은 0건",
    desire: "→ 온라인으로 바이어 50곳 발굴"
  },
  {
    pain: "영어 못해서 수출은 꿈도 못 꿨어요",
    desire: "→ AI가 번역부터 이메일 작성까지"
  },
  {
    pain: "혼자서는 뭘 해야 할지 막막해요",
    desire: "→ 전문가가 3주간 매일 옆에서 지도"
  },
];

export default function TargetSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-dark py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="container-default relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">Who Should Join</span>
          <h2 className="text-[2rem] font-extrabold text-white leading-tight mb-4">
            이런 분들을 위해<br />
            <span className="text-gradient-primary">만들어졌습니다</span>
          </h2>
          <p className="text-n-200 text-base">
            하나라도 해당된다면, 지금이 기회입니다
          </p>
        </div>

        {/* Targets Cards */}
        <div className="flex flex-col gap-6">
          {targets.map((item, index) => (
            <div
              key={index}
              className="bg-dark-light/50 border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all group"
            >
              {/* Pain Point */}
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-6 h-6 text-alert shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-n-200 text-base leading-relaxed font-medium">{item.pain}</p>
              </div>

              {/* Desire/Solution */}
              <div className="flex items-start gap-3 pl-9 border-l-2 border-primary/30 ml-3">
                <p className="text-primary text-base leading-relaxed font-bold">{item.desire}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

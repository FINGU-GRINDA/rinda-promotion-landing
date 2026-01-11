"use client";

const benefits = [
  {
    number: 1,
    title: "AI 타겟 시장 분석",
    desc: "내 제품이 팔리는 국가와 시장을 데이터로 찾아냅니다.",
  },
  {
    number: 2,
    title: "진성 바이어 50개사",
    desc: "담당자 이메일/SNS까지 포함된 DB를 직접 제공합니다.",
  },
  {
    number: 3,
    title: "검증된 콜드메일",
    desc: "평균 응답률 15% 이상의 템플릿으로 바로 시작합니다.",
  },
  {
    number: 4,
    title: "3주 실전 코칭",
    desc: "매일 과제 피드백과 매주 라이브 Q&A로 끝까지 함께합니다.",
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
        <div className="space-y-4 mb-24">
          {benefits.map((item) => (
            <div
              key={item.number}
              className="glass-panel rounded-xl p-5 hover:bg-white/5 transition-all group relative overflow-hidden"
            >
              {/* Highlight Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex items-start gap-4">
                {/* Number Badge */}
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-n-black text-base font-bold">{item.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-white font-bold text-lg mb-1.5">{item.title}</h3>
                  <p className="text-n-300 text-base leading-relaxed break-keep">{item.desc}</p>
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

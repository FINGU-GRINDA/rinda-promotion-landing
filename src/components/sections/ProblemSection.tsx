"use client";

const problems = [
  {
    title: "박람회 부스 비용 3,000만원",
    desc: "3일간 100명 만남 → 실제 계약 0건",
    cost: "3,000만원",
    result: "계약 0건"
  },
  {
    title: "콜드메일 100통 발송",
    desc: "응답률 0% → 시간과 비용만 낭비",
    cost: "시간 낭비",
    result: "응답 0건"
  },
  {
    title: "온라인 강의 수강료 150만원",
    desc: "이론은 알겠는데... 실행은 여전히 막막",
    cost: "150만원",
    result: "실행 불가"
  },
];

export default function ProblemSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-n-black py-24 px-6 relative overflow-hidden">

      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-alert/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-default relative z-10">

        {/* Header - Warning Style (Updated for Narrative) */}
        <div className="text-center mb-16">

          <p className="text-n-300 text-lg mb-6 leading-relaxed">
            열심히 노력하고 계신 거 압니다.<br />
            하지만, 왜 결과가 다를까요?
          </p>
          <h2 className="text-[2rem] font-extrabold text-white leading-[1.3] -tracking-[0.03em]">
            기존 방법의 <br />
            <span className="text-alert decoration-alert/30 underline underline-offset-8">한계를 경험</span>하셨다면<br />
            새로운 방법이 필요합니다.
          </h2>
        </div>

        {/* Problems Grid - High Contrast */}
        <div className="grid gap-10 mb-20">

          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-dark/80 border border-alert/20 rounded-2xl overflow-hidden hover:border-alert/40 transition-all group shadow-lg"
            >
              {/* Header with Cost */}
              <div className="bg-alert/10 border-b border-alert/20 px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-alert/20 flex items-center justify-center border border-alert/30 text-alert font-bold text-sm shadow-[0_0_10px_rgba(255,71,87,0.2)]">
                    {index + 1}
                  </div>
                  <span className="text-alert font-bold text-sm">기존 방법</span>
                </div>
                <span className="text-alert/80 font-bold text-sm">{problem.cost}</span>
              </div>

              {/* Content */}
              <div className="p-5 relative">
                <div className="absolute right-3 top-3 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg className="w-16 h-16 text-alert" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>

                <h3 className="text-white text-lg font-bold mb-2 leading-tight relative z-10">{problem.title}</h3>
                <p className="text-n-300 text-base leading-relaxed mb-3 relative z-10">{problem.desc}</p>

                {/* Result Badge */}
                <div className="inline-flex items-center gap-2 bg-alert/10 border border-alert/20 px-3 py-1.5 rounded-lg relative z-10">
                  <svg className="w-4 h-4 text-alert" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-alert font-bold text-sm">{problem.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Agitation Summary */}
        <div className="text-center bg-dark-lighter/30 rounded-2xl p-7 border border-white/5">
          <p className="text-lg text-white font-medium leading-relaxed">
            올바른 방법을 모르면 <span className="text-alert font-extrabold">오래 걸릴 수밖에</span> 없습니다.<br />
            <span className="text-n-400 text-base">하지만 걱정 마세요 - 해결책이 있습니다.</span>
          </p>
        </div>

      </div>
    </section>
  );
}

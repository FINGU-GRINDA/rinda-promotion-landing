"use client";

const problems = [
  {
    title: "박람회에 수천만원 투자했지만",
    desc: "기대한 성과가 나오지 않으셨나요?"
  },
  {
    title: "콜드메일 100통 보냈는데",
    desc: "답장이 오지 않아 답답하셨나요?"
  },
  {
    title: "수출 강의를 들었지만",
    desc: "실제 실행은 막막하셨나요?"
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
              className="bg-dark/80 border border-alert/20 p-5 rounded-xl flex items-start gap-4 hover:bg-dark transition-colors relative overflow-hidden group shadow-lg"
            >
              <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-16 h-16 text-alert" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>

              <div className="w-10 h-10 rounded-full bg-alert/20 flex items-center justify-center shrink-0 mt-0.5 border border-alert/30 text-alert font-bold text-base shadow-[0_0_10px_rgba(255,71,87,0.2)]">
                {index + 1}
              </div>
              <div className="relative z-10">
                <h3 className="text-white text-xl font-bold mb-1 leading-tight">{problem.title}</h3>
                <p className="text-n-300 text-base leading-relaxed">{problem.desc}</p>
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

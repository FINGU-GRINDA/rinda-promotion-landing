"use client";

const problems = [
  {
    title: "수천만 원 쓴 박람회, 남은 건 명함 한 뭉치뿐인가요?",
    desc: "박람회에 수천만원 투자했지만 기대한 성과가 나오지 않으셨나요?"
  },
  {
    title: "100통 넘게 보낸 콜드메일, 답장은 왜 없을까요?",
    desc: "콜드메일 100통 보냈는데 답장이 오지 않아 답답하셨나요?"
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

          <p className="text-n-300 text-lg mb-6 leading-relaxed problem-intro">
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
        <div className="grid mb-20 problem-grid">

          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-dark/80 border border-alert/20 p-6 rounded-xl flex items-center gap-4 hover:bg-dark transition-colors relative overflow-hidden group shadow-lg"
            >
              <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-16 h-16 text-alert" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>

              <div className="w-10 h-10 rounded-full bg-alert/20 flex items-center justify-center shrink-0 border border-alert/30 text-alert font-bold text-base shadow-[0_0_10px_rgba(255,71,87,0.2)]">
                {index + 1}
              </div>
              <div className="relative z-10 flex-1 min-w-0">
                <h3 className="text-white text-lg font-bold my-2 leading-snug break-keep">{problem.title}</h3>
                <p className="text-n-300 text-sm leading-relaxed">{problem.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Agitation Summary */}
        <div className="text-center bg-dark-lighter/30 rounded-2xl p-7 border border-white/5 centered-box mt-8">
          <p className="text-lg text-white font-medium leading-relaxed mx-auto" style={{ maxWidth: '100%' }}>
            올바른 방법을 모르면 <span className="text-alert font-extrabold">오래 걸릴 수밖에</span> 없습니다.<br />
            <span className="text-n-400 text-base">하지만 걱정 마세요 - 해결책이 있습니다.</span>
          </p>
        </div>

      </div>
    </section>
  );
}

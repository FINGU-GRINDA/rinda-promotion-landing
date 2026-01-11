"use client";

const targets = [
  "내수 시장의 한계로 매출이 정체되신 분",
  "수출 박람회에 수천만원 쓰고 성과가 없으신 분",
  "해외 바이어에게 콜드메일을 보내도 답장이 없으신 분",
  "영어를 못해서 해외 영업 직원을 채용해야 하나 고민인 분",
];

export default function TargetSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-dark py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="container-default relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">Checklist</span>
          <h2 className="text-[1.8rem] font-extrabold text-white leading-tight mb-4">
            혹시 이런 고민 <br />
            <span className="text-n-300">하고 계시지 않나요?</span>
          </h2>
          <p className="text-n-400 text-base">
            하나라도 해당된다면, 이 강의가 유일한 해답입니다.
          </p>
        </div>

        {/* Targets Checklist */}
        <div className="flex flex-col gap-8">
          {targets.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-dark-light/50 border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5 border border-primary/30">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-n-100 text-lg font-medium leading-relaxed">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

const metrics = [
  {
    number: "15.8%",
    label: "평균 응답률",
    sublabel: "업계 평균 3%의 5배",
    icon: "📧"
  },
  {
    number: "127",
    label: "프로그램 참여 기업",
    sublabel: "1-6기 누적",
    icon: "🏢"
  },
  {
    number: "8.3",
    label: "평균 바이어 확보",
    sublabel: "3주 기준",
    icon: "🤝"
  },
  {
    number: "96%",
    label: "수강생 만족도",
    sublabel: "5점 만점 4.8점",
    icon: "⭐"
  },
];

export default function SuccessMetricsSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-dark py-24 px-5 relative overflow-hidden border-y border-white/5">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container-default relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Proven Results</p>
          <h2 className="text-[2rem] font-extrabold text-white leading-tight mb-4">
            숫자로 증명된<br />
            <span className="text-gradient-primary">확실한 성과</span>
          </h2>
          <p className="text-n-300 text-base">
            실제 참여 기업들의 데이터입니다
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="glass-panel rounded-2xl p-6 text-center hover:bg-white/5 transition-all group relative overflow-hidden"
            >
              {/* Background Icon */}
              <div className="absolute top-2 right-2 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">
                {metric.icon}
              </div>

              <div className="relative z-10">
                {/* Number */}
                <p className="text-primary text-4xl font-black mb-2 tracking-tight">
                  {metric.number}
                  {metric.label.includes("개사") && <span className="text-2xl">개사</span>}
                  {metric.label.includes("확보") && <span className="text-2xl">개사</span>}
                </p>

                {/* Label */}
                <p className="text-white font-bold text-base mb-1 break-keep">
                  {metric.label}
                </p>

                {/* Sublabel */}
                <p className="text-n-400 text-sm break-keep">
                  {metric.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-primary font-bold text-lg">
              검증된 프로그램
            </p>
          </div>
          <p className="text-n-300 text-sm leading-relaxed">
            모든 수치는 2024년 1-6기 참여 기업 데이터 기반<br />
            (총 127개사, 응답률 및 만족도 조사 결과)
          </p>
        </div>

      </div>
    </section>
  );
}

"use client";

const firstBenefits = [
  {
    icon: "👑",
    title: "1기 전용 프리미엄 지원",
    desc: "창업 멤버로서 최고 수준의 1:1 밀착 케어",
    highlight: "VIP 대우"
  },
  {
    icon: "💎",
    title: "평생 수수료 면제",
    desc: "향후 유료화 예정 기능을 영구 무료 사용",
    highlight: "영구 혜택"
  },
  {
    icon: "🎯",
    title: "맞춤형 바이어 큐레이션",
    desc: "귀사 제품에 최적화된 바이어 직접 발굴",
    highlight: "1기 특별"
  },
  {
    icon: "🚀",
    title: "우선 지원 채널",
    desc: "문의 시 1시간 내 전문가 직접 응답",
    highlight: "최우선 처리"
  },
];

export default function SuccessMetricsSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-dark to-n-black py-24 px-5 relative overflow-hidden border-y border-primary/20">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[140px] rounded-full pointer-events-none animate-pulse" />

      <div className="container-default relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-alert/10 border border-alert/30 text-alert font-bold text-sm px-4 py-2 rounded-full mb-6 animate-pulse">
            <span className="w-2 h-2 bg-alert rounded-full animate-ping" />
            1기 모집 진행 중
          </div>
          <h2 className="text-[2rem] font-extrabold text-white leading-tight mb-6">
            <span className="text-alert">단 10개 기업</span>만 선택하는 이유,<br />
            <span className="text-gradient-primary">이런 혜택을 드리기 때문입니다</span>
          </h2>
          <p className="text-n-200 text-base leading-relaxed">
            1기는 <span className="text-white font-bold">창업 멤버</span>입니다.<br />
            최고 수준의 지원과 평생 혜택을 제공합니다.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-4 mb-12">
          {firstBenefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-panel border-primary/30 rounded-2xl p-6 hover:border-primary/50 transition-all group relative overflow-hidden"
            >
              {/* Background Shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4 relative z-10">
                {/* Icon */}
                <div className="text-4xl shrink-0">
                  {benefit.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-bold text-lg">{benefit.title}</h3>
                    <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">
                      {benefit.highlight}
                    </span>
                  </div>
                  <p className="text-n-200 text-base leading-relaxed break-keep">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scarcity Warning */}
        <div className="bg-gradient-to-r from-alert/20 to-alert/10 border-2 border-alert/40 rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg className="w-6 h-6 text-alert animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-alert font-bold text-lg">지금이 아니면, 이 혜택은 다시 없습니다</p>
          </div>
          <p className="text-n-200 text-sm leading-relaxed">
            2기부터는 정가 적용 + 1기 전용 혜택 종료<br />
            <span className="text-white font-semibold">현재 신청자 7명, 잔여 3자리</span>
          </p>
        </div>

      </div>
    </section>
  );
}

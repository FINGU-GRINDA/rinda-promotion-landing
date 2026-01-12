"use client";

const bonuses = [
  {
    icon: "🎁",
    title: "Global Launch Kit",
    value: "30만원 상당",
    items: [
      "바이어 발굴 체크리스트",
      "콜드메일 템플릿 20종",
      "계약서 샘플 5종",
      "HS코드 분류 가이드"
    ]
  },
  {
    icon: "📊",
    title: "맞춤 바이어 DB",
    value: "50개사 제공",
    items: [
      "업종별 타겟 바이어 리스트",
      "담당자 이메일 & SNS",
      "기업 규모 & 수입 이력",
      "컨택 우선순위 추천"
    ]
  },
  {
    icon: "💬",
    title: "평생 커뮤니티 접근권",
    value: "무제한",
    items: [
      "선배 수강생 네트워킹",
      "실시간 Q&A 채널",
      "월간 수출 트렌드 리포트",
      "추가 강의 & 웨비나"
    ]
  }
];

export default function BonusSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-dark py-24 px-5 relative overflow-hidden border-y border-white/5">

      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-default relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-alert/10 border border-alert/30 text-alert font-bold text-sm px-4 py-2 rounded-full mb-6">
            🎁 1기 전용 혜택
          </div>
          <h2 className="text-[2rem] font-extrabold text-white leading-tight mb-4">
            <span className="text-alert">20.5만원</span> 내고<br />
            <span className="text-gradient-primary">수백만원 가치를 받아가세요</span>
          </h2>
          <p className="text-n-200 text-base leading-relaxed">
            1기는 <span className="text-white font-bold">테스트 베드</span>가 아닙니다.<br />
            오히려 <span className="text-primary font-bold">가장 많은 혜택</span>을 드립니다.
          </p>
        </div>

        {/* Bonus Cards */}
        <div className="space-y-6 mb-12">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="glass-panel border-primary/20 rounded-2xl overflow-hidden group hover:border-primary/40 transition-all"
            >
              {/* Header */}
              <div className="bg-primary/10 border-b border-primary/20 px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{bonus.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-lg">{bonus.title}</h3>
                    <p className="text-primary text-sm font-semibold">{bonus.value}</p>
                  </div>
                </div>
                <div className="bg-primary/20 text-primary font-bold text-xs px-3 py-1.5 rounded-full">
                  무료
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="grid gap-3">
                  {bonus.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-n-200 text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Box */}
        <div className="bg-gradient-to-r from-primary/20 to-primary-dark/20 border-2 border-primary/40 rounded-2xl p-8 text-center">
          <p className="text-n-300 text-sm font-semibold mb-2 uppercase tracking-wide">총 추가 혜택 가치</p>
          <p className="text-white text-5xl font-black mb-3">
            <span className="text-primary">80만원</span> 상당
          </p>
          <p className="text-n-200 text-base leading-relaxed">
            하지만 프로그램 참여자에게는<br />
            <span className="text-white font-bold">모두 무료로 제공</span>됩니다
          </p>
        </div>

      </div>
    </section>
  );
}

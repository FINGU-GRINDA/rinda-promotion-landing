"use client";

const credentials = [
  "50개+ 국내 중소기업 해외 진출 컨설팅",
  "B2B 콜드 아웃리치 전문가 (평균 응답률 15%+)",
  "100건+ 실제 바이어 미팅 성사 경험",
];

export default function InstructorSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-n-black py-24 px-5">
      <div className="container-default">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-bold text-sm mb-4 uppercase tracking-widest">Instructor</p>
          <h2 className="text-[1.75rem] font-extrabold text-white leading-tight">
            전문가 <span className="text-primary">소개</span>
          </h2>
        </div>

        {/* Instructor Card */}
        <div className="bg-dark rounded-2xl p-8 border border-white/5">
          {/* Profile */}
          <div className="flex items-center gap-5 mb-12">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
              <span className="text-n-black text-3xl font-black">박</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-1">박준영</h3>
              <p className="text-primary text-base font-bold">
                GRINDA 시니어 컨설턴트
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div className="space-y-6 mb-12">
            {credentials.map((item, index) => (
              <div key={index} className="flex items-center gap-4 text-n-200 text-base">
                <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
            <p className="text-white text-lg leading-relaxed">
              "어렵게 느껴지는 수출,
              <br />
              3주면 충분히 시작할 수 있습니다.
              <br />
              <span className="text-primary font-bold">혼자 하지 마세요.</span>"
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

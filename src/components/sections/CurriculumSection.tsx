"use client";

import { curriculumData } from "@/data/curriculum";

export default function CurriculumSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-n-black py-24 px-5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-default relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-primary font-bold text-sm mb-4 tracking-[0.2em] uppercase">Curriculum</p>
          <h2 className="text-[2rem] font-extrabold text-white leading-[1.3] mb-6">
            3주 완성
            <br />
            <span className="text-primary">수출 파이프라인</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-16">

          {/* Timeline Line */}
          <div className="absolute left-[18px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/30 to-transparent z-0"></div>

          {/* Kickoff */}
          <div className="relative pl-0">
            <div className="absolute left-[18px] top-0 w-12 h-12 flex items-center justify-center z-10 -translate-x-1/2">
              <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-n-black shadow-[0_0_15px_rgba(0,212,170,0.6)]" />
            </div>

            <div className="ml-[100px] glass-panel bg-primary/10 border-primary/40 rounded-xl p-6 relative group overflow-hidden z-20">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary/20 text-primary font-black text-sm tracking-wide uppercase px-4 py-2 rounded-full">Start</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-4">1:1 킥오프 컨설팅 (20분)</h3>
                <div className="space-y-3">
                  {curriculumData.kickoff.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-n-200 text-sm">
                      <span className="text-primary w-1.5 h-1.5 rounded-full bg-current shrink-0" style={{ marginLeft: '0.5rem' }} />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Cards */}
          {curriculumData.weeks.map((week) => (
            <div key={week.week} className="relative pl-0">
              {/* Timeline Dot */}
              <div className="absolute left-[18px] top-0 w-12 h-12 flex items-center justify-center z-10 -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-n-black border-2 border-primary/50 flex items-center justify-center text-primary font-bold text-sm shadow-xl">
                  {week.week}주
                </div>
              </div>

              <div className="ml-[120px] glass-panel rounded-xl p-6 hover:bg-white/5 transition-all group z-20">
                <div className="flex items-center justify-between mb-4 curriculum-date">
                  <span className="text-n-300 text-sm font-bold bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">{week.date}</span>
                </div>

                <h3 className="text-white font-bold text-lg mb-4 leading-snug curriculum-content">{week.title}</h3>

                <div className="space-y-3 pl-4 border-l-2 border-primary/30 curriculum-content">
                  {week.practice.slice(0, 2).map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-n-200 text-sm curriculum-list-item">
                      <span className="text-primary font-bold shrink-0 mt-0.5">·</span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                  {week.practice.length > 2 && (
                    <p className="text-primary/70 text-sm pl-4 pt-1">+ 더보기</p>
                  )}
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Result */}
        <div className="mt-20 glass-panel-light bg-primary/10 border-primary/30 rounded-2xl p-12 text-center relative overflow-hidden curriculum-result-box">
          <div className="absolute inset-0 bg-primary/5 animate-pulse" />
            <p className="text-white font-bold text-xl relative z-10 leading-relaxed curriculum-final-text">
              3주 후, 당신은 이미 <br />
              <span className="text-primary text-2xl font-black">해외 수출 기업 대표</span>입니다.
            </p>
        </div>

      </div>
    </section>
  );
}

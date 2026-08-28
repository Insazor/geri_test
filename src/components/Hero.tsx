import { ArrowRight, Users, Sparkles, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
      {/* Background */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-navy-200/40 via-navy-100/20 to-transparent blur-3xl" />
      <div className="absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-accent-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-navy-200 bg-navy-50 px-4 py-1.5 text-sm font-semibold text-navy-700 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-navy-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-navy-600" />
            </span>
            2026년 10월 24일 · 신청 접수 중
          </div>

          {/* Heading */}
          <h1 className="text-balance text-5xl font-extrabold leading-[1.1] tracking-tight text-navy-900 sm:text-6xl lg:text-7xl animate-fade-in-up">
            창업가가 만나고,
            <br />
            <span className="gradient-text">아이디어가 연결되는 날</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-relaxed text-slate-600 sm:text-xl animate-fade-in-up [animation-delay:0.1s] opacity-0">
            Founder Connect Day는 예비 창업가와 스타트업 창업자가 한자리에 모여
            아이디어를 나누고 네트워크를 확장하는 창업 네트워킹 행사입니다.
            3개의 프로그램으로 구성된 하루, 당신의 다음 도약이 시작됩니다.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up [animation-delay:0.2s] opacity-0">
            <a
              href="#register"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-navy-700 to-navy-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-navy-500/30 transition-all hover:shadow-2xl hover:shadow-navy-500/40 hover:-translate-y-0.5"
            >
              지금 신청하기
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#program"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-base font-bold text-navy-700 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
            >
              프로그램 보기
            </a>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3 animate-fade-in-up [animation-delay:0.3s] opacity-0">
          {[
            { icon: Users, value: '500+', label: '예상 참가자' },
            { icon: Sparkles, value: '3', label: '구성 프로그램' },
            { icon: TrendingUp, value: '120+', label: '파트너 기업' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50">
                <item.icon className="h-6 w-6 text-navy-600" />
              </div>
              <div className="text-3xl font-extrabold text-navy-900">{item.value}</div>
              <div className="mt-1 text-sm font-semibold text-slate-500">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

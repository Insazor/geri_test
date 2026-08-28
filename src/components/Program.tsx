import { Mic, Users, Rocket } from 'lucide-react';

const programs = [
  {
    icon: Mic,
    number: '01',
    title: '키노트 강연',
    time: '오전 9:30 ~ 11:30',
    description:
      '성공한 창업가 3인이 들려주는 창업 여정과 실패에서 배운 교훈. 실전 경험을 통해 얻은 인사이트를 공유합니다.',
    highlights: ['창업가 3인 키노트', '실전 실패 사례', 'Q&A 세션'],
    color: 'from-navy-600 to-navy-500',
    bg: 'bg-navy-50',
  },
  {
    icon: Users,
    number: '02',
    title: '네트워킹 세션',
    time: '오후 1:00 ~ 3:00',
    description:
      '분야별 소그룹으로 나뉘어 진행되는 1:1, 1:N 네트워킹. 같은 관심사를 가진 창업가들과 깊이 있는 대화를 나누세요.',
    highlights: ['소그룹 라운드테이블', '1:1 매칭 시스템', '관심사 기반 매칭'],
    color: 'from-navy-700 to-navy-600',
    bg: 'bg-navy-100',
  },
  {
    icon: Rocket,
    number: '03',
    title: '피치 데모데이',
    time: '오후 3:30 ~ 5:30',
    description:
      '선발된 8개 스타트업이 5분 피치를 진행합니다. 투자자와 파트너 기업이 직접 평가하고 피드백을 제공합니다.',
    highlights: ['8개 팀 피치 발표', '투자자 실시간 평가', '우수팀 시상'],
    color: 'from-navy-800 to-navy-700',
    bg: 'bg-navy-50',
  },
];

export default function Program() {
  return (
    <section id="program" className="relative overflow-hidden py-24 lg:py-32 bg-slate-50">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-navy-600">
            프로그램
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl text-balance">
            3개의 프로그램으로 구성된 하루
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 text-balance">
            강연부터 네트워킹, 피치 데모데이까지 — 창업가에게 필요한 모든 경험을 하루 안에.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {programs.map((program, i) => (
            <div
              key={program.number}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-500/5"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${program.color}`} />

              <div className="p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${program.color} shadow-lg`}>
                    <program.icon className="h-7 w-7 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-5xl font-extrabold text-slate-100 transition-colors group-hover:text-navy-100">
                    {program.number}
                  </span>
                </div>

                <h3 className="mb-2 text-2xl font-extrabold text-navy-900">
                  {program.title}
                </h3>
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1 text-xs font-bold text-navy-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-500" />
                  {program.time}
                </div>
                <p className="mb-6 text-base leading-relaxed text-slate-600">
                  {program.description}
                </p>

                <ul className="space-y-2.5">
                  {program.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-navy-100">
                        <span className="h-1.5 w-1.5 rounded-full bg-navy-600" />
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

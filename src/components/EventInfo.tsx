import { CalendarDays, MapPin, Clock, Users } from 'lucide-react';

const infoItems = [
  {
    icon: CalendarDays,
    label: '행사 날짜',
    value: '2026년 10월 24일 (토요일)',
    sub: '오전 9시 ~ 오후 6시',
  },
  {
    icon: MapPin,
    label: '행사 장소',
    value: '그랜드 컨벤션 홀',
    sub: '서울특별시 강남구 테헤란로 123',
  },
  {
    icon: Users,
    label: '참가 인원',
    value: '500명 (선착순)',
    sub: '사전 등록 필수',
  },
  {
    icon: Clock,
    label: '접수 마감',
    value: '2026년 10월 17일',
    sub: '마감 후 자동 폐쇄',
  },
];

export default function EventInfo() {
  return (
    <section id="info" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-navy-600">
            일정 · 장소
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl text-balance">
            행사 정보를 확인하세요
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 text-balance">
            2026년 10월 24일, 서울 강남에서 만납니다. 사전 등록 없이는 입장이 제한됩니다.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {infoItems.map((item) => (
            <div
              key={item.label}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-xl hover:shadow-navy-500/5"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 transition-colors group-hover:bg-navy-100">
                <item.icon className="h-6 w-6 text-navy-600" />
              </div>
              <div className="text-sm font-semibold text-slate-400">{item.label}</div>
              <div className="mt-1 text-lg font-bold text-navy-900">{item.value}</div>
              <div className="mt-1 text-sm text-slate-500">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

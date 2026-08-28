import { CheckCircle2, Calendar, Mail, MapPin } from 'lucide-react';

interface SuccessMessageProps {
  name: string;
}

export default function SuccessMessage({ name }: SuccessMessageProps) {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="absolute -top-20 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-navy-200/30 via-navy-100/15 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-2xl px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-xl shadow-slate-900/5 lg:p-14 animate-fade-in-up">
          {/* Success icon */}
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-success-50">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success-500 shadow-lg shadow-success-500/30">
              <CheckCircle2 className="h-9 w-9 text-white" strokeWidth={2.5} />
            </div>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl text-balance">
            신청이 완료되었습니다!
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 text-balance">
            <span className="font-bold text-navy-700">{name}</span>님,
            <br />
            Founder Connect Day 신청이 정상적으로 접수되었습니다.
          </p>

          {/* Info summary */}
          <div className="mt-10 space-y-4 rounded-2xl bg-slate-50 p-6 text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-navy-50">
                <Calendar className="h-5 w-5 text-navy-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-navy-900">행사 날짜</div>
                <div className="text-sm text-slate-500">2026년 10월 24일 (토요일)</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-navy-50">
                <MapPin className="h-5 w-5 text-navy-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-navy-900">행사 장소</div>
                <div className="text-sm text-slate-500">그랜드 컨벤션 홀 (강남구 테헤란로 123)</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-navy-50">
                <Mail className="h-5 w-5 text-navy-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-navy-900">이메일 안내</div>
                <div className="text-sm text-slate-500">입력하신 이메일로 상세 안내가 발송됩니다.</div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            행사 관련 문의: founder-connect@example.com
          </p>
        </div>
      </div>
    </section>
  );
}

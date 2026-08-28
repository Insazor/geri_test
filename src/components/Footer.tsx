import { CalendarDays, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  행사: ['행사 소개', '프로그램', '일정·장소', '스폰서'],
  참가: ['신청하기', '참가 안내', '자주 묻는 질문', '행사 규정'],
  관련: ['이전 행사', '창업 가이드', '파트너십', '문의하기'],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
            {/* Brand */}
            <div className="col-span-2 md:col-span-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-navy-500 to-navy-400 shadow-lg shadow-navy-500/30">
                  <CalendarDays className="h-5 w-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-base font-extrabold tracking-tight text-white">
                    Founder Connect Day
                  </span>
                  <span className="text-[11px] font-semibold text-navy-300">
                    2026 창업 네트워킹 행사
                  </span>
                </div>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-200">
                창업가가 만나고 아이디어가 연결되는 날. 예비 창업가와 스타트업 창업자를 위한 네트워킹 행사.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-navy-200">
                  <Mail className="h-4 w-4 text-navy-400" />
                  founder-connect@example.com
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-200">
                  <Phone className="h-4 w-4 text-navy-400" />
                  02-1234-5678
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-200">
                  <MapPin className="h-4 w-4 text-navy-400" />
                  서울특별시 강남구 테헤란로 123
                </div>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-sm font-bold text-white">{category}</h4>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-navy-200 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-navy-800 py-8 sm:flex-row">
          <p className="text-sm text-navy-300">
            © 2026 Founder Connect Day. 모든 권리 보유.
          </p>
          <div className="flex items-center gap-6 text-sm text-navy-300">
            <a href="#" className="transition-colors hover:text-white">이용약관</a>
            <a href="#" className="transition-colors hover:text-white">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

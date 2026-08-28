import { useEffect, useState } from 'react';
import { Menu, X, CalendarDays } from 'lucide-react';

const navLinks = [
  { label: '행사 소개', href: '#about' },
  { label: '일정·장소', href: '#info' },
  { label: '프로그램', href: '#program' },
  { label: '신청하기', href: '#register' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-[0_4px_30px_rgba(0,0,0,0.06)]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-500 shadow-lg shadow-navy-500/30 transition-transform group-hover:scale-110">
              <CalendarDays className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-extrabold tracking-tight text-navy-900">
                Founder Connect Day
              </span>
              <span className="text-[11px] font-semibold text-navy-400">
                2026 창업 네트워킹 행사
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-navy-50 hover:text-navy-700"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a
              href="#register"
              className="rounded-xl bg-navy-800 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-navy-800/20 transition-all hover:shadow-xl hover:shadow-navy-800/30 hover:-translate-y-0.5"
            >
              신청하기
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-800 transition-colors hover:bg-navy-50 md:hidden"
            aria-label="메뉴"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200/60 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-navy-50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#register"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-xl bg-navy-800 px-5 py-3 text-center text-sm font-bold text-white"
              >
                신청하기
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

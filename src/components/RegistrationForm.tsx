import { useState, type FormEvent } from 'react';
import { supabase } from '@/lib/supabase';
import type { RegistrationData } from '@/types/registration';
import SuccessMessage from './SuccessMessage';
import { Send, AlertCircle, Loader2 } from 'lucide-react';

const purposes = [
  '네트워킹 및 인맥 확장',
  '투자 유치 기회 탐색',
  '아이디어 검증 및 피드백',
  '파트너십 및 협업 탐색',
  '창업 준비 및 정보 수집',
];

type FieldErrors = Partial<Record<keyof RegistrationData, string>>;

function validate(data: RegistrationData): FieldErrors {
  const errors: FieldErrors = {};

  if (!data.name.trim()) {
    errors.name = '이름을 입력해 주세요.';
  } else if (data.name.trim().length < 2) {
    errors.name = '이름은 최소 2자 이상 입력해 주세요.';
  }

  if (!data.email.trim()) {
    errors.email = '이메일을 입력해 주세요.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = '올바른 이메일 형식을 입력해 주세요.';
  }

  if (!data.organization.trim()) {
    errors.organization = '소속을 입력해 주세요.';
  }

  if (!data.purpose.trim()) {
    errors.purpose = '참가 목적을 선택해 주세요.';
  }

  return errors;
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<RegistrationData>({
    name: '',
    email: '',
    organization: '',
    purpose: '',
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const handleChange = (field: keyof RegistrationData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        organization: formData.organization.trim(),
        purpose: formData.purpose.trim(),
      };

      const { error } = await supabase
        .from('event_registrations')
        .insert(payload);

      if (error) throw error;

      setSubmittedName(formData.name.trim());
      setIsSuccess(true);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.';
      if (message.includes('duplicate') || message.includes('unique')) {
        setSubmitError('이미 신청된 이메일입니다. 다른 이메일을 사용해 주세요.');
      } else if (message.includes('network') || message.includes('fetch')) {
        setSubmitError('네트워크 연결에 문제가 있습니다. 잠시 후 다시 시도해 주세요.');
      } else {
        setSubmitError('신청 처리 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return <SuccessMessage name={submittedName} />;
  }

  const inputBaseClass =
    'w-full rounded-xl border bg-white px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 transition-all outline-none focus:ring-2';
  const errorInputClass = 'border-error-500 focus:ring-error-500/20 focus:border-error-500';
  const normalInputClass = 'border-slate-200 focus:ring-navy-500/20 focus:border-navy-500';

  return (
    <section id="register" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="absolute -top-20 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-navy-200/30 via-navy-100/15 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-navy-600">
            신청하기
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl text-balance">
            Founder Connect Day 신청
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 text-balance">
            아래 정보를 입력하시면 신청이 완료됩니다. 모든 항목은 필수입니다.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 lg:p-10"
          noValidate
        >
          {/* Submit error banner */}
          {submitError && (
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-error-200 bg-error-50 p-4 animate-fade-in">
              <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-error-500" />
              <div>
                <p className="text-sm font-bold text-error-600">신청 실패</p>
                <p className="mt-0.5 text-sm text-error-500">{submitError}</p>
              </div>
            </div>
          )}

          <div className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-bold text-navy-900">
                이름 <span className="text-error-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="홍길동"
                disabled={isSubmitting}
                className={`${inputBaseClass} ${errors.name ? errorInputClass : normalInputClass} ${isSubmitting ? 'opacity-60' : ''}`}
              />
              {errors.name && (
                <p className="mt-1.5 text-sm font-medium text-error-500">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-bold text-navy-900">
                이메일 <span className="text-error-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="example@email.com"
                disabled={isSubmitting}
                className={`${inputBaseClass} ${errors.email ? errorInputClass : normalInputClass} ${isSubmitting ? 'opacity-60' : ''}`}
              />
              {errors.email && (
                <p className="mt-1.5 text-sm font-medium text-error-500">{errors.email}</p>
              )}
            </div>

            {/* Organization */}
            <div>
              <label htmlFor="organization" className="mb-2 block text-sm font-bold text-navy-900">
                소속 <span className="text-error-500">*</span>
              </label>
              <input
                id="organization"
                type="text"
                value={formData.organization}
                onChange={(e) => handleChange('organization', e.target.value)}
                placeholder="회사명 / 학교 / 기관명"
                disabled={isSubmitting}
                className={`${inputBaseClass} ${errors.organization ? errorInputClass : normalInputClass} ${isSubmitting ? 'opacity-60' : ''}`}
              />
              {errors.organization && (
                <p className="mt-1.5 text-sm font-medium text-error-500">{errors.organization}</p>
              )}
            </div>

            {/* Purpose */}
            <div>
              <label htmlFor="purpose" className="mb-2 block text-sm font-bold text-navy-900">
                참가 목적 <span className="text-error-500">*</span>
              </label>
              <select
                id="purpose"
                value={formData.purpose}
                onChange={(e) => handleChange('purpose', e.target.value)}
                disabled={isSubmitting}
                className={`${inputBaseClass} ${errors.purpose ? errorInputClass : normalInputClass} ${isSubmitting ? 'opacity-60' : ''}`}
              >
                <option value="">참가 목적을 선택해 주세요</option>
                {purposes.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              {errors.purpose && (
                <p className="mt-1.5 text-sm font-medium text-error-500">{errors.purpose}</p>
              )}
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-navy-700 to-navy-600 py-4 text-base font-bold text-white shadow-lg shadow-navy-500/30 transition-all hover:shadow-xl hover:shadow-navy-500/40 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                신청 처리 중...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                신청하기
              </>
            )}
          </button>

          <p className="mt-4 text-center text-sm text-slate-400">
            신청 후 입력하신 이메일로 확인 메일이 발송됩니다.
          </p>
        </form>
      </div>
    </section>
  );
}

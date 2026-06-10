import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function LegalPageLayout({
  title,
  subtitle,
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-[#f8fbf8] px-5 py-8 transition-colors duration-500 dark:bg-[#06130a] sm:px-6">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-white px-4 py-2 text-sm font-black text-[#16852f] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-50 dark:border-white/10 dark:bg-white/10 dark:text-[#76e08c] dark:hover:bg-white/15"
          >
            <MdArrowBack />
            Voltar para início
          </Link>

          <span className="text-xl font-black text-[#16852f] dark:text-[#76e08c]">
            SEMEAR
          </span>
        </header>

        <section className="rounded-[32px] border border-green-100 bg-white p-7 shadow-[0_18px_45px_rgba(22,133,47,0.08)] transition-colors duration-500 dark:border-white/10 dark:bg-[#0d2214] sm:p-9">
          <span className="rounded-full bg-green-100 px-4 py-1 text-[11px] font-black uppercase tracking-wide text-[#16852f] dark:bg-[#173b24] dark:text-[#76e08c]">
            SEMEAR
          </span>

          <h1 className="mt-5 text-3xl font-black leading-tight text-gray-900 dark:text-white sm:text-4xl">
            {title}
          </h1>

          <p className="mt-3 max-w-3xl text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-300 sm:text-base">
            {subtitle}
          </p>

          <div className="mt-8">{children}</div>
        </section>
      </div>
    </main>
  );
}
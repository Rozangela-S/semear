import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  MdDarkMode,
  MdHome,
  MdLightMode,
  MdPersonAdd,
  MdShield,
  MdTrendingUp,
} from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

import logoSemear from "../../assets/images/LogoOriginal.png";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  sideButtonText?: string;
  sideButtonAction?: () => void;
  sideTitle?: ReactNode;
  sideDescription?: string;
  sideSecondText?: string;
}

export function AuthLayout({
  children,
  title,
  subtitle,
  sideButtonText,
  sideButtonAction,
  sideTitle = "Bem-vindo ao SEMEAR!",
  sideDescription = "Mapeie sua empresa, organize seus dados e aumente suas chances de sucesso.",
  sideSecondText = "Faça sua conta agora mesmo.",
}: AuthLayoutProps) {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("semearTheme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("semearTheme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <main
      translate="no"
      className="relative h-dvh overflow-hidden bg-[#f8fbf8] transition-colors duration-500 dark:bg-[#06130a]"
    >
      <Link
        to="/"
        className="
          fixed left-6 top-5 z-50 flex items-center gap-2
          text-xl font-black text-[#07110a]
          transition hover:scale-[1.02]
          dark:text-white
        "
      >
        <img
          src={logoSemear}
          alt="Logo SEMEAR"
          className="h-10 w-10 object-contain"
        />
        <span className="text-[#07110a] dark:text-white drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]">SEMEAR</span>
      </Link>

      <div className="fixed right-6 top-5 z-50 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setIsDarkMode((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-green-100 bg-white text-lg text-[#16852f] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-50 hover:shadow-lg active:scale-95 dark:border-white/10 dark:bg-[#0d2214] dark:text-[#76e08c] dark:hover:bg-white/10"
          aria-label="Alternar tema"
        >
          {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="hidden h-10 items-center gap-2 rounded-xl border border-green-100 bg-white px-4 text-sm font-black text-[#16852f] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-50 hover:shadow-lg active:scale-95 dark:border-white/10 dark:bg-[#0d2214] dark:text-[#76e08c] dark:hover:bg-white/10 sm:flex"
        >
          <MdHome className="text-lg" />
          Início
        </button>
      </div>

      <div className="grid h-dvh lg:grid-cols-[57%_43%]">
        <section className="relative flex h-dvh items-center justify-center overflow-hidden bg-[#f8fbf8] px-6 pt-14 transition-colors duration-500 dark:bg-[#06130a] sm:px-10 lg:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(101,210,44,0.10),transparent_34%)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(101,210,44,0.07),transparent_34%)]" />

          <div className="relative z-10 mx-auto flex w-full max-w-[540px] scale-[0.82] flex-col justify-center xl:scale-[0.86] 2xl:scale-[0.9]">
            <div className="auth-page-animation mb-4 text-center">
              <h1 className="text-[28px] font-black leading-tight text-[#105d25] transition-colors duration-500 dark:text-[#76e08c] sm:text-[34px] lg:text-[38px]">
                {title}
              </h1>

              {subtitle && (
                <p className="mx-auto mt-2 max-w-[500px] text-sm font-semibold text-gray-500 transition-colors duration-500 dark:text-gray-300">
                  {subtitle}
                </p>
              )}
            </div>

            <div className="auth-page-animation w-full pb-8">
              {children}
            </div>

            {sideButtonText && (
              <button
                type="button"
                onClick={sideButtonAction}
                className="mt-4 text-sm font-black text-[#16852f] transition hover:scale-[1.03] hover:text-[#105d25] dark:text-[#76e08c] dark:hover:text-white lg:hidden"
              >
                {sideButtonText}
              </button>
            )}
          </div>
        </section>

        <aside className="relative hidden h-dvh overflow-hidden bg-[#16852f] px-12 pb-8 pt-20 text-white transition-colors duration-500 dark:bg-[#062f16] lg:flex lg:flex-col">
          <div className="absolute -left-24 -top-28 h-72 w-72 rounded-full border border-white/15 bg-white/10" />
          <div className="absolute -right-24 bottom-20 h-56 w-56 rounded-full bg-white/10" />
          <div className="absolute -bottom-44 left-0 h-80 w-80 rounded-full border border-white/10 bg-lime-300/10" />

          <div className="relative z-10 flex flex-1 items-center">
            <div className="auth-page-animation w-full max-w-[430px]">
              <h2 className="text-[32px] font-black leading-[1.08] drop-shadow-sm">
                {sideTitle}
              </h2>

              <div className="mb-5 mt-4 h-[3px] w-56 rounded-full bg-[#d9ff61]" />

              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg shadow-lg">
                  <MdTrendingUp />
                </div>

                <p className="text-[13px] font-semibold leading-relaxed">
                  {sideDescription}
                </p>
              </div>

              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg shadow-lg">
                  <PiPlantFill />
                </div>

                <p className="text-[13px] font-semibold leading-relaxed">
                  {sideSecondText}
                </p>
              </div>

              {sideButtonText && (
                <button
                  type="button"
                  onClick={sideButtonAction}
                  className="flex h-10 w-56 items-center justify-center gap-3 rounded-full border-2 border-white bg-white/5 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#16852f] hover:shadow-xl active:scale-[0.98]"
                >
                  <MdPersonAdd className="text-lg" />
                  {sideButtonText}
                </button>
              )}
            </div>
          </div>

          <div className="relative z-10 shrink-0 border-t border-white/25 pt-3">
            <div className="flex items-center gap-2">
              <MdShield className="text-lg text-[#d9ff61]" />

              <p className="text-[10px] font-semibold leading-snug text-white/90">
                © {currentYear} SEMEAR.
                <br />
                Colaborando no futuro da sua empresa sempre.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
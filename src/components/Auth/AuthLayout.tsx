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
import { useNavigate } from "react-router-dom";

import logoSemear from "../../assets/images/LogoSemear5.png";

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
      className="relative min-h-dvh w-full overflow-y-auto bg-[#f8fbf8] transition-colors duration-500 dark:bg-[#06130a] lg:flex lg:h-dvh lg:overflow-hidden lg:bg-white lg:dark:bg-[#06130a]"
    >
      <div className="absolute left-5 top-5 z-50 flex items-center gap-5">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 text-sm font-black text-[#16852f] transition-all duration-300 hover:-translate-x-0.5 hover:text-[#105d25] active:scale-95 lg:text-white lg:hover:text-white/85"
        >
          <MdHome className="text-lg" />
          Início
        </button>

        <button
          type="button"
          onClick={() => setIsDarkMode((value) => !value)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-green-100 bg-white/90 text-lg text-[#16852f] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-50 hover:text-[#105d25] active:scale-95 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
          aria-label="Alternar tema"
        >
          {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>

      <header className="relative flex h-[92px] items-center justify-center bg-[#f8fbf8] px-5 transition-colors duration-500 dark:bg-[#06130a] lg:hidden">
        <img
          src={logoSemear}
          alt="Logo SEMEAR"
          className="h-16 object-contain"
        />
      </header>

      <aside className="relative hidden h-dvh w-[46%] flex-col overflow-hidden bg-[#16852f] px-12 py-5 text-white transition-colors duration-500 dark:bg-[#062f16] lg:flex">
        <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full border border-white/15 bg-white/10" />
        <div className="absolute -left-24 bottom-20 h-52 w-52 rounded-full bg-white/10" />
        <div className="absolute -bottom-44 right-0 h-80 w-80 rounded-full border border-white/10 bg-lime-300/10" />

        <div className="relative z-10 flex shrink-0 justify-center">
          <img
            src={logoSemear}
            alt="Logo SEMEAR"
            className="w-[260px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.18)]"
          />
        </div>

        <div className="relative z-10 flex flex-1 items-center justify-center">
          <div className="auth-page-animation -mt-4 w-full max-w-[430px]">
            <h2 className="mb-2 text-[34px] font-black leading-[1.05] drop-shadow-sm">
              {sideTitle}
            </h2>

            <div className="mb-6 h-[3px] w-56 rounded-full bg-white/80" />

            <div className="mb-4 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-xl shadow-lg backdrop-blur-sm">
                <MdTrendingUp />
              </div>

              <p className="text-[14px] font-semibold leading-relaxed">
                {sideDescription}
              </p>
            </div>

            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-xl shadow-lg backdrop-blur-sm">
                <PiPlantFill />
              </div>

              <p className="text-[14px] font-semibold leading-relaxed">
                {sideSecondText}
              </p>
            </div>

            {sideButtonText && (
              <button
                type="button"
                onClick={sideButtonAction}
                className="mx-auto hidden h-11 w-64 items-center justify-center gap-3 rounded-full border-2 border-white bg-white/5 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#16852f] hover:shadow-xl active:scale-[0.98] lg:flex"
              >
                <MdPersonAdd className="text-xl" />
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

      <section className="relative flex min-h-[calc(100dvh-92px)] flex-1 flex-col items-center justify-start overflow-hidden bg-[#f8fbf8] px-6 pb-8 pt-4 transition-colors duration-500 dark:bg-[#06130a] sm:px-10 lg:h-dvh lg:min-h-0 lg:justify-center lg:px-16 lg:py-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(101,210,44,0.12),transparent_35%)] dark:bg-[radial-gradient(circle_at_bottom_right,rgba(101,210,44,0.08),transparent_35%)]" />

        <div className="auth-page-animation relative z-10 mb-5 text-center">
          <h1 className="text-[28px] font-black leading-tight text-[#105d25] transition-colors duration-500 dark:text-[#76e08c] sm:text-[34px] lg:text-[38px]">
            {title}
          </h1>

          {subtitle && (
            <p className="mx-auto mt-2 max-w-[500px] text-sm font-semibold text-gray-500 transition-colors duration-500 dark:text-gray-300">
              {subtitle}
            </p>
          )}
        </div>

        <div className="auth-page-animation relative z-10 w-full max-w-[500px]">
          {children}
        </div>

        {sideButtonText && (
          <button
            type="button"
            onClick={sideButtonAction}
            className="relative z-10 mt-5 text-sm font-black text-[#16852f] transition hover:scale-[1.03] hover:text-[#105d25] dark:text-[#76e08c] dark:hover:text-white lg:hidden"
          >
            {sideButtonText}
          </button>
        )}
      </section>
    </main>
  );
}
import { MdPlayCircle, MdTrendingUp } from "react-icons/md";
import { Link } from "react-router-dom";

import { HeroDashboard } from "./HeroDashboard";

export function HeroSection() {
  return (
    <section
      id="planos"
      className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-10 transition-colors duration-500 sm:px-6 sm:py-12 lg:grid-cols-2 lg:gap-10 lg:py-14"
    >
      <div className="text-center lg:text-left">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1 text-xs font-black uppercase text-[#16852f] dark:bg-[#173b24] dark:text-[#76e08c]">
          <MdTrendingUp />
          Inteligência de mercado
        </span>

        <h1 className="mx-auto max-w-xl text-[32px] font-black leading-[1.12] tracking-tight text-gray-900 transition-colors duration-500 dark:text-white sm:text-[38px] md:text-[44px] lg:mx-0 lg:text-[48px]">
          Descubra o melhor lugar para abrir seu negócio
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-sm font-medium leading-relaxed text-gray-500 transition-colors duration-500 dark:text-gray-300 sm:text-base lg:mx-0">
          O SEMEAR analisa regiões, concorrência e dados de mercado para indicar
          onde seu negócio tem mais chances de sucesso.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
          <Link
            to="/register"
            className="w-full max-w-[260px] rounded-lg bg-[#16852f] px-8 py-4 text-center text-sm font-black text-white shadow-lg shadow-green-700/20 transition hover:-translate-y-0.5 hover:bg-[#105d25] dark:bg-[#21a642] dark:hover:bg-[#2fcf57]"
          >
            Começar agora
          </Link>

          <button
            type="button"
            className="flex w-full max-w-[260px] items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-4 text-sm font-black text-gray-800 transition hover:-translate-y-0.5 hover:bg-gray-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
          >
            <MdPlayCircle className="text-xl" />
            Ver análise exemplo
          </button>
        </div>

        <p className="mx-auto mt-5 max-w-md text-xs font-semibold text-gray-500 dark:text-gray-400 sm:text-sm lg:mx-0">
          Análises baseadas em localização, concorrência e potencial de mercado.
        </p>
      </div>

      <div className="flex justify-center lg:justify-end">
        <HeroDashboard />
      </div>
    </section>
  );
}
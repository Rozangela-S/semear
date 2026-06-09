import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";

export function CTASection() {
  return (
    <section className="bg-white px-6 py-16 transition-colors duration-500 dark:bg-[#06130a]">
      <div
        className="
          mx-auto
          max-w-5xl
          rounded-[28px]
          bg-gradient-to-r
          from-[#16852f]
          to-[#4ade55]
          px-8
          py-10
          text-center
          text-white
          shadow-[0_24px_55px_rgba(22,133,47,0.18)]
          transition-colors
          duration-500
          dark:from-[#0f6d25]
          dark:to-[#21a642]
          dark:shadow-[0_24px_60px_rgba(0,0,0,0.35)]
        "
      >
        <div className="mb-4">
          <span
            className="
              rounded-full
              bg-white/15
              px-4
              py-1.5
              text-[11px]
              font-black
              uppercase
              tracking-wide
              text-white
            "
          >
            COMECE AGORA
          </span>
        </div>

        <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight md:text-4xl">
          Pronto para descobrir onde abrir seu negócio?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-white/90 md:text-base">
          Utilize inteligência de mercado para tomar decisões mais seguras,
          reduzir riscos e aumentar suas chances de sucesso.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/register"
            className="
              flex
              w-full
              max-w-[260px]
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-white
              px-6
              py-3.5
              text-sm
              font-black
              text-[#16852f]
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:scale-[1.02]
              hover:bg-[#f4fff6]
              hover:shadow-2xl
              dark:bg-white
              dark:text-[#16852f]
            "
          >
            <span className="text-[#16852f]">
              Começar análise gratuita
            </span>

            <MdArrowForward className="text-lg text-[#16852f]" />
          </Link>

          <button
            type="button"
            className="
              flex
              w-full
              max-w-[260px]
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-white/50
              px-6
              py-3.5
              text-sm
              font-black
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-white
              hover:bg-white/10
            "
          >
            Ver demonstração

            <MdArrowForward className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}
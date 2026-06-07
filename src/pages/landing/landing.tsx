import {
  MdAttachMoney,
  MdCheck,
  MdInsights,
  MdLocationOn,
  MdShield,
  MdStorefront,
  MdTrendingUp,
  MdWbSunny,
} from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";

import { LandingHeader } from "../../components/Landing/LandingHeader";
import { AuthButton } from "../../components/Auth/AuthButton";

const sectionsWorks = [
  {
    icon: MdWbSunny,
    title: "Análise de Localização",
    text: "Avaliamos regiões com base em dados reais de mercado.",
  },
  {
    icon: MdTrendingUp,
    title: "Concorrência Local",
    text: "Veja quantas empresas do mesmo ramo existem na região.",
  },
  {
    icon: MdAttachMoney,
    title: "Probabilidade de Sucesso",
    text: "Receba uma estimativa baseada em dados e padrões de mercado.",
  },
]

const sectionsAbout = [
  "Escolha a melhor região.",
  "Compare diferentes localizações antes de investir.",
  "Evite alta concorrência.",
  "Tome decisões com dados.",
]


export default function LandingPage() {
  return (
    <div
      translate="no"
       className="min-h-screen overflow-x-hidden bg-[#f8fbf8] pt-[82px] text-zinc-900 transition-colors duration-500 dark:bg-[#06130a] dark:text-white"

    >
      <LandingHeader />

      <section
        id="inicio"
        className="relative mx-auto grid min-h-[calc(100dvh-300px)] max-w-6xl grid-cols-1 items-center gap-12 px-6 py-14 md:grid-cols-2"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(101,210,44,0.14),transparent_35%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(101,210,44,0.08),transparent_35%)]" />

        <div className="auth-page-animation relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-xs font-black text-[#16852f] shadow-sm dark:bg-white/10 dark:text-[#76e08c]">
            <MdInsights className="text-lg" />
            INTELIGÊNCIA DE MERCADO
          </span>

          <h1 className="mt-5 max-w-lg text-4xl font-black leading-tight text-[#105d25] transition-colors duration-500 dark:text-[#76e08c] md:text-5xl">
            Descubra o melhor lugar para abrir seu negócio
          </h1>

          <p className="mt-5 max-w-md text-sm font-semibold leading-relaxed text-gray-500 transition-colors duration-500 dark:text-gray-300">
            O SEMEAR analisa regiões, concorrência e dados de mercado para
            indicar onde seu negócio tem mais chances de sucesso.
          </p>

          <div className="mt-8 flex flex-wrap ">
            <AuthButton
              text="Começar agora"
              type="button"
              icon={<MdStorefront  className="text-xl"/>}
            />
      
            <AuthButton
              text="Ver análise exemplo"
              type="button"
              icon={<MdLocationOn  className="text-xl"/>}
              variant="outline"
              iconSet
            />
          </div>

          <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors duration-500 dark:text-gray-300">
            <MdShield className="text-lg text-[#16852f] dark:text-[#76e08c]" />
            Confiança de mais de 2.000 produtores e empresas.
          </p>
        </div>

        <div className="auth-page-animation relative z-10">
          <div className="rotate-2 rounded-[28px] border border-green-100 bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-colors duration-500 dark:border-white/10 dark:bg-[#0d2214] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <div className="flex h-72 items-center justify-center rounded-[22px] bg-gradient-to-br from-green-50 to-green-100 dark:from-[#173b24] dark:to-[#0f2a19]">
              <PiPlantFill className="text-8xl text-[#16852f] drop-shadow-sm dark:text-[#76e08c]" />
            </div>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="text-sm font-black text-gray-600 dark:text-gray-300">
                  Crescimento Mensal
                </p>
                <p className="text-2xl font-black text-[#16852f] dark:text-[#76e08c]">
                  +24.8%
                </p>
              </div>

              <div className="flex items-end gap-1">
                <span className="h-6 w-1.5 rounded bg-green-400" />
                <span className="h-10 w-1.5 rounded bg-green-500" />
                <span className="h-8 w-1.5 rounded bg-green-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="como-funciona"
        className="bg-[#eff8ee] px-6 py-20 transition-colors duration-500 dark:bg-[#081a0e]"
      >
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black text-[#105d25] dark:text-[#76e08c]">
            Como funciona a análise
          </h2>

          <p className="mt-3 text-sm font-semibold text-gray-500 dark:text-gray-300">
            Tecnologia que entende a terra e potencializa o seu negócio.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {sectionsWorks.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[24px] border border-green-100 bg-white p-8 text-left shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(31,122,44,0.12)] dark:border-white/10 dark:bg-[#0d2214] dark:shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-3xl text-[#16852f] transition-all duration-300 group-hover:scale-110 dark:bg-[#173b24] dark:text-[#76e08c]">
                    <Icon />
                  </div>

                  <h3 className="font-black text-[#105d25] dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-relaxed text-gray-500 dark:text-gray-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-24 md:grid-cols-2"
      >
        <div className="relative grid grid-cols-2 gap-4">
          <div className="h-52 rounded-[26px] bg-[#105d25] shadow-xl dark:bg-[#173b24]" />
          <div className="h-64 rounded-[26px] bg-[#16852f] shadow-xl dark:bg-[#105d25]" />
          <div className="col-start-2 h-44 rounded-[26px] bg-[#105d25] shadow-xl dark:bg-[#173b24]" />
        </div>

        <div>
          <h2 className="max-w-md text-3xl font-black text-[#105d25] dark:text-[#76e08c]">
            Uma plataforma completa para analisar onde abrir seu negócio
          </h2>

          <ul className="mt-6 space-y-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
            {sectionsAbout.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-[#16852f] dark:bg-white/10 dark:text-[#76e08c]">
                  <MdCheck />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="mt-8 inline-flex items-center gap-2 text-sm font-black text-[#16852f] transition-all duration-300 hover:scale-[1.03] hover:text-[#105d25] dark:text-[#76e08c] dark:hover:text-white">
            <MdInsights className="text-xl" />
            Saiba mais sobre nossas funcionalidades →
          </button>
        </div>
      </section>

      <section id="planos" className="mx-auto max-w-5xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[32px] bg-[#16852f] px-8 py-14 text-center text-white shadow-[0_18px_45px_rgba(31,122,44,0.25)] dark:bg-[#062f16]">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 left-10 h-52 w-52 rounded-full bg-lime-300/10" />

          <div className="relative z-10">
            <h2 className="text-3xl font-black">
              Pronto para descobrir onde abrir seu negócio?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-white/85">
              Faça uma análise gratuita e veja o potencial da sua ideia antes de
              investir.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <AuthButton
                text="Começar análise gratuita"
                type="button"
                variant="outline"
                icon
              />
            
              <button className="rounded-full border-2 border-white/40 px-7 py-3 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#16852f] active:scale-[0.98]">
                Falar com especialista
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-green-100 bg-white px-6 py-8 transition-colors duration-500 dark:border-white/10 dark:bg-[#06130a]">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm font-semibold text-gray-500 dark:text-gray-300 md:flex-row">
          <div>
            <strong className="text-[#16852f] dark:text-[#76e08c]">
              SEMEAR
            </strong>
            <p>© 2026 SEMEAR. Cultivando o futuro do empreendedorismo.</p>
          </div>

          <div className="flex gap-6">
            <a>Privacidade</a>
            <a>Termos de Uso</a>
            <a>Suporte</a>
            <a>Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
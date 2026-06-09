import {
  MdCheckCircle,
  MdLocationOn,
  MdStorefront,
  MdTrendingUp,
} from "react-icons/md";

export function AboutSection() {
  const benefits = [
    ["Escolha a melhor região:", "Compare localizações antes de investir."],
    ["Evite alta concorrência:", "Identifique áreas saturadas do mercado."],
    ["Tome decisões com dados:", "Use informações reais, não achismo."],
  ];

  return (
    <section
      id="sobre"
      className="bg-white px-5 py-12 transition-colors duration-500 dark:bg-[#06130a] sm:px-6 lg:py-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1">
          <div className="rounded-2xl border border-green-100 bg-[#f5faf5] p-5 shadow-[0_12px_28px_rgba(22,133,47,0.07)] dark:border-white/10 dark:bg-[#0d2214]">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-xl text-[#16852f] dark:bg-[#173b24] dark:text-[#76e08c]">
              <MdLocationOn />
            </div>

            <p className="text-xs font-black text-gray-400">Melhor região</p>

            <h3 className="mt-1 text-xl font-black text-gray-900 dark:text-white">
              Bancários
            </h3>

            <p className="mt-3 text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-300">
              Região com bom fluxo comercial e potencial de crescimento.
            </p>
          </div>

          <div className="rounded-2xl border border-green-100 bg-[#16852f] p-5 text-white shadow-[0_14px_32px_rgba(22,133,47,0.16)] dark:border-white/10 dark:bg-[#21a642]">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-xl">
              <MdTrendingUp />
            </div>

            <p className="text-xs font-black text-white/70">Potencial</p>

            <h3 className="mt-1 text-3xl font-black">92%</h3>

            <p className="mt-3 text-sm font-medium leading-relaxed text-white/90">
              Estimativa positiva baseada em dados de mercado.
            </p>
          </div>

          <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-[0_12px_28px_rgba(22,133,47,0.07)] dark:border-white/10 dark:bg-[#0d2214] sm:col-span-2">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-xl text-[#16852f] dark:bg-[#173b24] dark:text-[#76e08c]">
                  <MdStorefront />
                </div>

                <p className="text-xs font-black text-gray-400">
                  Concorrência local
                </p>

                <h3 className="mt-1 text-xl font-black text-gray-900 dark:text-white">
                  Moderada
                </h3>
              </div>

              <div className="flex flex-1 items-end gap-3 sm:max-w-[200px]">
                {[38, 55, 72, 48, 66].map((height, index) => (
                  <div
                    key={index}
                    className="flex h-20 flex-1 items-end rounded-full bg-green-50 dark:bg-[#173b24]"
                  >
                    <div
                      className="w-full rounded-full bg-gradient-to-t from-[#16852f] to-[#4ade55]"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="mb-3 inline-flex rounded-full bg-green-100 px-4 py-1 text-[11px] font-black uppercase tracking-wide text-[#16852f] dark:bg-[#173b24] dark:text-[#76e08c]">
            Sobre a plataforma
          </span>

          <h2 className="max-w-xl text-3xl font-black leading-tight text-gray-900 dark:text-white md:text-[38px]">
            Uma plataforma completa para analisar onde abrir seu negócio
          </h2>

          <p className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-300 sm:text-base">
            O SEMEAR combina localização, concorrência e indicadores de mercado
            para ajudar empreendedores a escolherem regiões com maior potencial.
          </p>

          <div className="mt-6 space-y-4">
            {benefits.map(([title, text]) => (
              <div key={title} className="flex items-start gap-3">
                <MdCheckCircle className="mt-0.5 text-lg text-green-400" />

                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">
                    {title}
                  </strong>
                  <br />
                  {text}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#funciona"
            className="mt-6 inline-flex font-black text-[#16852f] transition hover:gap-2 dark:text-[#76e08c]"
          >
            Saiba mais sobre nossas funcionalidades →
          </a>
        </div>
      </div>
    </section>
  );
}
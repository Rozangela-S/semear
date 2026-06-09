import { MdGroups, MdLocationOn, MdTrendingUp } from "react-icons/md";

const features = [
  {
    icon: MdLocationOn,
    title: "Análise de Localização",
    description:
      "Avaliamos regiões com base em dados reais de mercado e identificamos áreas com maior potencial.",
  },
  {
    icon: MdGroups,
    title: "Concorrência Local",
    description:
      "Veja quantas empresas do mesmo ramo existem na região e evite mercados saturados.",
  },
  {
    icon: MdTrendingUp,
    title: "Probabilidade de Sucesso",
    description:
      "Receba uma estimativa baseada em dados para apoiar sua tomada de decisão com mais segurança.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="funciona"
      className="bg-[#f3f8f1] px-5 py-16 transition-colors duration-500 dark:bg-[#081a0e] sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-flex rounded-full bg-green-100 px-4 py-1 text-[11px] font-black uppercase tracking-wide text-[#16852f] dark:bg-[#173b24] dark:text-[#76e08c]">
            Como funciona
          </span>

          <h2 className="text-3xl font-black leading-tight text-gray-900 dark:text-white md:text-4xl">
            Como funciona a análise
          </h2>

          <p className="mt-3 text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-300 sm:text-base">
            Tecnologia que entende o mercado, analisa oportunidades e
            potencializa o crescimento do seu negócio.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-2xl border border-green-100 bg-white p-6 shadow-[0_14px_35px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#16852f]/30 hover:shadow-[0_20px_45px_rgba(22,133,47,0.12)] dark:border-white/10 dark:bg-[#0d2214] dark:hover:border-[#76e08c]/30"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl text-[#16852f] transition-all duration-300 group-hover:scale-110 dark:bg-[#173b24] dark:text-[#76e08c]">
                  <Icon />
                </div>

                <h3 className="mb-3 text-xl font-black leading-tight text-gray-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-300">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { Link } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md";

const plans = [
  {
    name: "Gratuito",
    slug: "gratuito",
    price: "R$ 0",
    description: "Ideal para testar a plataforma.",
    features: [
      "1 análise demonstrativa",
      "Visualização básica de potencial",
      "Acesso à landing e cadastro",
    ],
    highlight: false,
  },
  {
    name: "Empreendedor",
    slug: "empreendedor",
    price: "R$ 29,90",
    description: "Para quem quer analisar melhores regiões.",
    features: [
      "Análises por localização",
      "Comparação de concorrência",
      "Histórico de análises",
      "Recomendações personalizadas",
    ],
    highlight: true,
  },
  {
    name: "Profissional",
    slug: "profissional",
    price: "R$ 59,90",
    description: "Para empresas que analisam múltiplos pontos.",
    features: [
      "Análises ilimitadas",
      "Relatórios completos",
      "Suporte prioritário",
      "Dados avançados de mercado",
    ],
    highlight: false,
  },
];

export function PlansSection() {
  return (
    <section
      id="planos"
      className="
        scroll-mt-20
        bg-white
        px-5
        py-8
        transition-colors
        duration-500
        dark:bg-[#06130a]
        sm:px-6
        lg:py-10
      "
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-7 max-w-2xl text-center">
          <span className="rounded-full bg-green-100 px-4 py-1 text-[11px] font-black uppercase tracking-wide text-[#16852f] dark:bg-[#173b24] dark:text-[#76e08c]">
            Planos
          </span>

          <h2 className="mt-3 text-3xl font-black leading-tight text-gray-900 dark:text-white md:text-[34px]">
            Escolha o plano ideal para começar
          </h2>

          <p className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
            Comece gratuitamente e evolua conforme sua necessidade de análise.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => {
            const isFreePlan = plan.slug === "gratuito";
            const buttonPath = isFreePlan
              ? "/register"
              : `/checkout/${plan.slug}`;

            return (
              <article
                key={plan.name}
                className={`
                  flex
                  min-h-[345px]
                  flex-col
                  rounded-[28px]
                  border
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:shadow-[0_22px_45px_rgba(22,133,47,0.10)]
                  ${
                    plan.highlight
                      ? "border-[#4ade80] bg-[#16852f] text-white shadow-[0_16px_40px_rgba(22,133,47,0.18)]"
                      : "border-green-100 bg-[#f8fbf8] text-gray-900 shadow-sm dark:border-white/10 dark:bg-[#0d2214] dark:text-white"
                  }
                `}
              >
                <h3 className="text-xl font-black">{plan.name}</h3>

                <p
                  className={`mt-2 min-h-[42px] text-sm font-semibold leading-relaxed ${
                    plan.highlight
                      ? "text-white/90"
                      : "text-gray-500 dark:text-gray-300"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-4">
                  <span className="text-3xl font-black">{plan.price}</span>

                  <span
                    className={`ml-1 text-sm font-bold ${
                      plan.highlight
                        ? "text-white/80"
                        : "text-gray-400 dark:text-gray-400"
                    }`}
                  >
                    /mês
                  </span>
                </div>

                <div className="mt-5 space-y-2.5">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <MdCheckCircle
                        className={`mt-0.5 shrink-0 text-base ${
                          plan.highlight
                            ? "text-white"
                            : "text-[#16852f] dark:text-[#76e08c]"
                        }`}
                      />

                      <span
                        className={`text-sm font-semibold leading-relaxed ${
                          plan.highlight
                            ? "text-white/95"
                            : "text-gray-600 dark:text-gray-300"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to={buttonPath}
                  className={`
                    mt-auto
                    flex
                    h-11
                    w-full
                    items-center
                    justify-center
                    rounded-2xl
                    text-sm
                    font-black
                    transition-all
                    duration-300
                    active:scale-[0.98]
                    ${
                      plan.highlight
                        ? "bg-white shadow-md hover:-translate-y-0.5 hover:bg-[#dff8e4] hover:shadow-lg"
                        : "bg-[#eef3ef] shadow-sm hover:-translate-y-0.5 hover:bg-[#dff8e4] hover:shadow-md dark:bg-white/10 dark:hover:bg-[#173b24]"
                    }
                  `}
                >
                  <span
                    style={{
                      color: plan.highlight ? "#111827" : "#16852f",
                      fontWeight: 900,
                      fontSize: "0.95rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {isFreePlan ? "Começar agora" : "Assinar plano"}
                  </span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
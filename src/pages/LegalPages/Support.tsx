import { MdEmail, MdHelpOutline, MdSchedule } from "react-icons/md";
import { LegalPageLayout } from "./LegalPageLayout";

export function Support() {
  const cards = [
    {
      icon: MdEmail,
      title: "E-mail",
      text: "suporte@semear.com.br",
    },
    {
      icon: MdSchedule,
      title: "Atendimento",
      text: "Segunda a sexta, das 8h às 18h.",
    },
    {
      icon: MdHelpOutline,
      title: "Ajuda",
      text: "Consulte nossa documentação e perguntas frequentes.",
    },
  ];

  return (
    <LegalPageLayout
      title="Central de Suporte"
      subtitle="Precisa de ajuda? Nossa equipe está disponível para auxiliar você no uso da plataforma SEMEAR."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <article
              key={card.title}
              className="rounded-3xl border border-green-100 bg-[#f8fbf8] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#06130a]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-2xl text-[#16852f] dark:bg-[#173b24] dark:text-[#76e08c]">
                <Icon />
              </div>

              <h2 className="font-black text-gray-900 dark:text-white">
                {card.title}
              </h2>

              <p className="mt-2 text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-300">
                {card.text}
              </p>
            </article>
          );
        })}
      </div>
    </LegalPageLayout>
  );
}
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { LegalPageLayout } from "./LegalPageLayout";

export function Contact() {
  const contacts = [
    {
      icon: MdEmail,
      title: "E-mail",
      text: "contato@semear.com.br",
    },
    {
      icon: MdPhone,
      title: "Telefone",
      text: "+55 (83) 99999-9999",
    },
    {
      icon: MdLocationOn,
      title: "Localização",
      text: "João Pessoa - PB, Brasil",
    },
  ];

  return (
    <LegalPageLayout
      title="Contato"
      subtitle="Entre em contato conosco para dúvidas, sugestões ou oportunidades de parceria."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {contacts.map((contact) => {
          const Icon = contact.icon;

          return (
            <article
              key={contact.title}
              className="rounded-3xl border border-green-100 bg-[#f8fbf8] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#06130a]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-2xl text-[#16852f] dark:bg-[#173b24] dark:text-[#76e08c]">
                <Icon />
              </div>

              <h2 className="font-black text-gray-900 dark:text-white">
                {contact.title}
              </h2>

              <p className="mt-2 text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-300">
                {contact.text}
              </p>
            </article>
          );
        })}
      </div>
    </LegalPageLayout>
  );
}
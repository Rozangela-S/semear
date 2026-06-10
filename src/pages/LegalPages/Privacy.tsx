import { MdLock, MdSecurity, MdStorage } from "react-icons/md";
import { LegalPageLayout } from "./LegalPageLayout";

export function Privacy() {
  const items = [
    {
      icon: MdStorage,
      title: "Dados coletados",
      text: "Podemos coletar informações como nome, e-mail, CNPJ, dados da empresa e informações necessárias para uso da plataforma.",
    },
    {
      icon: MdLock,
      title: "Uso das informações",
      text: "Os dados são utilizados para oferecer acesso à plataforma, personalizar análises e melhorar a experiência do usuário.",
    },
    {
      icon: MdSecurity,
      title: "Segurança",
      text: "Adotamos boas práticas para proteger as informações armazenadas e evitar acessos não autorizados.",
    },
  ];

  return (
    <LegalPageLayout
      title="Política de Privacidade"
      subtitle="O SEMEAR valoriza a privacidade dos usuários e se compromete a tratar as informações fornecidas com responsabilidade, segurança e transparência."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-3xl border border-green-100 bg-[#f8fbf8] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#06130a]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-2xl text-[#16852f] dark:bg-[#173b24] dark:text-[#76e08c]">
                <Icon />
              </div>

              <h2 className="font-black text-gray-900 dark:text-white">
                {item.title}
              </h2>

              <p className="mt-2 text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-300">
                {item.text}
              </p>
            </article>
          );
        })}
      </div>
    </LegalPageLayout>
  );
}
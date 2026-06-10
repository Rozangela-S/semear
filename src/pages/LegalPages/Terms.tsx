import { MdAccountCircle, MdUpdate, MdVerifiedUser } from "react-icons/md";
import { LegalPageLayout } from "./LegalPageLayout";

export function Terms() {
  const items = [
    {
      icon: MdVerifiedUser,
      title: "Utilização da plataforma",
      text: "O usuário compromete-se a utilizar a plataforma de forma ética, responsável e conforme a legislação vigente.",
    },
    {
      icon: MdAccountCircle,
      title: "Conta do usuário",
      text: "É responsabilidade do usuário manter a confidencialidade de suas credenciais de acesso e das informações fornecidas.",
    },
    {
      icon: MdUpdate,
      title: "Alterações nos serviços",
      text: "O SEMEAR poderá atualizar funcionalidades, planos e recursos para aprimorar continuamente a experiência dos usuários.",
    },
  ];

  return (
    <LegalPageLayout
      title="Termos de Uso"
      subtitle="Ao utilizar a plataforma SEMEAR, o usuário concorda com os termos e condições descritos nesta página."
    >
      <div className="space-y-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="flex gap-4 rounded-3xl border border-green-100 bg-[#f8fbf8] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#06130a]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-2xl text-[#16852f] dark:bg-[#173b24] dark:text-[#76e08c]">
                <Icon />
              </div>

              <div>
                <h2 className="font-black text-gray-900 dark:text-white">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-300">
                  {item.text}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </LegalPageLayout>
  );
}
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-[#f8fbf8] px-5 py-10 transition-colors duration-500 dark:border-white/10 dark:bg-[#06130a] sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-xl font-black text-[#16852f] dark:text-[#76e08c]">
              SEMEAR
            </h2>

            <p className="mt-2 max-w-md text-sm font-medium text-gray-500 dark:text-gray-400">
              Inteligência de mercado para ajudar empreendedores a escolherem
              melhores regiões para abrir e expandir seus negócios.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-5 text-sm font-bold text-gray-500 dark:text-gray-400">
            <Link
              to="/privacidade"
              className="transition hover:text-[#16852f] dark:hover:text-[#76e08c]"
            >
              Privacidade
            </Link>

            <Link
              to="/termos"
              className="transition hover:text-[#16852f] dark:hover:text-[#76e08c]"
            >
              Termos de Uso
            </Link>

            <Link
              to="/suporte"
              className="transition hover:text-[#16852f] dark:hover:text-[#76e08c]"
            >
              Suporte
            </Link>

            <Link
              to="/contato"
              className="transition hover:text-[#16852f] dark:hover:text-[#76e08c]"
            >
              Contato
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-5 text-center text-xs font-semibold text-gray-400 dark:border-white/10 dark:text-gray-500">
          © {new Date().getFullYear()} SEMEAR. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
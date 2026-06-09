export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-[#f8f9fa] px-5 py-8 transition-colors duration-500 dark:border-white/10 dark:bg-[#06130a] sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h2 className="text-lg font-black text-[#16852f] dark:text-[#76e08c]">
            SEMEAR
          </h2>

          <p className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} SEMEAR. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-gray-500 dark:text-gray-400">
          <button className="transition hover:text-[#16852f] dark:hover:text-[#76e08c]">
            Privacidade
          </button>

          <button className="transition hover:text-[#16852f] dark:hover:text-[#76e08c]">
            Termos de Uso
          </button>

          <button className="transition hover:text-[#16852f] dark:hover:text-[#76e08c]">
            Suporte
          </button>

          <button className="transition hover:text-[#16852f] dark:hover:text-[#76e08c]">
            Contato
          </button>
        </div>
      </div>
    </footer>
  );
}
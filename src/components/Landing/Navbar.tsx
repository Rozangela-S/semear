import { useEffect, useState } from "react";
import {
  MdClose,
  MdDarkMode,
  MdLightMode,
  MdMenu,
} from "react-icons/md";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("semearTheme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("semearTheme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md transition-colors duration-500 dark:border-white/10 dark:bg-[#06130a]/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <Link
          to="/"
          className="text-xl font-black text-[#16852f] transition-colors duration-300 dark:text-[#76e08c]"
          onClick={closeMenu}
        >
          SEMEAR
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#planos"
            className="text-sm font-bold text-[#16852f] transition hover:text-[#105d25] dark:text-[#76e08c] dark:hover:text-white"
          >
            Planos
          </a>

          <a
            href="#sobre"
            className="text-sm font-bold text-gray-600 transition hover:text-[#16852f] dark:text-gray-300 dark:hover:text-[#76e08c]"
          >
            Sobre
          </a>

          <a
            href="#funciona"
            className="text-sm font-bold text-gray-600 transition hover:text-[#16852f] dark:text-gray-300 dark:hover:text-[#76e08c]"
          >
            Como funciona
          </a>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            onClick={() => setIsDarkMode((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-green-100 bg-white text-lg text-[#16852f] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-50 active:scale-95 dark:border-white/10 dark:bg-white/10 dark:text-[#76e08c] dark:hover:bg-white/15"
            aria-label="Alternar tema"
          >
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>

          <Link
            to="/login"
            className="text-sm font-black text-[#105d25] transition hover:text-[#16852f] dark:text-gray-200 dark:hover:text-[#76e08c]"
          >
            Entrar
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-[#16852f] px-5 py-2.5 text-sm font-black text-white shadow-md transition hover:bg-[#105d25] dark:bg-[#21a642] dark:hover:bg-[#2fcf57]"
          >
            Criar conta
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setIsDarkMode((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-green-100 bg-white text-lg text-[#16852f] shadow-sm transition active:scale-95 dark:border-white/10 dark:bg-white/10 dark:text-[#76e08c]"
            aria-label="Alternar tema"
          >
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16852f] text-2xl text-white transition active:scale-95 dark:bg-[#21a642]"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-lg dark:border-white/10 dark:bg-[#06130a] md:hidden">
          <nav className="flex flex-col gap-4">
            <a
              href="#planos"
              onClick={closeMenu}
              className="font-black text-[#16852f] dark:text-[#76e08c]"
            >
              Planos
            </a>

            <a
              href="#sobre"
              onClick={closeMenu}
              className="font-black text-gray-700 dark:text-gray-200"
            >
              Sobre
            </a>

            <a
              href="#funciona"
              onClick={closeMenu}
              className="font-black text-gray-700 dark:text-gray-200"
            >
              Como funciona
            </a>

            <div className="mt-3 grid gap-3">
              <Link
                to="/login"
                onClick={closeMenu}
                className="rounded-lg border border-green-100 px-5 py-3 text-center font-black text-[#16852f] dark:border-white/10 dark:text-[#76e08c]"
              >
                Entrar
              </Link>

              <Link
                to="/register"
                onClick={closeMenu}
                className="rounded-lg bg-[#16852f] px-5 py-3 text-center font-black text-white dark:bg-[#21a642]"
              >
                Criar conta
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
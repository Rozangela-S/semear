import { useEffect, useState } from "react";
import {
  MdDarkMode,
  MdLightMode,
  MdLogin,
  MdPersonAdd,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

import logoSemear from "../../assets/images/LogoSemear5.png";
import { NavButton } from "./LandingNavButton";
import { AuthButton } from "../Auth/AuthButton";

type SectionId = "inicio" | "como-funciona" | "sobre" | "planos";

const HEADER_HEIGHT = 82;

export function LandingHeader() {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState<SectionId>("inicio");

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("semearTheme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("semearTheme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const sections: SectionId[] = [
      "inicio",
      "como-funciona",
      "sobre",
      "planos",
    ];

    function handleScroll() {
      let currentSection: SectionId = "inicio";

      const referencePoint = window.scrollY + HEADER_HEIGHT + window.innerHeight * 0.45;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) return;

        if (referencePoint >= section.offsetTop) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  function scrollToSection(id: SectionId) {
    const section = document.getElementById(id);

    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTop - HEADER_HEIGHT,
      behavior: "smooth",
    });

    setActiveSection(id);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] w-full border-b border-green-100/70 bg-white/95 px-6 py-3 shadow-sm backdrop-blur-xl transition-colors duration-500 dark:border-white/10 dark:bg-[#06130a]/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToSection("inicio")}
          className="group flex items-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-95"
        >
          <img
            src={logoSemear}
            alt="Logo SEMEAR"
            className="h-14 object-contain drop-shadow-sm"
          />
        </button>

        <nav className="hidden items-center gap-7 text-sm font-black md:flex">
          <NavButton
            text="Como funciona"
            active={activeSection === "como-funciona"}
            onClick={() => scrollToSection("como-funciona")}
          />

          <NavButton
            text="Sobre"
            active={activeSection === "sobre"}
            onClick={() => scrollToSection("sobre")}
          />

          <NavButton
            text="Planos"
            active={activeSection === "planos"}
            onClick={() => scrollToSection("planos")}
          />
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsDarkMode((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-green-100 bg-white text-xl text-[#16852f] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-50 hover:text-[#105d25] active:scale-95 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            aria-label="Alternar tema"
          >
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-black text-[#16852f] transition-all duration-300 hover:scale-[1.03] hover:bg-green-50 hover:text-[#105d25] active:scale-95 dark:text-[#76e08c] dark:hover:bg-white/10 dark:hover:text-white sm:flex"
          >
            <MdLogin className="text-lg" />
            Entrar
          </button>
         
          <AuthButton
            text="Criar conta"
            type="button"
            onClick={() => navigate("/register")}
            icon={<MdPersonAdd/>}
          />
        </div>
      </div>
    </header>
  );
}
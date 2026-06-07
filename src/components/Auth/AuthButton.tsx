import { MdArrowForward, MdLock } from "react-icons/md";

interface AuthButtonProps {
  text: string;
  type?: "button" | "submit";
}

export function AuthButton({ text, type = "submit" }: AuthButtonProps) {
  return (
    <button
      type={type}
      className="group relative mx-auto flex h-[48px] w-full max-w-[360px] items-center justify-center gap-3 overflow-hidden rounded-full bg-[#16852f] text-[15px] font-black text-white shadow-[0_10px_22px_rgba(31,122,44,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#105d25] hover:shadow-[0_14px_30px_rgba(31,122,44,0.3)] active:scale-[0.98] dark:bg-[#21a642] dark:shadow-[0_10px_28px_rgba(33,166,66,0.25)] dark:hover:bg-[#2fcf57] dark:hover:shadow-[0_16px_35px_rgba(47,207,87,0.25)]"
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_60%)]" />

      <MdLock className="relative z-10 text-lg transition-transform duration-300 group-hover:scale-110" />

      <span className="relative z-10">{text}</span>

      <MdArrowForward className="relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}
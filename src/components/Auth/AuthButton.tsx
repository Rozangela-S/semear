import { MdArrowForward, MdLock } from "react-icons/md";

interface AuthButtonProps {
  text: string;
  type?: "button" | "submit";
}

export function AuthButton({ text, type = "submit" }: AuthButtonProps) {
  return (
    <button
      type={type}
      className="group relative flex h-[68px] w-full items-center justify-center gap-4 overflow-hidden rounded-full bg-gradient-to-r from-[#064d23] via-[#158c2c] to-[#54d90a] text-xl font-black tracking-wide text-white shadow-[0_18px_35px_rgba(31,122,44,0.38)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]"
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <MdLock className="relative z-10 text-2xl" />
      <span className="relative z-10">{text}</span>
      <MdArrowForward className="relative z-10 text-3xl transition group-hover:translate-x-2" />
    </button>
  );
}
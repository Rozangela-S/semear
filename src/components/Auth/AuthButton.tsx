import type { ReactNode } from "react";
import { MdArrowForward, MdLock } from "react-icons/md";

interface AuthButtonProps {
  text: string;
  type?: "button" | "submit";
  onClick?: () => void;
  icon?: ReactNode;
  variant?: "primary" | "outline";
  iconSet?: ReactNode;
}

export function AuthButton({
  text,
  type = "submit",
  onClick,
  icon = <MdLock/>,
  variant = "primary",
  iconSet = <MdArrowForward className="relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-1" />,
}: AuthButtonProps) {
  if (variant === "outline") {
    return (
      <button
        type={type}
        onClick={onClick}
        className="
          group
          flex h-[48px] items-center justify-center gap-3
          rounded-full
          border-2 border-[#16852f]/20
          bg-white
          px-7
          text-[15px] font-black
          text-[#16852f]
          shadow-sm

          transition-all duration-300

          hover:-translate-y-0.5
          hover:bg-green-50
          hover:text-[#105d25]
          hover:border-[#16852f]

          active:scale-[0.98]

          dark:border-[#76e08c]/50
          dark:bg-white/10
          dark:text-[#76e08c]

          dark:hover:bg-white/15
          dark:hover:text-white
        "
      >
        {icon}

        <span className="relative z-10">{text}</span>

        {iconSet}

      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className="
        group
        relative
        mx-auto
        flex h-[48px]
        items-center justify-center gap-3
        overflow-hidden
        rounded-full
        bg-[#16852f]
        px-7
        text-[15px]
        font-black
        text-white

        shadow-[0_10px_22px_rgba(31,122,44,0.25)]

        transition-all duration-300

        hover:-translate-y-0.5
        hover:bg-[#105d25]
        hover:shadow-[0_14px_30px_rgba(31,122,44,0.3)]

        active:scale-[0.98]

        dark:bg-[#21a642]
        dark:shadow-[0_10px_28px_rgba(33,166,66,0.25)]

        dark:hover:bg-[#2fcf57]
      "
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      {icon ?? (
        <MdLock className="relative z-10 text-lg transition-transform duration-300 group-hover:scale-110" />
      )}

      <span className="relative z-10">{text}</span>

      <MdArrowForward className="relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}
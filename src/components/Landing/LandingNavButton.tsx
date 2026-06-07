import { PiPlantFill } from "react-icons/pi";

interface NavButtonProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

export function NavButton({ text, active, onClick }: NavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex items-center gap-1.5 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
        active
          ? "text-[#16852f] underline decoration-[#16852f] decoration-2 underline-offset-8 dark:text-[#76e08c] dark:decoration-[#76e08c]"
          : "text-gray-500 hover:text-[#16852f] dark:text-gray-300 dark:hover:text-white"
      }`}
    >
      <PiPlantFill
        className={`text-base transition-all duration-300 ${
          active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />

      {text}

    </button>
  );
}
import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import type { IconType } from "react-icons";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  type?: string;
  icon: IconType;
}

export function AuthInput({
  label,
  placeholder,
  type = "text",
  icon: Icon,
  ...props
}: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="group w-full">
      <label className="mb-2 block text-left text-sm font-black text-[#105d25] transition-colors duration-300 dark:text-[#76e08c]">
        {label}
      </label>

      <div className="flex h-[58px] items-center rounded-[20px] border border-gray-200 bg-white px-6 shadow-[0_10px_22px_rgba(0,0,0,0.07)] transition-all duration-300 group-focus-within:border-[#2faf44]/60 group-focus-within:ring-4 group-focus-within:ring-[#2faf44]/10 dark:border-[#1d4b2c] dark:bg-[#0d2214] dark:shadow-[0_10px_28px_rgba(0,0,0,0.45)] dark:group-focus-within:border-[#76e08c]/50 dark:group-focus-within:ring-[#76e08c]/10">
        <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-xl text-[#1f7a2c] transition-colors duration-300 dark:bg-[#173b24] dark:text-[#76e08c]">
          <Icon />
        </div>

        <input
          {...props}
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          className="w-full bg-transparent text-base font-semibold text-gray-700 caret-[#16852f] outline-none transition-colors duration-300 selection:bg-[#16852f]/20 placeholder:text-gray-400 dark:text-white dark:caret-[#76e08c] dark:selection:bg-[#76e08c]/20 dark:placeholder:text-gray-500"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-3 text-2xl text-gray-500 transition-all duration-300 hover:scale-110 hover:text-[#1f7a2c] dark:text-gray-400 dark:hover:text-[#76e08c]"
          >
            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
          </button>
        )}
      </div>
    </div>
  );
}
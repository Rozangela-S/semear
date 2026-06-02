import { useState } from "react";
import type { IconType } from "react-icons";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

interface AuthInputProps {
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
}: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="group w-full">
      <label className="mb-2 block text-left text-base font-black text-[#105d25]">
        {label}
      </label>

      <div className="flex h-[68px] items-center rounded-[22px] border border-gray-200 bg-white px-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300 group-focus-within:border-[#2faf44]/60 group-focus-within:ring-4 group-focus-within:ring-[#2faf44]/10">
        <div className="mr-5 flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-2xl text-[#1f7a2c]">
          <Icon />
        </div>

        <input
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          className="w-full bg-transparent text-lg font-semibold text-gray-700 placeholder:text-gray-400 outline-none"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-4 text-3xl text-gray-500 transition hover:text-[#1f7a2c]"
          >
            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
          </button>
        )}
      </div>
    </div>
  );
}
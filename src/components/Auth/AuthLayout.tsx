import { MdPersonAdd, MdShield, MdTrendingUp } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";

import logoSemear from "../../assets/images/LogoSemear5.png";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  sideButtonText: string;
  sideButtonAction?: () => void;
}

export function AuthLayout({
  children,
  title,
  subtitle,
  sideButtonText,
  sideButtonAction,
}: AuthLayoutProps) {
  return (
    <main
      translate="no"
      className="flex h-screen items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#e8f6e9_0%,#f8fbf8_45%,#dff3df_100%)] px-4 py-3"
    >
      <section className="flex h-[540px] w-full max-w-[1120px] overflow-hidden rounded-[30px] bg-white shadow-[0_22px_50px_rgba(0,0,0,0.18)]">
        <aside className="relative flex w-[46%] flex-col overflow-hidden bg-gradient-to-br from-[#064d23] via-[#15862d] to-[#42d719] px-10 py-5 text-white">
          <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full border border-white/15 bg-white/10" />
          <div className="absolute -left-24 bottom-20 h-52 w-52 rounded-full bg-white/10" />
          <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full border border-white/10 bg-lime-300/10" />

          <div className="relative z-10 -mt-2 mb-6 flex justify-center">
            <img
              src={logoSemear}
              alt="Logo SEMEAR"
              className="w-[255px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.18)]"
            />
          </div>

          <div className="relative z-10 mx-auto -mt-3 w-full max-w-[380px]">
            <h2 className="mb-1 text-[34px] font-black leading-[1.02] drop-shadow-sm">
              Bem-vindo
              <br />
              ao SEMEAR!
            </h2>

            <div className="mb-3 h-[3px] w-52 rounded-full bg-gradient-to-r from-[#dfff4f] via-white to-transparent" />

            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg shadow-lg backdrop-blur-sm">
                <MdTrendingUp />
              </div>

              <p className="text-[13px] font-bold leading-snug">
                Mapeie sua empresa, organize seus dados e aumente suas chances
                de sucesso.
              </p>
            </div>

            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg shadow-lg backdrop-blur-sm">
                <PiPlantFill />
              </div>

              <p className="text-[13px] font-bold leading-snug">
                Faça sua conta agora mesmo.
              </p>
            </div>

            <button
              type="button"
              onClick={sideButtonAction}
              className="group mx-auto flex h-11 w-72 items-center justify-center gap-3 rounded-full border-2 border-white bg-white/5 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#15862d] hover:shadow-xl active:scale-[0.98]"
            >
              <MdPersonAdd className="text-xl" />
              {sideButtonText}
            </button>
          </div>

          <div className="relative z-10 mt-auto border-t border-white/25 pt-1">
            <div className="flex items-center gap-2">
              <MdShield className="text-lg text-[#d9ff61]" />

              <p className="text-[11px] font-semibold leading-snug text-white/90">
                © 2024 SEMEAR.
                <br />
                Colaborando no futuro da sua empresa sempre.
              </p>
            </div>
          </div>
        </aside>

        <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-14 py-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(101,210,44,0.18),transparent_35%)]" />

          <div className="relative z-10 mb-6 text-center">
            <h1 className="bg-gradient-to-r from-[#063f1d] via-[#178d2f] to-[#55d80b] bg-clip-text text-[38px] font-black leading-tight text-transparent">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-2 text-sm font-semibold text-gray-400">
                {subtitle}
              </p>
            )}
          </div>

          <div className="relative z-10 w-full">{children}</div>
        </div>
      </section>
    </main>
  );
}
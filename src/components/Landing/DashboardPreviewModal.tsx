import { Link } from "react-router-dom";
import {
  MdClose,
  MdLocationOn,
  MdPeople,
  MdSearch,
  MdTrendingUp,
} from "react-icons/md";

interface DashboardPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DashboardPreviewModal({
  isOpen,
  onClose,
}: DashboardPreviewModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-5 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[28px] bg-white p-5 shadow-2xl dark:bg-[#0d2214] sm:p-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-2xl text-[#16852f] transition hover:bg-green-100 dark:bg-[#173b24] dark:text-[#76e08c]"
        >
          <MdClose />
        </button>

        <div className="pr-12">
          <span className="rounded-full bg-green-100 px-4 py-1 text-[11px] font-black uppercase tracking-wide text-[#16852f] dark:bg-[#173b24] dark:text-[#76e08c]">
            Prévia da plataforma
          </span>

          <h2 className="mt-4 text-3xl font-black text-gray-900 dark:text-white">
            Veja como funciona a análise SEMEAR
          </h2>

          <p className="mt-2 max-w-2xl text-sm font-medium text-gray-500 dark:text-gray-300">
            Simulação visual do painel utilizado para analisar localização,
            concorrência e potencial de mercado.
          </p>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-3xl border border-green-100 bg-[#f8fbf8] p-5 dark:border-white/10 dark:bg-[#06130a]">
            <div className="grid gap-4 sm:grid-cols-[1fr_1.4fr_auto]">
              <div>
                <label className="text-xs font-black text-gray-500 dark:text-gray-300">
                  RAMO
                </label>

                <div className="mt-2 flex h-11 items-center rounded-xl border border-green-100 bg-white px-4 text-sm font-bold text-gray-700 dark:border-white/10 dark:bg-[#0d2214] dark:text-white">
                  Farmácia
                </div>
              </div>

              <div>
                <label className="text-xs font-black text-gray-500 dark:text-gray-300">
                  LOCALIZAÇÃO
                </label>

                <div className="mt-2 flex h-11 items-center gap-2 rounded-xl border border-green-100 bg-white px-4 text-sm font-bold text-gray-700 dark:border-white/10 dark:bg-[#0d2214] dark:text-white">
                  <MdLocationOn className="text-[#16852f] dark:text-[#76e08c]" />
                  João Pessoa - PB
                </div>
              </div>

              <button
                type="button"
                className="mt-6 flex h-11 items-center justify-center gap-2 rounded-xl bg-[#16852f] px-5 text-sm font-black text-white dark:bg-[#21a642]"
              >
                <MdSearch />
                Analisar
              </button>
            </div>

            <div className="relative mt-5 h-[280px] overflow-hidden rounded-2xl bg-green-100 dark:bg-[#173b24]">
              <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_30%,rgba(22,133,47,0.28),transparent_18%),radial-gradient(circle_at_70%_45%,rgba(22,133,47,0.24),transparent_16%),radial-gradient(circle_at_50%_75%,rgba(22,133,47,0.20),transparent_18%)]" />

              <div className="absolute left-[48%] top-[45%] h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#16852f] bg-green-500/20" />

              {[
                ["left-[34%] top-[30%]", "bg-red-500"],
                ["left-[58%] top-[36%]", "bg-red-500"],
                ["left-[66%] top-[58%]", "bg-red-500"],
                ["left-[43%] top-[64%]", "bg-red-500"],
                ["left-[50%] top-[45%]", "bg-[#16852f]"],
              ].map(([position, color], index) => (
                <div
                  key={index}
                  className={`absolute ${position} flex h-8 w-8 items-center justify-center rounded-full ${color} text-white shadow-lg`}
                >
                  <MdLocationOn />
                </div>
              ))}
            </div>
          </section>

          <aside className="space-y-4">
            <div className="rounded-3xl bg-[#16852f] p-6 text-white dark:bg-[#0f6d25]">
              <p className="text-xs font-black uppercase text-white/70">
                Probabilidade de sucesso
              </p>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <h3 className="text-5xl font-black">87%</h3>
                  <p className="mt-2 text-sm font-bold text-white/80">
                    Alta chance de crescimento
                  </p>
                </div>

                <MdTrendingUp className="text-5xl text-white/80" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-green-100 bg-white p-5 dark:border-white/10 dark:bg-[#06130a]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-xl text-[#16852f] dark:bg-[#173b24] dark:text-[#76e08c]">
                    <MdPeople />
                  </div>

                  <div>
                    <p className="text-xs font-black text-gray-400">
                      Concorrência
                    </p>
                    <h4 className="font-black text-gray-900 dark:text-white">
                      Baixa
                    </h4>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-green-100 bg-white p-5 dark:border-white/10 dark:bg-[#06130a]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-xl text-[#16852f] dark:bg-[#173b24] dark:text-[#76e08c]">
                    <MdTrendingUp />
                  </div>

                  <div>
                    <p className="text-xs font-black text-gray-400">
                      Demanda estimada
                    </p>
                    <h4 className="font-black text-gray-900 dark:text-white">
                      Alta
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/login"
              className="flex h-12 items-center justify-center rounded-xl bg-[#16852f] text-sm font-black text-white shadow-lg transition hover:bg-[#105d25] dark:bg-[#21a642] dark:hover:bg-[#2fcf57]"
            >
              Acessar plataforma
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
import {
  MdLocationOn,
  MdShowChart,
  MdStorefront,
  MdTrendingUp,
} from "react-icons/md";

export function HeroDashboard() {
  const chartData = [42, 55, 48, 66, 61, 78, 87];

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
      <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-green-300/30 blur-3xl" />
      <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-[#16852f]/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-green-100 bg-white p-4 shadow-[0_20px_50px_rgba(22,133,47,0.15)] transition-all duration-500 dark:border-white/10 dark:bg-[#0d2214] dark:shadow-[0_24px_55px_rgba(0,0,0,0.35)]">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-black uppercase tracking-wide text-[#16852f] dark:text-[#76e08c]">
              Prévia de análise
            </p>

            <h3 className="mt-1 text-lg font-black leading-tight text-gray-900 dark:text-white">
              Potencial de Mercado
            </h3>

            <p className="mt-1 text-xs font-semibold text-gray-400 dark:text-gray-400">
              João Pessoa • Zona Sul
            </p>
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-xl text-[#16852f] dark:bg-[#173b24] dark:text-[#76e08c]">
            <MdShowChart />
          </div>
        </div>

        <div className="rounded-[20px] bg-[#f5faf5] p-3 dark:bg-[#102b19]">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-black text-gray-700 dark:text-white">
                Crescimento estimado
              </p>

              <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-400">
                Evolução mensal
              </p>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-[#16852f] dark:bg-[#173b24] dark:text-[#76e08c]">
              +24.8%
            </span>
          </div>

          <div className="flex h-20 items-end gap-2">
            {chartData.map((height, index) => (
              <div
                key={index}
                className="flex flex-1 items-end rounded-full bg-white dark:bg-[#06130a]"
              >
                <div
                  className="w-full rounded-full bg-gradient-to-t from-[#16852f] to-[#4ade55] shadow-sm"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>

          <div className="mt-3 flex justify-between text-[9px] font-black text-gray-400">
            <span>Jan</span>
            <span>Fev</span>
            <span>Mar</span>
            <span>Abr</span>
            <span>Mai</span>
            <span>Jun</span>
            <span>Jul</span>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-xl bg-green-50 px-3 py-2 dark:bg-[#173b24]">
            <span className="text-[10px] font-black text-[#16852f] dark:text-[#76e08c]">
              Análise por Inteligência Artificial
            </span>

            <span className="rounded-full bg-[#16852f] px-2.5 py-1 text-[9px] font-black text-white dark:bg-[#21a642]">
              ATIVA
            </span>
          </div>
        </div>

        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {[
            { icon: MdLocationOn, label: "Região", value: "Bancários" },
            { icon: MdTrendingUp, label: "Sucesso", value: "92%" },
            { icon: MdStorefront, label: "Concorrência", value: "Moderada" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-xl border border-green-100 bg-white p-2.5 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-[#102b19]"
              >
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-green-50 text-sm text-[#16852f] dark:bg-[#173b24] dark:text-[#76e08c]">
                  <Icon />
                </div>

                <p className="text-[10px] font-black text-gray-400">
                  {item.label}
                </p>

                <p className="mt-0.5 text-xs font-black text-gray-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-3 rounded-xl bg-[#16852f] px-3 py-2.5 text-white dark:bg-[#21a642]">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold text-white/70">
                Recomendação SEMEAR
              </p>

              <p className="text-[11px] font-black">
                Alto potencial de abertura
              </p>
            </div>

            <span className="shrink-0 rounded-full bg-white/15 px-2.5 py-1 text-[9px] font-black">
              Favorável
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
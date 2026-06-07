import { useMemo, useState } from "react";
import {
  MdDashboard,
  MdBarChart,
  MdHistory,
  MdFavoriteBorder,
  MdSettings,
  MdLogout,
  MdNotifications,
  MdLocationOn,
  MdSearch,
  MdPeople,
  MdTrendingUp,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "../../components/Dashboard/DashboardMenuItem";
import { Pin, RedPin } from "../../components/Dashboard/DashboardPin";
import { InfoCard } from "../../components/Dashboard/DashboardInfoCard";

type MenuType = "painel" | "analise" | "historico" | "favoritos";

const businessResults = {
  Pizzaria: {
    percentage: 68,
    level: "Alta probabilidade de sucesso",
    competition: "Moderada",
    competitionBadge: "Atenção",
    demand: "Alta",
    demandBadge: "Favorável",
  },
  Farmácia: {
    percentage: 74,
    level: "Alta probabilidade de sucesso",
    competition: "Baixa",
    competitionBadge: "Boa",
    demand: "Alta",
    demandBadge: "Favorável",
  },
  Mercado: {
    percentage: 59,
    level: "Probabilidade média de sucesso",
    competition: "Alta",
    competitionBadge: "Atenção",
    demand: "Moderada",
    demandBadge: "Média",
  },
  Padaria: {
    percentage: 81,
    level: "Alta probabilidade de sucesso",
    competition: "Moderada",
    competitionBadge: "Atenção",
    demand: "Alta",
    demandBadge: "Favorável",
  },
};

type BusinessType = keyof typeof businessResults;

export default function Dashboard() {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState<MenuType>("painel");
  const [business, setBusiness] = useState<BusinessType>("Pizzaria");
  const [address, setAddress] = useState("Av. Paulista, 1000 - São Paulo, SP");
  const [analyzedBusiness, setAnalyzedBusiness] =
    useState<BusinessType>("Pizzaria");
  const [wasAnalyzed, setWasAnalyzed] = useState(true);

  const result = useMemo(() => {
    return businessResults[analyzedBusiness];
  }, [analyzedBusiness]);

  function handleAnalyze() {
    if (!address.trim()) {
      alert("Digite um endereço para analisar.");
      return;
    }

    setAnalyzedBusiness(business);
    setWasAnalyzed(true);
    setActiveMenu("analise");
  }

  function handleLogout() {
    localStorage.removeItem("semearAuthenticatedUser");
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <aside className="fixed left-0 top-0 h-full w-64 bg-green-900 px-6 py-8 text-white">
        <h1 className="text-2xl font-bold">SEMEAR</h1>
        <p className="mt-2 text-xs tracking-[0.25em] text-green-300">
          INTELIGÊNCIA DIGITAL
        </p>

        <nav className="mt-12 space-y-3">
          <MenuItem
            active={activeMenu === "painel"}
            icon={<MdDashboard />}
            text="Painel Geral"
            onClick={() => setActiveMenu("painel")}
          />

          <MenuItem
            active={activeMenu === "analise"}
            icon={<MdBarChart />}
            text="Nova Análise"
            onClick={() => setActiveMenu("analise")}
          />

          <MenuItem
            active={activeMenu === "historico"}
            icon={<MdHistory />}
            text="Histórico"
            onClick={() => setActiveMenu("historico")}
          />

          <MenuItem
            active={activeMenu === "favoritos"}
            icon={<MdFavoriteBorder />}
            text="Favoritos"
            onClick={() => setActiveMenu("favoritos")}
          />
        </nav>

        <div className="absolute bottom-8 left-6 right-6 border-t border-green-800 pt-6">
          <MenuItem
            icon={<MdSettings />}
            text="Configurações"
            onClick={() => alert("Configurações em desenvolvimento.")}
          />

          <MenuItem
            icon={<MdLogout />}
            text="Sair"
            red
            onClick={handleLogout}
          />
        </div>
      </aside>

      <main className="ml-64 min-h-screen">
        <header className="flex h-[72px] items-center justify-between border-b px-8">
          <div>
            <h2 className="text-xl font-bold">Olá, Semear!</h2>
            <p className="text-sm text-slate-500">
              Faça uma análise e descubra o melhor lugar para o seu negócio.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => alert("Você não possui novas notificações.")}
            >
              <MdNotifications className="h-5 w-5 text-slate-600" />
            </button>

            <div className="h-10 w-px bg-slate-200" />

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-700 font-bold text-white">
              S
            </div>
          </div>
        </header>

        <section className="p-8 pt-24">
          <div className="rounded-xl border border-green-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.4fr_auto]">
              <div>
                <label className="text-xs font-bold tracking-widest text-zinc-600">
                  RAMO DE ATIVIDADE
                </label>

                <select
                  value={business}
                  onChange={(event) =>
                    setBusiness(event.target.value as BusinessType)
                  }
                  className="mt-2 h-12 w-full rounded-md border border-green-200 bg-green-50 px-4 text-zinc-700 outline-none focus:border-green-600"
                >
                  <option>Pizzaria</option>
                  <option>Farmácia</option>
                  <option>Mercado</option>
                  <option>Padaria</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold tracking-widest text-zinc-600">
                  ENDEREÇO
                </label>

                <div className="mt-2 flex h-12 items-center gap-3 rounded-md border border-green-200 bg-green-50 px-4 focus-within:border-green-600">
                  <MdLocationOn className="h-5 w-5 text-green-700" />

                  <input
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    className="w-full bg-transparent outline-none"
                    placeholder="Digite o endereço"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleAnalyze}
                className="mt-6 flex h-12 items-center justify-center gap-3 rounded-md bg-green-700 px-8 font-semibold text-white transition hover:bg-green-800 active:scale-[0.98]"
              >
                <MdSearch className="h-5 w-5" />
                Analisar localização
              </button>
            </div>
          </div>

          {!wasAnalyzed ? null : (
            <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
              <div className="rounded-xl border border-green-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold">
                  Empresas do mesmo ramo na região
                </h2>

                <p className="mt-1 text-sm text-zinc-600">
                  Veja no mapa as empresas do ramo de{" "}
                  <strong>{analyzedBusiness}</strong> próximas ao endereço
                  escolhido.
                </p>

                <div className="relative mt-4 h-[430px] overflow-hidden rounded-lg bg-green-100">
                  <div className="absolute inset-0 bg-[url('https://tile.openstreetmap.org/12/2047/1362.png')] bg-cover opacity-60" />

                  <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-green-700 bg-green-500/20" />

                  <Pin className="left-[48%] top-[36%]" large />
                  <Pin className="left-[54%] top-[58%]" large />

                  <RedPin className="left-[35%] top-[8%]" />
                  <RedPin className="left-[56%] top-[16%]" />
                  <RedPin className="left-[46%] top-[28%]" />
                  <RedPin className="left-[66%] top-[42%]" />
                  <RedPin className="left-[43%] top-[64%]" />
                  <RedPin className="left-[74%] top-[34%]" />
                  <RedPin className="left-[63%] top-[70%]" />
                  <RedPin className="left-[8%] top-[92%]" />

                  <div className="absolute bottom-4 right-4 space-y-2">
                    <button className="flex h-8 w-8 items-center justify-center rounded bg-white text-xl shadow">
                      +
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded bg-white text-xl shadow">
                      -
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl border border-green-200 bg-white p-7 text-center shadow-sm">
                  <h3 className="text-left text-lg font-bold">
                    Probabilidade de sucesso
                  </h3>

                  <div className="mx-auto mt-8 flex h-36 w-36 items-center justify-center rounded-full border-[10px] border-green-700">
                    <span className="text-4xl font-bold">
                      {result.percentage}%
                    </span>
                  </div>

                  <div className="mt-8 inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
                    {result.level}
                  </div>

                  <p className="mt-6 text-sm leading-relaxed text-zinc-600">
                    Essa região apresenta condições para o ramo de{" "}
                    <strong className="text-zinc-900">
                      {analyzedBusiness}
                    </strong>{" "}
                    baseado no volume de buscas e tráfego local.
                  </p>
                </div>

                <InfoCard
                  icon={<MdPeople />}
                  label="CONCORRÊNCIA NA REGIÃO"
                  title={result.competition}
                  badge={result.competitionBadge}
                  pink
                />

                <InfoCard
                  icon={<MdTrendingUp />}
                  label="DEMANDA ESTIMADA"
                  title={result.demand}
                  badge={result.demandBadge}
                />
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

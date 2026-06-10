import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  MdArrowBack,
  MdCheckCircle,
  MdCreditCard,
  MdLock,
  MdPix,
  MdVerified,
} from "react-icons/md";

const plans = {
  empreendedor: {
    name: "Empreendedor",
    price: 29.9,
    description: "Para quem quer analisar melhores regiões.",
    features: [
      "Análises por localização",
      "Comparação de concorrência",
      "Histórico de análises",
      "Recomendações personalizadas",
    ],
  },
  profissional: {
    name: "Profissional",
    price: 59.9,
    description: "Para empresas que analisam múltiplos pontos.",
    features: [
      "Análises ilimitadas",
      "Relatórios completos",
      "Suporte prioritário",
      "Dados avançados de mercado",
    ],
  },
};

type PlanSlug = keyof typeof plans;
type PaymentMethod = "card" | "pix";

export function Checkout() {
  const navigate = useNavigate();
  const { planSlug } = useParams();

  const selectedPlan = plans[planSlug as PlanSlug];

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

  const discount = useMemo(() => {
    if (appliedCoupon.toUpperCase() === "SEMEAR10") {
      return selectedPlan ? selectedPlan.price * 0.1 : 0;
    }

    return 0;
  }, [appliedCoupon, selectedPlan]);

  const finalPrice = useMemo(() => {
    if (!selectedPlan) return 0;
    return selectedPlan.price - discount;
  }, [discount, selectedPlan]);

  function formatCurrency(value: number) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function handleApplyCoupon() {
    setFeedbackMessage("");

    if (!coupon.trim()) {
      setFeedbackMessage("Digite um cupom para aplicar.");
      return;
    }

    if (coupon.trim().toUpperCase() !== "SEMEAR10") {
      setFeedbackMessage("Cupom inválido. Tente SEMEAR10.");
      return;
    }

    setAppliedCoupon("SEMEAR10");
    setFeedbackMessage("Cupom aplicado com sucesso.");
  }

  function handleConfirmPayment() {
    setIsPaymentCompleted(true);

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  }

  if (!selectedPlan) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8fbf8] px-6 dark:bg-[#06130a]">
        <div className="rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-[#0d2214]">
          <h1 className="text-2xl font-black text-[#105d25] dark:text-[#76e08c]">
            Plano não encontrado
          </h1>

          <Link
            to="/#planos"
            className="mt-6 inline-flex font-black text-[#16852f] dark:text-[#76e08c]"
          >
            ← Voltar para planos
          </Link>
        </div>
      </main>
    );
  }

  if (isPaymentCompleted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8fbf8] px-6 dark:bg-[#06130a]">
        <div className="max-w-md rounded-3xl bg-white p-9 text-center shadow-[0_20px_45px_rgba(22,133,47,0.12)] dark:bg-[#0d2214]">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-5xl text-[#16852f] dark:bg-[#173b24] dark:text-[#76e08c]">
            <MdVerified />
          </div>

          <h1 className="mt-5 text-3xl font-black text-gray-900 dark:text-white">
            Assinatura registrada!
          </h1>

          <p className="mt-3 text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-300">
            Sua assinatura foi registrada com sucesso. Faça login para acessar
            sua conta e começar a utilizar a plataforma.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-y-auto bg-[#f8fbf8] px-5 py-5 pb-12 transition-colors duration-500 dark:bg-[#06130a] sm:px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-5 flex items-center justify-between">
          <Link
            to="/#planos"
            className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-black text-[#16852f] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-50 dark:border-white/10 dark:bg-white/10 dark:text-[#76e08c] dark:hover:bg-white/15"
          >
            <MdArrowBack />
            Voltar para planos
          </Link>

          <span className="hidden text-xl font-black text-[#16852f] dark:text-[#76e08c] sm:block">
            SEMEAR
          </span>
        </header>

        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
          <section className="rounded-[26px] bg-white p-5 shadow-sm transition-colors duration-500 dark:bg-[#0d2214] sm:p-6">
            <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-[#16852f] dark:bg-[#173b24] dark:text-[#76e08c]">
              Checkout seguro
            </span>

            <h1 className="mt-4 text-2xl font-black text-gray-900 dark:text-white sm:text-3xl">
              Finalize sua assinatura
            </h1>

            <p className="mt-2 text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-300">
              Escolha a forma de pagamento para ativar o plano{" "}
              <strong>{selectedPlan.name}</strong>.
            </p>

            <div className="mt-6">
              <p className="mb-3 text-sm font-black text-gray-700 dark:text-gray-200">
                Forma de pagamento
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`flex h-11 items-center justify-center gap-2 rounded-xl border text-sm font-black transition-all duration-300 active:scale-[0.98] ${
                    paymentMethod === "card"
                      ? "border-[#16852f] bg-green-50 text-[#16852f] shadow-sm dark:border-[#76e08c] dark:bg-[#173b24] dark:text-[#76e08c]"
                      : "border-green-100 bg-[#f8fbf8] text-gray-500 hover:border-[#16852f] hover:bg-green-50 dark:border-white/10 dark:bg-[#06130a] dark:text-gray-300 dark:hover:border-[#76e08c] dark:hover:bg-white/10"
                  }`}
                >
                  <MdCreditCard className="text-xl" />
                  Cartão
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("pix")}
                  className={`flex h-11 items-center justify-center gap-2 rounded-xl border text-sm font-black transition-all duration-300 active:scale-[0.98] ${
                    paymentMethod === "pix"
                      ? "border-[#16852f] bg-green-50 text-[#16852f] shadow-sm dark:border-[#76e08c] dark:bg-[#173b24] dark:text-[#76e08c]"
                      : "border-green-100 bg-[#f8fbf8] text-gray-500 hover:border-[#16852f] hover:bg-green-50 dark:border-white/10 dark:bg-[#06130a] dark:text-gray-300 dark:hover:border-[#76e08c] dark:hover:bg-white/10"
                  }`}
                >
                  <MdPix className="text-xl" />
                  PIX
                </button>
              </div>
            </div>

            {paymentMethod === "card" ? (
              <div className="mt-6 space-y-3">
                <label className="block">
                  <span className="text-sm font-black text-gray-700 dark:text-gray-200">
                    Nome no cartão
                  </span>

                  <input
                    placeholder="Digite o nome completo"
                    className="mt-2 h-11 w-full rounded-xl border border-green-100 bg-[#f8fbf8] px-4 font-semibold outline-none transition-all duration-300 focus:border-[#16852f] focus:ring-4 focus:ring-[#16852f]/10 dark:border-white/10 dark:bg-[#06130a] dark:text-white dark:placeholder:text-gray-500 dark:focus:border-[#76e08c] dark:focus:ring-[#76e08c]/10"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-black text-gray-700 dark:text-gray-200">
                    Número do cartão
                  </span>

                  <div className="mt-2 flex h-11 items-center gap-3 rounded-xl border border-green-100 bg-[#f8fbf8] px-4 transition-all duration-300 focus-within:border-[#16852f] focus-within:ring-4 focus-within:ring-[#16852f]/10 dark:border-white/10 dark:bg-[#06130a] dark:focus-within:border-[#76e08c] dark:focus-within:ring-[#76e08c]/10">
                    <MdCreditCard className="text-xl text-[#16852f] dark:text-[#76e08c]" />

                    <input
                      placeholder="0000 0000 0000 0000"
                      className="w-full bg-transparent font-semibold outline-none dark:text-white dark:placeholder:text-gray-500"
                    />
                  </div>
                </label>

                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-black text-gray-700 dark:text-gray-200">
                      Validade
                    </span>

                    <input
                      placeholder="MM/AA"
                      className="mt-2 h-11 w-full rounded-xl border border-green-100 bg-[#f8fbf8] px-4 font-semibold outline-none transition-all duration-300 focus:border-[#16852f] focus:ring-4 focus:ring-[#16852f]/10 dark:border-white/10 dark:bg-[#06130a] dark:text-white dark:placeholder:text-gray-500 dark:focus:border-[#76e08c] dark:focus:ring-[#76e08c]/10"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-black text-gray-700 dark:text-gray-200">
                      CVV
                    </span>

                    <input
                      placeholder="000"
                      className="mt-2 h-11 w-full rounded-xl border border-green-100 bg-[#f8fbf8] px-4 font-semibold outline-none transition-all duration-300 focus:border-[#16852f] focus:ring-4 focus:ring-[#16852f]/10 dark:border-white/10 dark:bg-[#06130a] dark:text-white dark:placeholder:text-gray-500 dark:focus:border-[#76e08c] dark:focus:ring-[#76e08c]/10"
                    />
                  </label>
                </div>
              </div>
            ) : (
              <div className="mt-6 rounded-3xl border border-green-100 bg-green-50 p-5 text-center transition-colors duration-500 dark:border-white/10 dark:bg-[#173b24]">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-2xl bg-white text-5xl text-[#16852f] dark:bg-[#06130a] dark:text-[#76e08c]">
                  <MdPix />
                </div>

                <p className="mt-4 text-sm font-black text-gray-900 dark:text-white">
                  QR Code demonstrativo
                </p>

                <p className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-300">
                  Simulação de pagamento via PIX.
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={handleConfirmPayment}
              className="group mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#16852f] font-black text-white shadow-[0_10px_22px_rgba(31,122,44,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#105d25] active:scale-[0.98] dark:bg-[#21a642] dark:shadow-[0_10px_28px_rgba(33,166,66,0.25)] dark:hover:bg-[#2fcf57]"
            >
              <MdLock className="transition-transform duration-300 group-hover:scale-110" />
              Finalizar contratação
            </button>
          </section>

          <aside className="rounded-[26px] border border-green-100 bg-white p-5 shadow-sm transition-colors duration-500 dark:border-white/10 dark:bg-[#0d2214] lg:sticky lg:top-5">
            <div className="rounded-2xl bg-[#16852f] p-5 text-white dark:bg-[#0f6d25]">
              <p className="text-xs font-black uppercase text-white/70">
                Plano selecionado
              </p>

              <h2 className="mt-2 text-2xl font-black">
                {selectedPlan.name}
              </h2>

              <p className="mt-2 text-sm font-medium text-white/80">
                {selectedPlan.description}
              </p>

              <div className="mt-5">
                <span className="text-3xl font-black">
                  {formatCurrency(finalPrice)}
                </span>
                <span className="text-sm font-bold text-white/70">/mês</span>
              </div>

              {discount > 0 && (
                <p className="mt-2 text-xs font-bold text-white/80">
                  Desconto: {formatCurrency(discount)}
                </p>
              )}
            </div>

            <div className="mt-5">
              <p className="mb-2 text-sm font-black text-gray-700 dark:text-gray-200">
                Cupom de desconto
              </p>

              <div className="flex gap-2">
                <input
                  value={coupon}
                  onChange={(event) => setCoupon(event.target.value)}
                  placeholder="SEMEAR10"
                  className="h-11 min-w-0 flex-1 rounded-xl border border-green-100 bg-[#f8fbf8] px-4 text-sm font-bold text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#16852f] focus:ring-4 focus:ring-[#16852f]/10 dark:border-white/10 dark:bg-[#06130a] dark:text-white dark:placeholder:text-gray-500 dark:focus:border-[#76e08c] dark:focus:ring-[#76e08c]/10"
                />

                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="rounded-xl bg-[#16852f] px-4 text-sm font-black text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#105d25] active:scale-[0.98] dark:bg-[#21a642] dark:hover:bg-[#2fcf57]"
                >
                  Aplicar
                </button>
              </div>

              {feedbackMessage && (
                <p
                  className={`mt-2 text-xs font-bold ${
                    appliedCoupon
                      ? "text-[#16852f] dark:text-[#76e08c]"
                      : "text-red-500"
                  }`}
                >
                  {feedbackMessage}
                </p>
              )}
            </div>

            <div className="mt-5 border-t border-green-100 pt-5 dark:border-white/10">
              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="font-bold text-gray-500 dark:text-gray-300">
                  Subtotal
                </span>
                <span className="font-black text-gray-900 dark:text-white">
                  {formatCurrency(selectedPlan.price)}
                </span>
              </div>

              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="font-bold text-gray-500 dark:text-gray-300">
                  Desconto
                </span>
                <span className="font-black text-gray-900 dark:text-white">
                  - {formatCurrency(discount)}
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-green-100 pt-4 dark:border-white/10">
                <span className="font-black text-gray-900 dark:text-white">
                  Total
                </span>
                <span className="text-xl font-black text-[#16852f] dark:text-[#76e08c]">
                  {formatCurrency(finalPrice)}
                </span>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {[
                "Acesso após login",
                "Ambiente seguro",
                "Cancelamento a qualquer momento",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <MdCheckCircle className="mt-0.5 text-lg text-[#16852f] dark:text-[#76e08c]" />

                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
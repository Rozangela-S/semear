import { MdEmail, MdLock } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import { AuthLayout } from "../../components/Auth/AuthLayout";
import { AuthInput } from "../../components/Auth/AuthInput";
import { AuthButton } from "../../components/Auth/AuthButton";

export function Login() {
  const navigate = useNavigate();

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <AuthLayout
      title="Acesse sua conta"
      subtitle="Gerencie seus dados e acompanhe o crescimento da sua empresa"
      sideButtonText="CADASTRAR"
      sideButtonAction={() => navigate("/register")}
    >
      <form
        onSubmit={handleLogin}
        className="mx-auto flex w-full max-w-[520px] flex-col gap-6"
      >
        <AuthInput
          label="Email ou CNPJ"
          placeholder="Digite seu e-mail ou CNPJ"
          icon={MdEmail}
        />

        <AuthInput
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          icon={MdLock}
        />

        <div className="mt-1 flex flex-col items-center gap-5">
          <Link
            to="/recuperar-senha"
            className="group flex items-center gap-2 bg-gradient-to-r from-[#0b5d25] to-[#55d80b] bg-clip-text text-sm font-black text-transparent transition hover:scale-[1.03]"
          >
            Esqueci minha senha
            <span className="text-[#2faf44] transition group-hover:translate-x-1">
              →
            </span>
          </Link>

          <AuthButton text="ENTRAR" />
        </div>
      </form>
    </AuthLayout>
  );
}
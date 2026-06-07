import { useMemo, useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import { AuthButton } from "../../components/Auth/AuthButton";
import { AuthInput } from "../../components/Auth/AuthInput";
import { AuthLayout } from "../../components/Auth/AuthLayout";

interface StoredUser {
  email: string;
  password: string;
  cnpj?: string;
}

export function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [loginAuthError, setLoginAuthError] = useState("");
  const [passwordAuthError, setPasswordAuthError] = useState("");

  function onlyNumbers(value: string) {
    return value.replace(/\D/g, "");
  }

  function isValidLogin(value: string) {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const isCnpj = onlyNumbers(value).length === 14;

    return isEmail || isCnpj;
  }

  function getStoredUsers(): StoredUser[] {
    const users = localStorage.getItem("semearUsers");

    if (!users) {
      return [];
    }

    return JSON.parse(users);
  }

  const loginError = useMemo(() => {
    if (!login) return "";

    if (!isValidLogin(login)) {
      return "Digite um e-mail ou CNPJ válido.";
    }

    return "";
  }, [login]);

  const passwordError = useMemo(() => {
    if (!password) return "";

    if (password.length < 8) {
      return "Digite uma senha válida.";
    }

    return "";
  }, [password]);

  const canSubmit =
    login.trim() !== "" &&
    password.trim() !== "" &&
    !loginError &&
    !passwordError;

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoginAuthError("");
    setPasswordAuthError("");

    if (!canSubmit) return;

    const users = getStoredUsers();

    const typedLogin = login.trim().toLowerCase();
    const typedCnpj = onlyNumbers(login);

    const user = users.find((storedUser) => {
      const sameEmail =
        storedUser.email.toLowerCase() === typedLogin;

      const sameCnpj =
        storedUser.cnpj &&
        onlyNumbers(storedUser.cnpj) === typedCnpj;

      return sameEmail || sameCnpj;
    });

    if (!user) {
      setLoginAuthError("E-mail ou CNPJ não encontrado.");
      return;
    }

    if (user.password !== password) {
      setPasswordAuthError("Senha incorreta.");
      return;
    }

    localStorage.setItem(
      "semearAuthenticatedUser",
      JSON.stringify({
        email: user.email,
        cnpj: user.cnpj,
      })
    );

    navigate("/home");
  }

  return (
    <AuthLayout
      title="Acesse sua conta"
      subtitle="Gerencie seus dados e acompanhe o crescimento da sua empresa"
      sideTitle={
        <>
          Bem-vindo ao
          <br />
          SEMEAR!
        </>
      }
      sideDescription="Mapeie sua empresa, organize seus dados e aumente suas chances de sucesso."
      sideSecondText="Faça sua conta agora mesmo."
      sideButtonText="CADASTRAR"
      sideButtonAction={() => navigate("/register")}
    >
      <form
        onSubmit={handleLogin}
        className="mx-auto flex w-full max-w-[500px] flex-col gap-2 auth-page-animation"
      >
        <div>
          <AuthInput
            label="Email ou CNPJ"
            placeholder="Digite seu e-mail ou CNPJ"
            icon={MdEmail}
            value={login}
            onChange={(event) => {
              setLogin(event.target.value);
              setLoginAuthError("");
              setPasswordAuthError("");
            }}
          />

          <p className="mt-0.5 h-4 text-xs font-semibold text-red-500">
            {loginError || loginAuthError}
          </p>
        </div>

        <div>
          <AuthInput
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            icon={MdLock}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setPasswordAuthError("");
            }}
          />

          <p className="mt-0.5 h-4 text-xs font-semibold text-red-500">
            {passwordError || passwordAuthError}
          </p>
        </div>

        <Link
          to="/forgot-password"
          className="
            mx-auto mt-1 flex items-center gap-2
            text-sm font-black
            text-[#16852f]
            transition-all duration-300

            hover:scale-[1.03]
            hover:text-[#105d25]

            dark:text-[#76e08c]
            dark:hover:text-white
          "
        >
          Esqueci minha senha
          <span>→</span>
        </Link>

        <div className="mt-3">
          <AuthButton text="ENTRAR" />
        </div>
      </form>
    </AuthLayout>
  );
}
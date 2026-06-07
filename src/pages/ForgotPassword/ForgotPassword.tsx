import { useMemo, useState } from "react";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { AuthButton } from "../../components/Auth/AuthButton";
import { AuthInput } from "../../components/Auth/AuthInput";
import { AuthLayout } from "../../components/Auth/AuthLayout";

interface StoredUser {
  email: string;
}

export function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailAuthError, setEmailAuthError] = useState("");

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function getStoredUsers(): StoredUser[] {
    const users = localStorage.getItem("semearUsers");

    if (!users) {
      return [];
    }

    return JSON.parse(users);
  }

  const emailError = useMemo(() => {
    if (!email) return "";
    if (!isValidEmail(email)) return "Digite um e-mail válido.";
    return "";
  }, [email]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setEmailAuthError("");

    if (!email || emailError) return;

    const users = getStoredUsers();

    const userExists = users.some(
      (user) => user.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (!userExists) {
      setEmailAuthError("E-mail não encontrado.");
      return;
    }

    localStorage.setItem("semearResetEmail", email.trim().toLowerCase());

    navigate("/reset-password");
  }

  return (
    <AuthLayout
      title="Recuperar senha"
      subtitle="Informe seu e-mail para redefinir sua senha"
      sideTitle={
        <>
          Esqueceu sua
          <br />
          senha?
        </>
      }
      sideDescription="Não se preocupe. Você poderá redefinir sua senha em poucos passos."
      sideSecondText="Utilize o e-mail cadastrado em sua conta."
      sideButtonText="VOLTAR"
      sideButtonAction={() => navigate("/login")}
    >
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-[500px] flex-col gap-2"
      >
        <div>
          <AuthInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            icon={MdEmail}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setEmailAuthError("");
            }}
          />

          <p className="mt-0.5 h-4 text-xs font-semibold text-red-500">
            {emailError || emailAuthError}
          </p>
        </div>

        <div className="mt-3">
          <AuthButton text="ENVIAR CÓDIGO" />
        </div>
      </form>
    </AuthLayout>
  );
}
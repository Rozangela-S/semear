import { useMemo, useState } from "react";
import { MdCheckCircle, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { AuthButton } from "../../components/Auth/AuthButton";
import { AuthInput } from "../../components/Auth/AuthInput";
import { AuthLayout } from "../../components/Auth/AuthLayout";

interface StoredUser {
  email: string;
  password: string;
  cnpj?: string;
  name?: string;
  surname?: string;
  company?: string;
}

export function ResetPassword() {
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function isStrongPassword(value: string) {
    const hasMinLength = value.length >= 8;
    const hasLetter = /[A-Za-zÀ-ÿ]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSymbol = /[^A-Za-zÀ-ÿ0-9]/.test(value);

    return hasMinLength && hasLetter && hasNumber && hasSymbol;
  }

  function getStoredUsers(): StoredUser[] {
    const users = localStorage.getItem("semearUsers");

    if (!users) return [];

    return JSON.parse(users);
  }

  const passwordError = useMemo(() => {
    if (!password) return "";
    if (!isStrongPassword(password)) {
      return "Use 8 caracteres, letra, número e símbolo.";
    }
    return "";
  }, [password]);

  const confirmPasswordError = useMemo(() => {
    if (!confirmPassword) return "";
    if (confirmPassword !== password) {
      return "As senhas não coincidem.";
    }
    return "";
  }, [confirmPassword, password]);

  const canSubmit =
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    !passwordError &&
    !confirmPasswordError;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) return;

    const resetEmail = localStorage.getItem("semearResetEmail");

    if (!resetEmail) {
      navigate("/forgot-password");
      return;
    }

    const users = getStoredUsers();

    const updatedUsers = users.map((user) => {
      if (user.email.toLowerCase() === resetEmail.toLowerCase()) {
        return {
          ...user,
          password,
        };
      }

      return user;
    });

    localStorage.setItem("semearUsers", JSON.stringify(updatedUsers));
    localStorage.removeItem("semearResetEmail");

    setSuccess(true);
  }

  if (success) {
    return (
      <AuthLayout
        title="Senha redefinida"
        subtitle="Sua senha foi alterada com sucesso"
        sideTitle={
          <>
            Tudo certo!
            <br />
            Acesso liberado
          </>
        }
        sideDescription="Sua senha foi atualizada com segurança."
        sideSecondText="Agora você já pode acessar sua conta normalmente."
      >
        <div className="mx-auto flex w-full max-w-[430px] flex-col items-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-[#16852f] shadow-[0_12px_25px_rgba(22,133,47,0.18)]">
            <MdCheckCircle size={58} />
          </div>

          <p className="mb-7 text-center text-sm font-semibold leading-relaxed text-gray-500">
            Sua senha foi redefinida com sucesso.
            <br />
            Agora você já pode acessar sua conta.
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              navigate("/login");
            }}
            className="w-full"
          >
            <AuthButton text="VOLTAR AO LOGIN" />
          </form>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Nova senha"
      subtitle="Crie uma nova senha para acessar sua conta"
      sideTitle={
        <>
          Quase lá!
          <br />
          Redefina sua senha
        </>
      }
      sideDescription="Escolha uma senha forte para proteger sua conta."
      sideSecondText="Use letras, números e símbolos."
      sideButtonText="VOLTAR"
      sideButtonAction={() => navigate("/forgot-password")}
    >
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-[500px] flex-col gap-2"
      >
        <div>
          <AuthInput
            label="Nova senha"
            placeholder="Digite sua nova senha"
            type="password"
            icon={MdLock}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <p className="mt-0.5 h-4 text-xs font-semibold text-red-500">
            {passwordError}
          </p>
        </div>

        <div>
          <AuthInput
            label="Confirmar senha"
            placeholder="Confirme sua nova senha"
            type="password"
            icon={MdLock}
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          <p className="mt-0.5 h-4 text-xs font-semibold text-red-500">
            {confirmPasswordError}
          </p>
        </div>

        <div className="mt-3">
          <AuthButton text="ALTERAR SENHA" />
        </div>
      </form>
    </AuthLayout>
  );
}
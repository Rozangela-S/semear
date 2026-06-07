import { useMemo, useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { AuthButton } from "../../components/Auth/AuthButton";
import { AuthInput } from "../../components/Auth/AuthInput";
import { AuthLayout } from "../../components/Auth/AuthLayout";

interface StoredUser {
  email: string;
  password: string;
}

export function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [existingUserError, setExistingUserError] = useState("");

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function isStrongPassword(value: string) {
    const hasMinLength = value.length >= 8;
    const hasLetter = /[A-Za-zÀ-ÿ]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSymbol = /[^A-Za-zÀ-ÿ0-9]/.test(value);

    return hasMinLength && hasLetter && hasNumber && hasSymbol;
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

  const passwordError = useMemo(() => {
    if (!password) return "";
    if (!isStrongPassword(password)) {
      return "Use 8 caracteres, letra, número e símbolo.";
    }
    return "";
  }, [password]);

  const confirmPasswordError = useMemo(() => {
    if (!confirmPassword) return "";
    if (confirmPassword !== password) return "As senhas não coincidem.";
    return "";
  }, [confirmPassword, password]);

  const canSubmit =
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    !emailError &&
    !passwordError &&
    !confirmPasswordError &&
    !existingUserError;

  function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) return;

    const users = getStoredUsers();

    const userAlreadyExists = users.some(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (userAlreadyExists) {
      setExistingUserError("Já existe uma conta cadastrada com este e-mail.");
      return;
    }

    const newUser: StoredUser = {
      email,
      password,
    };

    localStorage.setItem("semearUsers", JSON.stringify([...users, newUser]));
    localStorage.setItem("semearCurrentRegisterEmail", email);

    navigate("/complete-register");
  }

  return (
    <AuthLayout
      title="Crie sua conta"
      subtitle="Cadastre seus dados para começar no SEMEAR"
      sideTitle={
        <>
          Já faz parte do
          <br />
          SEMEAR?
        </>
      }
      sideDescription="Acompanhe indicadores e oportunidades para o crescimento da sua empresa."
      sideSecondText="Mantenha seus dados organizados e tome decisões com confiança."
      sideButtonText="ENTRAR"
      sideButtonAction={() => navigate("/login")}
    >
      <form
        onSubmit={handleRegister}
        className="mx-auto flex w-full max-w-[500px] flex-col gap-1"
      >
        <div>
          <AuthInput
            label="Email"
            placeholder="Digite seu e-mail"
            icon={MdEmail}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setExistingUserError("");
            }}
          />

          <p className="mt-0.5 h-4 text-xs font-semibold text-red-500">
            {emailError || existingUserError}
          </p>
        </div>

        <div>
          <AuthInput
            label="Senha"
            placeholder="Digite sua senha"
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
            placeholder="Confirme sua senha"
            type="password"
            icon={MdLock}
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          <p className="mt-0.5 h-5 text-xs font-semibold text-red-500">
            {confirmPasswordError}
          </p>
        </div>

        <div className="mt-1">
          <AuthButton text="CADASTRAR" />
        </div>
      </form>
    </AuthLayout>
  );
}
import { useMemo, useState } from "react";
import {
  MdBadge,
  MdBusiness,
  MdCheckCircle,
  MdPerson,
  MdWork,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { AuthButton } from "../../components/Auth/AuthButton";
import { AuthInput } from "../../components/Auth/AuthInput";
import { AuthLayout } from "../../components/Auth/AuthLayout";

interface StoredUser {
  email: string;
  password: string;
  name?: string;
  surname?: string;
  cnpj?: string;
  company?: string;
}

export function CompleteRegister() {
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [company, setCompany] = useState("");
  const [existingCnpjError, setExistingCnpjError] = useState("");

  function onlyNumbers(value: string) {
    return value.replace(/\D/g, "");
  }

  function formatCnpj(value: string) {
    const numbers = onlyNumbers(value).slice(0, 14);

    return numbers
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  function getStoredUsers(): StoredUser[] {
    const users = localStorage.getItem("semearUsers");

    if (!users) return [];

    return JSON.parse(users);
  }

  const nameError = useMemo(() => {
    if (!name) return "";
    if (name.trim().length < 2) return "Digite um nome válido.";
    return "";
  }, [name]);

  const surnameError = useMemo(() => {
    if (!surname) return "";
    if (surname.trim().length < 2) return "Digite um sobrenome válido.";
    return "";
  }, [surname]);

  const cnpjError = useMemo(() => {
    if (!cnpj) return "";

    if (onlyNumbers(cnpj).length !== 14) {
      return "Digite um CNPJ com 14 números.";
    }

    return "";
  }, [cnpj]);

  const companyError = useMemo(() => {
    if (!company) return "";
    if (company.trim().length < 2) return "Digite o nome da empresa.";
    return "";
  }, [company]);

  const canSubmit =
    name.trim() !== "" &&
    surname.trim() !== "" &&
    cnpj.trim() !== "" &&
    company.trim() !== "" &&
    !nameError &&
    !surnameError &&
    !cnpjError &&
    !companyError &&
    !existingCnpjError;

  function handleCompleteRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) return;

    const currentEmail = localStorage.getItem("semearCurrentRegisterEmail");

    if (!currentEmail) {
      navigate("/register");
      return;
    }

    const users = getStoredUsers();

    const cnpjAlreadyExists = users.some(
      (user) =>
        user.cnpj &&
        onlyNumbers(user.cnpj) === onlyNumbers(cnpj) &&
        user.email !== currentEmail
    );

    if (cnpjAlreadyExists) {
      setExistingCnpjError("Já existe uma empresa cadastrada com este CNPJ.");
      return;
    }

    const updatedUsers = users.map((user) => {
      if (user.email === currentEmail) {
        return {
          ...user,
          name,
          surname,
          cnpj,
          company,
        };
      }

      return user;
    });

    localStorage.setItem("semearUsers", JSON.stringify(updatedUsers));
    localStorage.removeItem("semearCurrentRegisterEmail");

    setSuccess(true);
  }

  if (success) {
    return (
      <AuthLayout
        title="Cadastro concluído"
        subtitle="Sua conta foi criada com sucesso"
        sideTitle={
          <>
            Tudo pronto!
            <br />
            Vamos começar?
          </>
        }
        sideDescription="Agora você já pode acessar a plataforma e começar a utilizar os recursos do SEMEAR."
        sideSecondText="Gerencie sua empresa de forma simples, organizada e inteligente."
      >
        <div className="mx-auto flex w-full max-w-[430px] flex-col items-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-[#16852f] shadow-[0_12px_25px_rgba(22,133,47,0.18)] dark:bg-[#173b24] dark:text-[#76e08c]">
            <MdCheckCircle size={58} />
          </div>

          <p className="mb-7 text-center text-sm font-semibold leading-relaxed text-gray-500 dark:text-gray-300">
            Sua conta foi criada com sucesso.
            <br />
            Agora você já pode acessar a plataforma.
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              navigate("/login");
            }}
            className="w-full"
          >
            <AuthButton text="ENTRAR" />
          </form>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Complete seu cadastro"
      subtitle="Finalize seus dados para acessar o SEMEAR"
      sideTitle={
        <>
          Falta pouco para
          <br />
          começar!
        </>
      }
      sideDescription="Complete suas informações para personalizar sua experiência na plataforma."
      sideSecondText="Depois disso, você poderá gerenciar sua empresa com mais organização."
      sideButtonText="VOLTAR"
      sideButtonAction={() => navigate("/register")}
    >
      <form
        onSubmit={handleCompleteRegister}
        className="mx-auto flex w-full max-w-[500px] flex-col gap-1 auth-page-animation"
      >
        <div>
          <AuthInput
            label="Nome"
            placeholder="Digite seu nome"
            icon={MdPerson}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <p className="mt-0.5 h-4 text-xs font-semibold text-red-500">
            {nameError}
          </p>
        </div>

        <div>
          <AuthInput
            label="Sobrenome"
            placeholder="Digite seu sobrenome"
            icon={MdBadge}
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
          />

          <p className="mt-0.5 h-4 text-xs font-semibold text-red-500">
            {surnameError}
          </p>
        </div>

        <div>
          <AuthInput
            label="CNPJ"
            placeholder="00.000.000/0000-00"
            icon={MdBusiness}
            value={cnpj}
            onChange={(event) => {
              setCnpj(formatCnpj(event.target.value));
              setExistingCnpjError("");
            }}
          />

          <p className="mt-0.5 h-4 text-xs font-semibold text-red-500">
            {cnpjError || existingCnpjError}
          </p>
        </div>

        <div>
          <AuthInput
            label="Empresa"
            placeholder="Nome da empresa"
            icon={MdWork}
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />

          <p className="mt-0.5 h-4 text-xs font-semibold text-red-500">
            {companyError}
          </p>
        </div>

        <div className="mt-1">
          <AuthButton text="CONCLUIR" />
        </div>
      </form>
    </AuthLayout>
  );
}
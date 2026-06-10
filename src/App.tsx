import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage/LandingPage";

import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { CompleteRegister } from "./pages/CompleteRegister/CompleteRegister";

import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword/ResetPassword";

import Dashboard from "./pages/dashboard/dashboad";

import { Checkout } from "./pages/Checkout/Checkout";

import { Privacy } from "./pages/LegalPages/Privacy";
import { Terms } from "./pages/LegalPages/Terms";
import { Support } from "./pages/LegalPages/Support";
import { Contact } from "./pages/LegalPages/Contact";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Autenticação */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/complete-register"
          element={<CompleteRegister />}
        />

        {/* Recuperação de senha */}
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />
        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Checkout dos planos */}
        <Route
          path="/checkout/:planSlug"
          element={<Checkout />}
        />

        {/* Rodapé */}
        <Route
          path="/privacidade"
          element={<Privacy />}
        />

        <Route
          path="/termos"
          element={<Terms />}
        />

        <Route
          path="/suporte"
          element={<Support />}
        />

        <Route
          path="/contato"
          element={<Contact />}
        />
      </Routes>
    </BrowserRouter>
  );
}
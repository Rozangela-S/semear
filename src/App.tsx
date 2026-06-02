import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Login } from "./pages/Login/Login";

function Home() {
  return (
    <main className="min-h-screen bg-[#f4f6f5] flex items-center justify-center">
      <h1 className="text-4xl font-black text-[#247c2c]">
        Página inicial SEMEAR
      </h1>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />

        <Route path="/cadastro" element={<h1>Cadastro</h1>} />
        <Route path="/completar-cadastro" element={<h1>Completar cadastro</h1>} />
        <Route path="/recuperar-senha" element={<h1>Recuperar senha</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
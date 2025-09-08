import { Routes, BrowserRouter, Route } from "react-router-dom";
import React, { Suspense } from "react";

import Header from "./components/header";
import About from "./pages/about";
import Services from "./pages/services";
import Footer from "./components/footer";

const MainPage = React.lazy(() => import("./pages/mainpage"));
const ContactPage = React.lazy(() => import("./pages/contact"));
const MessagePage = React.lazy(() => import("./pages/messagepage"));
const MessageEdit = React.lazy(() => import("./pages/mensagens/id/messageEdit"))

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="bg-gradient-to-r from-red-200 to-purple-700 min-h-screen">
        <Suspense fallback={<div>Carregando...</div>}>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/sobre" element={<About />}></Route>
            <Route path="/servicos" element={<Services />}></Route>
            <Route path="/contatos" element={<ContactPage />}></Route>
            <Route path="/mensagens" element={<MessagePage />}></Route>
            <Route path="/mensagem/:id" element={<MessageEdit />}></Route>
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

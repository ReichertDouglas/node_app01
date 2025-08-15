import { Routes, BrowserRouter, Route } from "react-router-dom"

import Header from "./components/header"
import MainPage from "./pages/mainpage"
import About from "./pages/about"
import Services from "./pages/services"
import ContactPage from "./pages/contact"
import Footer from "./components/footer"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/sobre" element={<About />}></Route>
          <Route path="/servicos" element={<Services />}></Route>
          <Route path="/contatos" element={<ContactPage />}> </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

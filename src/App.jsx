import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/certificacoes" element={<Certifications />} />
          <Route path="/contato" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

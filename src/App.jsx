import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/certificacoes" element={<Certifications />} />
          <Route path="/contato" element={<Contacts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

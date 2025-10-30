import Axios from "axios";
import { configure } from "axios-hooks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Search } from "./screens/Search";
import { Details } from "./screens/Details";
import { NormalizeStyles } from "./shared/NormalizeStyles";
import { Header } from "./common-components/Header/Header";

const axios = Axios.create({
  baseURL: `${process.env.REACT_APP_SUPER_HERO_API_BASE_URL}/${process.env.REACT_APP_SUPER_HERO_API_KEY}`,
});

configure({ axios });

export default function App() {
  return (
    <>
      <NormalizeStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          {/* ✅ V6 usa a prop 'element' */}
          <Route path="/" element={<Search />} />
          <Route path="/detalhes/:id" element={<Details />} />

          {/* ✅ Página 404 */}
          <Route path="*" element={<p>Página não encontrada</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

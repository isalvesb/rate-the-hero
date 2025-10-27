import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Search } from "./screens/Search";
import { Details } from "./screens/Details";
import { NotFound } from "./screens/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/detalhes/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

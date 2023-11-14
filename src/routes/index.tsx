
import { Routes, Route } from "react-router-dom"
import { PageArticle, PageTools, PageAbout, PageLayout, PageAdm, PageCadastro, PageLogin } from "../pages"
import ProtectedRoute from "./ProtectedRoute"
export const RouteSoftware = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageArticle />} />
        <Route path="artigos" element={<PageArticle />} />
        <Route path="ferramentas" element={<PageTools />} />
        <Route path="sobre" element={<PageAbout />} />
        <Route path="/cadastrar" element={<PageCadastro />} />
        <Route path="/login" element={<PageLogin />} />
        <Route element={<ProtectedRoute/>}>
          <Route path="/adm" element={<PageAdm/>}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

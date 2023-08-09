
import { Routes, Route } from "react-router-dom"
import { PageArticle, PageTools, PageAbout, PageLayout } from "../pages"

export function RouteSoftware() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageArticle />} />
        <Route path="ferramentas" element={<PageTools />} />
        <Route path="sobre" element={<PageAbout />} />
      </Route>
    </Routes>
  )
}

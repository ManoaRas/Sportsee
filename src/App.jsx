import { Route, Routes } from "react-router-dom"

import { Header } from "./components/Header"
import { VerticalMenu } from "./components/VerticalMenu"
import { Home } from "./pages/Home"

export function App() {
  return (
    <>
      <Header />

      <main>
        <VerticalMenu />
        <Routes>
          <Route element={<Home />} path='/' />
        </Routes>
      </main>
    </>
  )
}

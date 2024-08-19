import { Route, Routes } from "react-router-dom"

import { Header } from "./components/Header"
import { Home } from "./pages/Home"

export function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route element={<Home />} path='/' />
        </Routes>
      </main>
    </>
  )
}

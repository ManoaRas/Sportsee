import { Route, Routes } from "react-router-dom"

import { Home } from "./pages/Home"

export function App() {
  return (
    <>
      <main>
        <Routes>
          <Route element={<Home />} path='/' />
        </Routes>
      </main>
    </>
  )
}

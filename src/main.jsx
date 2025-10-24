import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import React, {  } from 'react'
import Inicio from "./Inicio"
import Ficcion from './libros/ficcion.jsx'
import NO_Ficcion from './libros/no-ficcion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}>
          <Route path="libros/ficcion" element={<Ficcion />} />
          <Route path="libros/no-ficcion" element={<NO_Ficcion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

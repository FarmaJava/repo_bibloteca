import React from 'react'
import { useOutletContext } from "react-router-dom";

export default function Ficcion() {

  const lista = useOutletContext();
  const a = lista.filter(libro => libro.categoria === "Ficción");

  return (
    <>
      <h1>Libros de ficción</h1>
      <ul>
        {a.map(libro => (
          <li key={libro.id}>{libro.titulo}</li>
        ))}
      </ul>
    </>
  )
}

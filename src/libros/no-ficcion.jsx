import React from 'react'
import { useOutletContext } from "react-router-dom";

export default function NO_Ficcion() {

  const lista = useOutletContext();
  const a = lista.filter(libro => libro.categoria === "No ficción");

  return (
    <>
      <h1>Libros de No-ficción</h1>
      <ul>
        {a.map(libro => (
          <li key={libro.id}>{libro.titulo}</li>
        ))}
      </ul>
    </>
  )
}

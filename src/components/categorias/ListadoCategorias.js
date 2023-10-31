import '../css/categorias.css'

import React, { useEffect, useState } from 'react';

function ListadoCategorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {

  fetch('https://tienda-sound.onrender.com/productos/api/todaslascategorias')
    .then((response) => response.json())
    .then((resultado) => {

      const dataCategoria = resultado.data;
      setCategorias(dataCategoria);

    })
    .catch((error) => console.error(error));
}, []);
  

return (
    <div className="table-container-categoria"> {/* Aplica la misma clase de contenedor de la tabla */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.id}>
              <td className="idP">{categoria.id}</td>
              <td className="idN">{categoria.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
);
}

export default ListadoCategorias;

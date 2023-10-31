import '../css/productos.css'

import React, { useEffect, useState } from 'react';

function ListadoProductos() {
    const [usuarios, setUsuarios] = useState([]);
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]); // Estado para almacenar las categorías

    useEffect(() => {
      // Realiza las solicitudes a las API de usuarios, productos y categorías en paralelo utilizando Promise.all
      Promise.all([
        fetch('https://tienda-sound.onrender.com/users/api/todoslosusuarios').then((response) => response.json()),
        fetch('https://tienda-sound.onrender.com/productos/api/todoslosproductos').then((response) => response.json()),
        fetch('https://tienda-sound.onrender.com/productos/api/todaslascategorias').then((response) => response.json()) // Obtener las categorías
      ])
      .then(([usuariosData, productosData, categoriasData]) => {
        console.log('Usuarios data:', usuariosData);
        setUsuarios(usuariosData.data);
        setProductos(productosData.data);
        setCategorias(categoriasData.data); // Almacena las categorías en el estado
      })
      .catch((error) => {
        console.error('Error al obtener datos', error);
      });
    }, []);
  
    // Función para obtener el email de un usuario por su ID
    const obtenerEmailPorId = (usuarioId) => {
      const usuarioEncontrado = usuarios.find((usuario) => usuario.id === usuarioId);
      return usuarioEncontrado ? usuarioEncontrado.email : 'Usuario no encontrado';
    };

    // Función para obtener el nombre de la categoría por su ID
    const obtenerCategoriaPorId = (categoriaId) => {
      const categoriaEncontrada = categorias.find((categoria) => categoria.id === categoriaId);
      return categoriaEncontrada ? categoriaEncontrada.nombre : 'Categoría no encontrada';
    };

    return (
      <div className="table-container"> {/* Aplica la clase de contenedor de la tabla */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Envío</th>
              <th>Estado</th>
              <th>Categoría</th>
              <th>Creado Por</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td className="idP">{producto.id}</td>
                <td className="idN">{producto.nombreProducto}</td>
                <td>${producto.precioProducto}</td>
                <td>{producto.envio ? 'Sí' : 'No'}</td>
                <td>{producto.estadoProducto}</td>
                <td>{obtenerCategoriaPorId(producto.categoria_id)}</td>
                <td>{obtenerEmailPorId(producto.usuario_id)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default ListadoProductos;

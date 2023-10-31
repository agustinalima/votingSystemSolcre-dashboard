import '../css/cards.css';
import React, { useEffect, useState } from 'react';

function CardUltimoProducto() {
  const [productoConMayorId, setProductoConMayorId] = useState(null);

  useEffect(() => {
    fetch('https://tienda-sound.onrender.com/productos/api/todoslosproductos')
      .then((response) => response.json())
      .then((resultado) => {
        if (resultado && resultado.data){
          
        const idsProductos = resultado.data.map(producto => producto.id);
        const idMayor = Math.max(...idsProductos);
        const productoConMayorId = resultado.data.find(producto => producto.id === idMayor);
        setProductoConMayorId(productoConMayorId);
      }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {productoConMayorId ? (
        <div className='cardUP'>
          
            <div className='iconoUP'>
             <img src={`https://res.cloudinary.com/dlf8flk1o/image/upload/v1696102067/productos/${productoConMayorId.imagen}`} alt="" />
            </div>
            
            <div className='dataUP'>
                <p>Último producto agregado</p>
                <span>{productoConMayorId.estadoProducto}</span>
                <h3>{productoConMayorId.nombreProducto}</h3>
                {productoConMayorId.envio === 0 ? (
                <p className='envioUP'>Envío gratis</p>) :
                (<p className='envioUP'>Envio {productoConMayorId.envio}</p>
              )}
                <p className='precioUP'>$ {productoConMayorId.precioProducto}</p>
            </div>
            
        </div>
      ) : (
        <p>Cargando usuario...</p>
      )}
    </div>
  );
}

export default CardUltimoProducto;

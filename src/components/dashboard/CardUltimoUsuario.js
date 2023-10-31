import '../css/cards.css';
import React, { useEffect, useState } from 'react';

function CardUltimoUsuario() {
  const [usuarioConMayorId, setUsuarioConMayorId] = useState(null);

  useEffect(() => {
    fetch('https://tienda-sound.onrender.com/users/api/todoslosusuarios')
      .then((response) => response.json())
      .then((resultado) => {
        if (resultado && resultado.data){
          
        const idsUsuarios = resultado.data.map(usuario => usuario.id);
        const idMayor = Math.max(...idsUsuarios);
        const usuarioConMayorId = resultado.data.find(usuario => usuario.id === idMayor);
        setUsuarioConMayorId(usuarioConMayorId);
      }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {usuarioConMayorId ? (

        <div className='card'>

          <div className='icono'>
            <img className='foto' src={`https://res.cloudinary.com/dlf8flk1o/image/upload/v1693692976/avatars/${usuarioConMayorId.imagen}`} alt="" />
          </div>

          <div className='data'>
            <p className='tit'>Último usuario agregado</p>
            <h3>{usuarioConMayorId.nombreCompleto}</h3>
            <p>{usuarioConMayorId.email}</p>
          </div>

        </div>
        
      ) : (
        <p>Cargando usuario...</p>
      )}
    </div>
  );
}

export default CardUltimoUsuario;

import '../css/cards.css';
import React, { useEffect, useState } from 'react';

function CardUltimoUsuario() {
  const [usuarioConMayorId, setUsuarioConMayorId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3002/api/allCandidates')
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

        <div className='card card4'>

          <div className='icono'>
            <img className='foto' src={`https://res.cloudinary.com/dlf8flk1o/image/upload/v1698886319/VotingSystem/Mask_group_hn5qrd.png`} alt="" />
          </div>

          <div className='data'>
            <p className='tit'>Último usuario</p>
            <h3>{usuarioConMayorId.name}</h3>
            <p>{usuarioConMayorId.document}</p>
          </div>

        </div>
        
      ) : (
        <p>Cargando usuario...</p>
      )}
    </div>
  );
}

export default CardUltimoUsuario;

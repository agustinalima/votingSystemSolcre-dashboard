import '../css/cards.css'
import React, { useEffect, useState } from 'react';


function CardTotalUsuarios(){

    const [total, setTotal] = useState(0);

    useEffect(() => {

    fetch('https://tienda-sound.onrender.com/users/api/todoslosusuarios')
      .then((response) => response.json())
      .then((resultado) => {

        const totalUsuarios = resultado.total;
        setTotal(totalUsuarios);

      })
      .catch((error) => console.error(error));
  }, []);


    return(
        <div className='card'>

          <div className='icono'>
            <img src="https://res.cloudinary.com/dlf8flk1o/image/upload/v1696705188/dashboard/users_uyowvc.png" alt=""></img>
          </div>

          <div className='data'>
            <p>Total usuarios</p>
            <h2>{total}</h2>
          </div>
          
        </div>
    );

}



export default CardTotalUsuarios;

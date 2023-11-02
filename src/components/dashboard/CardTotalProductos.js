import '../css/cards.css'
import React, { useEffect, useState } from 'react';


function CardTotalProductos(){

    const [total, setTotal] = useState(0);

    useEffect(() => {

    // Realizar la solicitud a la API para obtener la lista de todos los votantes/candidatos
    fetch('http://localhost:3002/api/allCandidates')
      .then((response) => response.json())
      .then((resultado) => {
        // Obten el número total de productos
        const totalCandidatos = resultado.total;
        setTotal(totalCandidatos);
      })
      .catch((error) => console.error(error));
  }, []);


    return(
        <div className='card card1'>

            <div className='icono'>
              <img src="https://res.cloudinary.com/dlf8flk1o/image/upload/v1698886319/VotingSystem/Group_300_sfc7ch.png" alt=""></img>
            </div>

            <div className='data'>
              <p>Total usuarios</p>
              <h2>{total}</h2>
            </div>

        </div>
    );

}



export default CardTotalProductos;

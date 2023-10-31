import '../css/cards.css'
import React, { useEffect, useState } from 'react';


function CardTotalCategorias(){

    const [total, setTotal] = useState(0);

    useEffect(() => {

    fetch('https://tienda-sound.onrender.com/productos/api/todaslascategorias')
      .then((response) => response.json())
      .then((resultado) => {

        const totalCategorias = resultado.total;
        setTotal(totalCategorias);

      })
      .catch((error) => console.error(error));
  }, []);


    return(
        <div className='card'>
          
          <div className='icono'>
            <img src="https://res.cloudinary.com/dlf8flk1o/image/upload/v1696705187/dashboard/categories_s0psvh.png" alt=""></img>
          </div> 

          <div className='data'>
            <p>Total categorías</p>
            <h2>{total}</h2>
          </div> 

        </div>
    );

}



export default CardTotalCategorias;

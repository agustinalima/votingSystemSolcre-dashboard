import '../css/cards.css'
import React, { useEffect, useState } from 'react';


function CardTotalCategorias(){

    const [total, setTotal] = useState(0);

    useEffect(() => {

    fetch('http://localhost:3002/api/allCandidates')
      .then((response) => response.json())
      .then((resultado) => {

        // Filtra los candidatos que tienen is_candidate igual a 1
        const candidatosFiltrados = resultado.filter((candidato) => candidato.is_candidate === 1);

        // Obtiene el total de candidatos después de aplicar el filtro
        const totalCandidatos = candidatosFiltrados.length;

        setTotal(totalCandidatos);

      })
      .catch((error) => console.error(error));
  }, []);


    return(
        <div className='card'>
          
          <div className='icono'>
            <img src="https://res.cloudinary.com/dlf8flk1o/image/upload/v1698886319/VotingSystem/Group_10_pzsu22.png" alt=""></img>
          </div> 

          <div className='data'>
            <p>Total candidatos</p>
            <h2>{total}</h2>
          </div> 

        </div>
    );

}



export default CardTotalCategorias;

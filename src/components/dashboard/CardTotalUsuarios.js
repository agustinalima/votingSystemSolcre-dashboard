import '../css/cards.css'
import React, { useEffect, useState } from 'react';


function CardTotalUsuarios(){

    const [total, setTotal] = useState(0);

    useEffect(() => {

    fetch('http://localhost:3002/api/allVotes')
      .then((response) => response.json())
      .then((resultado) => {

        const totalVotos = resultado.total;
        setTotal(totalVotos);

      })
      .catch((error) => console.error(error));
  }, []);


    return(
        <div className='card'>

          <div className='icono'>
            <img src="https://res.cloudinary.com/dlf8flk1o/image/upload/v1698886319/VotingSystem/Group_301_pnloqh.png" alt=""></img>
          </div>

          <div className='data'>
            <p>Total votos</p>
            <h2>{total}</h2>
          </div>
          
        </div>
    );

}



export default CardTotalUsuarios;

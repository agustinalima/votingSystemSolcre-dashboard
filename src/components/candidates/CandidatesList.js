import '../css/CandidatesList.css'

import React, { useEffect, useState } from 'react';

function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {

  fetch('http://localhost:3002/api/allCandidates')
    .then((response) => response.json())
    .then((resultado) => {

      const dataCandidates = resultado.data;
      setCandidates(dataCandidates);

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
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id}>
              <td className="idP">{candidate.id}</td>
              <td className="idN">{candidate.name}</td>
              <td className="idN">{candidate.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
);
}

export default CandidateList;

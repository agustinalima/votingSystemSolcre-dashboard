import '../css/CandidatesList.css'

import React, { useEffect, useState } from 'react';

function VotesList() {
  const [votes, setVotes] = useState([]);
  const [candidatesData, setCandidatesData] = useState({});

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:3002/api/allVotes').then((response) => response.json()),
      fetch('http://localhost:3002/api/allCandidates').then((response) => response.json())
    ])
      .then(([votesData, candidatesData]) => {
        setVotes(votesData.data);

        // Crear un mapa de candidatos usando su ID como clave y nombre y apellido como valor
        const candidatesMap = {};
        candidatesData.data.forEach(candidate => {
          candidatesMap[candidate.id] = `${candidate.name} ${candidate.lastName}`;
        });
        setCandidatesData(candidatesMap);
      })
      .catch((error) => console.error(error));
  }, []);


 // Función para formatear la fecha como día y mes
 const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'short' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};


  

return (
    <div className="table-container-categoria list2">

      <div className="dataList">
      <h2>Últimos votos</h2>
      </div>
      

      <table>
        <thead>
          <tr>
          <th>Id Votante</th>
            <th>Candidato</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {votes.map((vote) => (
            <tr key={vote.id}>
              <td className="idP">{vote.voter_id}</td>
              <td>{candidatesData[vote.candidate_id]}</td>
              
              <td>{formatDate(vote.date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
);
}

export default VotesList;

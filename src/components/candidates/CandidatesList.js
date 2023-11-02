import '../css/CandidatesList.css'

import React, { useEffect, useState } from 'react';

function CandidateList() {
  const [candidates, setCandidates] = useState([]);
  const [votes, setVotes] = useState([]);

  useEffect(() => {


  Promise.all([
    fetch('http://localhost:3002/api/allCandidates').then((response) => response.json()),
    fetch('http://localhost:3002/api/allVotes').then((response) => response.json())
  ])
    .then(([dataCandidates,dataVotes]) => {
      setCandidates(dataCandidates.data);
      setVotes(dataVotes.data);
    })
    .catch((error) => console.error(error));
}, []);
  


const filteredCandidates = candidates.filter(candidate => candidate.is_candidate === 1);

  const candidatesWithVotes = filteredCandidates.map(candidate => {
    const numberOfVotes = votes.reduce((count, vote) => {
      return vote.candidate_id === candidate.id ? count + 1 : count;
    }, 0);
    return { ...candidate, numberOfVotes };
  });

  const sortedCandidates = candidatesWithVotes.sort((a, b) => b.numberOfVotes - a.numberOfVotes);


return (
    <div className="table-container-categoria list1">
      <div className='dataList'>
      <h2>Candidatos más votados</h2>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Votos</th>
          </tr>
        </thead>
        <tbody>
          {sortedCandidates.map((candidate) => (
            <tr key={candidate.id}>
              <td className="idP">{candidate.id}</td>
              <td className="idN">{candidate.name}</td>
              <td className="idN">{candidate.lastName}</td>
              <td className="idN">{candidate.numberOfVotes}</td> {/* Muestra el número de votos */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
);
}

export default CandidateList;

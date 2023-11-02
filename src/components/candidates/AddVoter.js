import '../css/CandidatesList.css'

import React, { useEffect, useState } from 'react';

function AddVoter() {

  const [formData, setFormData] = useState({
    document: '',
    name: '',
    lastName: '',
    dob: null,
    is_candidate: '0',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3002/api/allCandidates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Usuario agregado correctamente.');
      } else {
        console.error('Error al agregar usuario.');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  
return (
    <div className="table-container-categoria list3">
      <div className="dataList">
      <h2>Agregar usuario</h2>
      </div>

      <form id="addVoter" onSubmit={handleSubmit}>

    <label htmlFor="documento">Documento:</label>
    <input type="text" id="documento" name="documento" required></input>

    <label htmlFor="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required></input>

    <label htmlFor="apellido">Apellido:</label>
    <input type="text" id="apellido" name="apellido" required></input>

    <label htmlFor="esCandidato">¿Es Candidato?</label>
    <div className='radio-container'>
        <input type="radio" id="esCandidatoSi" name="esCandidato" value="1" checked={formData.esCandidato === '1'} onChange={handleInputChange} />
        <label htmlFor="esCandidatoSi">Sí</label>
        <input type="radio" id="esCandidatoNo" name="esCandidato" value="0" checked={formData.esCandidato === '0'} onChange={handleInputChange} />
        <label htmlFor="esCandidatoNo">No</label>
    </div>

    <button type="submit">Agregar Usuario</button>

  </form>

      
    </div>
);
}

export default AddVoter;

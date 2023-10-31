import '../css/cards.css'
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


function CardChart() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch('https://tienda-sound.onrender.com/productos/api/categoria1'),
          fetch('https://tienda-sound.onrender.com/productos/api/categoria2'),
          fetch('https://tienda-sound.onrender.com/productos/api/categoria3'),
          fetch('https://tienda-sound.onrender.com/productos/api/categoria4'),
          fetch('https://tienda-sound.onrender.com/productos/api/categoria5'),
          fetch('https://tienda-sound.onrender.com/productos/api/categoria6')
        ]);
        
        const data = await Promise.all(responses.map(response => response.json()));
        const totals = data.map(responseData => responseData.total);

       setData(totals);
       setIsLoading(false);
      } catch (error) {
     console.error('Error fetching data:', error);
      }
      };

      fetchData();
  }, [data, isLoading]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (

    <div className='cardChart'>

      <div className='dataChart'>
        <p>Productos por</p>
        <h2>Categoría</h2>
      </div>

      <div className='icono'>
        <BarChart
          width={600}
          height={200}
          data={data.map((Total, index) => ({ name: `${index + 1}`, Total }))}
          margin={{right: 100}}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Total" fill="#4631FF" barSize={40} />
        </BarChart>
      </div>

    </div>
  );
}




export default CardChart;

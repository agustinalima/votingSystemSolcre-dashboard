import './App.css';
import Sidebar from './components/Sidebar';
import AdminCard from './components/AdminCard';


import CardTotalCategorias from './components/dashboard/CardTotalCategorias';
import CardTotalProductos from './components/dashboard/CardTotalProductos';
import CardTotalUsuarios from './components/dashboard/CardTotalUsuarios';
import CardUltimoUsuario from './components/dashboard/CardUltimoUsuario';
import CandidatesList from './components/candidates/CandidatesList';


function App() {
  return (
    <div className='body'>
      <div>
        <Sidebar />
      </div>
      <AdminCard />

      <div className='main-content'>


      <div className='page-title'>
                <span className='tiendasound-tag'>Voting System</span>
                <h1>Dashboard</h1>
      </div>

      <section className='allCards'> 
      <CardTotalProductos />
      <CardTotalUsuarios />
      
      <CardTotalCategorias />
      <CardUltimoUsuario />
      <CandidatesList />
      </section>

      </div>

    </div>
  );
}




export default App;

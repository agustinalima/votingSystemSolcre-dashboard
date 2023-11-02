import Sidebar from '../components/Sidebar';
import AdminCard from '../components/AdminCard';


import CardTotalCategorias from '../components/dashboard/CardTotalCategorias';
import CardTotalProductos from '../components/dashboard/CardTotalProductos';
import CardTotalUsuarios from '../components/dashboard/CardTotalUsuarios';
import CardUltimoUsuario from '../components/dashboard/CardUltimoUsuario';
import CandidatesList from '../components/candidates/CandidatesList';
import VotesList from '../components/candidates/VotesList';
import AddVoter from '../components/candidates/AddVoter';


function Dashboard(){
    return(
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
      </section>

      <section className='allLists'>
      <CandidatesList />
      <VotesList />
      <AddVoter />
      </section>

      </div>

    </div>
    );
}


export default Dashboard;
import '../components/css/cards.css'

import CardTotalProductos from '../components/dashboard/CardTotalProductos';
import CardTotalUsuarios from '../components/dashboard/CardTotalUsuarios';
import CardTotalCategorias from '../components/dashboard/CardTotalCategorias';
import CardUltimoUsuario from '../components/dashboard/CardUltimoUsuario';
import CardUltimoProducto from '../components/dashboard/CardUltimoProducto';
import CardChart from '../components/dashboard/CardChart';


function Dashboard(){
    return(
        <div>
            <div className='page-title'>
                <span className='tiendasound-tag'>Tienda Sound</span>
                <h1>Dashboard</h1>
            </div>

            <section className='allCards'>
                <CardTotalProductos />
                <CardTotalUsuarios />
                <CardTotalCategorias />
                <CardUltimoUsuario />
                <CardChart />
                <CardUltimoProducto />
            </section>
        </div>
    );
}


export default Dashboard;
import ListadoCategorias from '../components/categorias/ListadoCategorias';


function Categorias(){
    return(
        <div>

        <div className='page-title'>
        <span className='tiendasound-tag'>Tienda Sound</span>
        <h1>Todos las categorias</h1>
        </div>

        <ListadoCategorias />

        </div>
    );
}

export default Categorias;
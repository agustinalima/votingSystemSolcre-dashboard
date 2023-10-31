import ListadoProductos from '../components/productos/ListadoProductos';

function Productos(){
    return(
        <div>

        <div className='page-title'>
        <span className='tiendasound-tag'>Tienda Sound</span>
        <h1>Todos los productos</h1>
        </div>

        <ListadoProductos />

        </div>
    );
}

export default Productos;
import {Link} from 'react-router-dom';
import './css/sidebar.css'

function Sidebar(){
    return(
        <div className='sidebar'>

            <div className='logo-container'>
            <img src="https://res.cloudinary.com/dlf8flk1o/image/upload/v1698782038/VotingSystem/logo_mh2raj.png" alt=""></img>
            </div>
            <nav>
                <ul>
                <li><img src="https://res.cloudinary.com/dlf8flk1o/image/upload/v1698787333/VotingSystem/3d-square_1_ozxbkh.png" alt=""></img><Link to="/dashboard">Dashboard</Link> </li>
                </ul>

                <span className='logout'><img src="https://res.cloudinary.com/dlf8flk1o/image/upload/v1696721682/dashboard/logout_tnsdpl.svg" alt=""></img>Log out</span>
            </nav>
        </div>

    );

}



export default Sidebar;
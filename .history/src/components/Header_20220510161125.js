import {Link} from 'react-router-dom'
function Header(){
    return(
        <div className="navbar nabvar-dark bg-dark p-2">
               <div className="navbar navbar-brand text-white">Logo</div>
               <div>
                   <button className="btn btn-primary">Logout</button>
                   <Link to="/reservations">Reservations</Link>
               </div>
        </div>
    )
}

export default Header
import { Link } from 'react-router-dom'
function Header(){
    return(
        <div className="navbar nabvar-dark bg-dark p-2">
               <div className="navbar navbar-brand text-white">Logo</div>
               <div>
                    <Link className='btn me-3 text-white' to="/reservations" >Reservations</Link>

                    <Link className="btn btn-primary" to="/login">Logout</Link>
               </div>
        </div>
    )
}

export default Header
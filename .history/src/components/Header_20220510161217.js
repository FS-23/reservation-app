import { Link } from 'react-router-dom'
function Header(){
    return(
        <div className="navbar nabvar-dark bg-dark p-2">
               <div className="navbar navbar-brand text-white">Logo</div>
               <div>
                    <Link className='btn me-3 text-white' to="/reservations" >Reservations</Link>

                   <button className="btn btn-primary">Logout</button>
               </div>
        </div>
    )
}

export default Header
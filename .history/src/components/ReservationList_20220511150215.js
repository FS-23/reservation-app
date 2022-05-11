import { getReservations } from '../APIS/Reservation'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ReservationList() {
    let [reservations , setReservations] = useState([])
    useEffect(()=>{
        let datas =getReservations()
        setReservations(datas)
    },[])
    return (
       <div>
           {
             //  reservations.length == 0 ? "Chargement en cours...." :  reservations.map((.....))
           }

            <Link className='btn btn-primary' to="/reservations/add">Ajouter une reservation</Link>
       </div>
    )
}

export default ReservationList
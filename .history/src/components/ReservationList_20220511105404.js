import { getReservations } from '../APIS/Reservation'
import { useEffect, useState } from 'react'

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
       </div>
    )
}

export default ReservationList
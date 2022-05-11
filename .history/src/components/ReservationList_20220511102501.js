import { getReservations } from '../APIS/Reservation'
import { useEffect, useState } from 'react'

function ReservationList() {
    let [reservations , setReservations] = useState([])
    useEffect(()=>{
        let datas =getReservations()
        setReservations(datas)
    })
    return (
       <div>Rservation list</div>
    )
}

export default ReservationList
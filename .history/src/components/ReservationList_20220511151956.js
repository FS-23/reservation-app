import { getReservations } from '../APIS/Reservation'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ReservationList() {
    let [reservations , setReservations] = useState([])
    useEffect(()=>{

        let list = getReservations()
        console.log('reservations:', list)
        setReservations(list)

    })
    return (
       <div>
           {
              reservations.map((item , index) => (
                <div key={item.id} className="bg-dark text-white">
                    <h4>{item.reference}</h4>
                    <div>

                    </div>
                </div>
              ))
           }

            <Link className='btn btn-primary' to="/reservations/add">Ajouter une reservation</Link>
       </div>
    )
}

export default ReservationList
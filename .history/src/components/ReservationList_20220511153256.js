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
       <div className='container mt-5'>
           <div className='row mx-0 mb-5'>
            {
                reservations.map((item , index) => (
                    <div key={item.id} className=" col-4 mt-2">
                        <div className="bg-dark text-white p-2 rounded shadow-lg">
                            <h4>{item.reference}</h4>
                            <div className='row'>
                                <div className='col-6'> <strong>{item.from}</strong></div>
                                <div className='col-6'> <strong>{item.to}</strong></div>
                            </div>
                            <div>
                                {item.date}
                            </div>


                            <div className='row'>
                                <div className='col-6'> <strong>passagers: {item.nbrPassengers} </strong></div>
                                <div className='col-6'> <strong>class: {item.classType} </strong></div>
                            </div>

                        </div>
                    </div>
                ))
            }
           </div>
           

            <Link className='btn btn-primary' to="/reservations/add">Ajouter une reservation</Link>
       </div>
    )
}

export default ReservationList
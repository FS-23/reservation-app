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
                    <div key={item.id} className=" col-12 col-sm-6 col-lg-4 col-xxl-4 mt-2 reservation-item">
                        <div className="bg-dark text-white p-2 rounded shadow-lg">
                            <h4>RV-{item.reference} <button className='btn btn-info btn-sm ms-3'>{item.price} MAD</button></h4>
                            <div className='row mt-3'>
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

                            <div className='text-end mt-4'>
                                <button className='btn btn-danger me-3'>Annuler</button>
                                <button className='btn btn-primary me-3'>modifier</button>
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
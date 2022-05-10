let reservations = []

export function getReservations(){
    return reservations
}

export function getReservation(id){
  return reservations.find((reservation) => reservation.id == id)
}

export function addReservation(reservation){
    reservation.id = reservations.length + 1
    reservations.push(reservation)
    return reservations
}

export function updateReservation(id,newValues)  {
        // reservations.forEach((reservation)=>{
        //     if(reservation.id == id ){
        //         reservation.from = newValues.from
        //         reservation.to = newValues.to
        //         reservation.destination = newValues.destination
        //         reservation.date = newValues.date
        //         reservation.classType = newValues.classType
        //         reservation.nbrPassenger = newValues.nbrPassenger
        //     }
        // })


        let indexOfReservation = reservations.findIndex( (reservation) => reservation.id == id)

        reservations.splice(indexOfReservation , 1 , {...newValues , id})



}

export function removeReservation(id){
   let indexOfReservation = reservations.findIndex( (reservation) => reservation.id == id)
   reservations.splice(indexOfReservation , 1)
}







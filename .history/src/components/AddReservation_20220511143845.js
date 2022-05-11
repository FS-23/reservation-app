import { useState } from "react";
import { addReservation  , getReservations} from "../APIS/Reservation";

export default function AddReservation(){
    /* utilisation des state pour recuperer les valeurs des inputs */
    //   let [from , setFrom] = useState("") 
    //   let [destination , setDestination] = useState("") 


      let [inputs , setInputs] = useState({})

      function handleOnChange(event){
          let name = event.target.name
          let value = event.target.value
          setInputs(inputs => ({...inputs , [name]: value}))
      }


      function handleOnSubmit(event){
          event.preventDefault()
          console.log('inputs:', inputs)
         // addReservation(inputs)
         // console.log('reservations:', getReservations())
      }

     
    let airports = ["Agadir" , "Mohamed V", "Casablanca", "Salé", "Marrakech", "Sidi kasem"]
     
     return (
              <div className="w-50 m-auto mt-5 shadow-sm p-3">
                   <h5>Nouvelle reservation</h5>
                   <form onSubmit={handleOnSubmit}>
                   <div className="form-group mt-4">
                        <label className="form-label">Aéroport départ</label>
                        <select 
                          name = "from"
                          onChange={handleOnChange}
                          className="form-control">
                            {
                                airports.map((item , index) => <option key={index} value={item}>{item}</option>)
                            }
                        </select>
                   </div>
                  
                   <div className="form-group mt-2">
                        <label className="form-label">Destination</label>
                        <select 
                        name="to"
                         onChange={handleOnChange}
                        
                        className="form-control">
                            {
                                airports.map((item , index) => <option key={index} value={item}>{item}</option>)
                            }
                        </select>
                   </div>
              
                   <div className="form-group mt-2">
                        <label className="form-label">Date départ</label>
                        <input onChange={handleOnChange} name="date" className="form-control" type="datetime-local"/>
                   </div>
                   <div className="form-group mt-2">
                        <label className="form-label">Nombre de passagers</label>
                        <input onChange={handleOnChange} name="nbrPassengers" className="form-control" type="number"  min="1" max="3"/>
                   </div>

                   <div className="form-group mt-2">
                        <label className="form-label">Class</label>
                        <select onChange={handleOnChange} name = "classType" className="form-control">
                           <option value="1">1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                        </select>
                   </div>

                   <div className="mt-3">
                         <button className="btn btn-outline-info">Reserver</button>
                   </div>
                   </form>

              </div>
    )
}
import { addReservation } from "../APIS/Reservation";

export default function AddReservation(){
     return (
              <div>
                   <div className="form-group mt-2">
                        <label className="form-label">Aéroport départ</label>
                        <select className="form-control">

                        </select>
                   </div>
                   <div className="form-group mt-2">
                        <label className="form-label">Destination</label>
                        <select className="form-control">

                        </select>
                   </div>
                   <div className="form-group mt-2">
                        <label className="form-label">Destination</label>
                        <input className="form-control" />

                       
                   </div>


              </div>
    )
}
import { addReservation } from "../APIS/Reservation";

export default function AddReservation(){
     return (
              <div className="w-50 m-auto">
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
                        <label className="form-label">Date départ</label>
                        <input className="form-control" type="datetime-local"/>
                   </div>
                   <div className="form-group mt-2">
                        <label className="form-label">Date départ</label>
                        <input className="form-control" type="number"  min="1" max="3"/>
                   </div>

                   <div className="form-group mt-2">
                        <label className="form-label">Class</label>
                        <select className="form-control">

                        </select>
                   </div>


              </div>
    )
}
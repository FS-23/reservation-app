export default function Login(){
     return(
         <div style={{width: "350px" , margin: "auto"}} className="shadow-lg">
             <form>
                 <div className="form-group">
                     <label className="form-label">Nom d'utilisateur</label>
                     <input  type="text" className="form-control"/>
                 </div>
             </form>
         </div>
     )
}
export default function Login(){
    const myStyle = {width: "400px" , margin: "auto"}

    function handleOnSubmit(event){
         event.preventDefault()
    }
     return(
         <div style={myStyle} className="shadow-lg p-2 mt-5">
              <h4 className="">Connecter vous</h4>
             <form onSubmit={handleOnSubmit}>
                 <div className="form-group">
                     <label className="form-label">Nom d'utilisateur</label>
                     <input  
                         type="text" 
                         className="form-control" 
                         placeholder="Nom d'utilisateur"
                         name="username"/>
                 </div>
                 <div className="form-group mt-3">
                     <label className="form-label">Mot de passe</label>
                     <input  
                         type="text" 
                         className="form-control" 
                         placeholder="Mot de passe"
                         name="password"/>
                 </div>
                 <div className="mt-3">
                      <button className="btn btn-outline-primary">Connecter</button>
                 </div>
             </form>
         </div>
     )
}
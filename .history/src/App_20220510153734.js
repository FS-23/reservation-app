
import Login from "./components/Login";
import Layout from "./Layout/Layout";
import ReservationDetail from "./components/ReservationDetail";
import ReservationItem from "./components/ReservationItem";
import AddReservation from "./components/AddReservation";
import ReservationList from "./components/ReservationList";
import Home from "./components/Home";

import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        
           <Routes>
              <Route path="/login" element={ <Login />}></Route>
              <Route path="/" element={ <Layout />}></Route>
          </Routes>
               
    </BrowserRouter>
    
  );
}

export default App;

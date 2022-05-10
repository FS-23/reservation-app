
import Login from "./components/Login";
import Layout from "./Layout/Layout";
import ReservationDetail from "./components/ReservationDetail";
import ReservationItem from "./components/ReservationItem";
import AddReservation from "./components/AddReservation";
import ReservationList from "./components/ReservationList";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
        <Layout />
        < Home />
        <Login />
    </div>
  );
}

export default App;

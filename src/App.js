import {Routes, Route} from "react-router-dom";
import { Carrossel } from "./Components/Carrosel";
import {Forms} from "./Components/Forms"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Booking } from "./Restaurant/pages/Booking";



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element ={<Forms/>}/>
    </Routes>
      <Carrossel />
    <Booking />
    </div>
  );
}

export default App;

import {Routes, Route} from "react-router-dom";
import { Carrossel } from "./Components/Carrosel";
import {Forms} from "./Components/Forms"
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element ={<Forms/>}/>
    </Routes>
      <Carrossel />
    </div>
  );
}

export default App;

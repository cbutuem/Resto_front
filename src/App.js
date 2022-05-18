import {Routes, Route} from "react-router-dom";
import { Carrossel } from "./Components/Carrosel";
import {Forms} from "./Components/Forms"
import 'bootstrap/dist/css/bootstrap.min.css'
import { SearchResults } from "./Components/SearchPage";
import { useState } from "react";
import { NavBar } from "./Components/TesteBar";

function App() {
  const [test, setTest] = useState()
 
  return (
    <div className="App">
      <NavBar setTest={setTest} />
    <Routes>
      <Route path="/" element ={<Forms/>}/>
      <Route path="/search" element ={<SearchResults test={test} />}/>
    </Routes>
      <Carrossel />
    </div>
  );
}

export default App;

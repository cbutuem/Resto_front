import {Routes, Route} from "react-router-dom";
import { Carrossel } from "./Components/Carrosel";
import {Forms} from "./Components/Forms"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Booking } from "./Restaurant/pages/Booking";
import { useState } from "react";
import { NavBar } from "./Components/TesteBar";
import { SearchResults } from "./Components/SearchPage";
import { UserProfile } from "./Components/UserProfile";

import { Login } from "./Public/pages/Login";
import {Review} from "./User/pages/Review"
function App() {
  const [test, setTest] = useState()
 
  return (
    <div className="App">
      <NavBar setTest={setTest} />
    <Routes>
      <Route path="/" element ={<Forms/>}/>
      <Route path="/search" element ={<SearchResults test={test} />}/>
      <Route path="/user/user-profile" element={<UserProfile />} />
      <Route path="/forms" element ={<Forms/>}/>
      <Route path="/Review" element ={<Review/>}/>
      <Route path="/" element={<Login/>}/>
    </Routes>
      <Carrossel />
    <Booking />
    </div>
  );
}

export default App;

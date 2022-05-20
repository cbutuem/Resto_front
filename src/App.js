import {Routes, Route} from "react-router-dom";
import { Carrossel } from "./Components/Carrosel";
import 'bootstrap/dist/css/bootstrap.min.css'
import {User_SignUp} from "../src/Public/pages/User_SignUp"
import {Restaurant_SignUp} from "../src/Public/pages/Restaurant_SignUp"
import { Booking } from "./Restaurant/pages/Booking";
import { useState } from "react";
import { NavBar } from "./Components/NavBar";
import { SearchResults } from "./Components/SearchPage";
import { UserProfile } from "./Components/UserProfile";
import { Login } from "../src/Public/pages/Login";


function App() {
  const [test, setTest] = useState()
 
  return (
    <div className="App">
      <NavBar setTest={setTest}/>
    <Routes>
      <Route path="/search" element ={<SearchResults test={test} />}/>
      <Route path="/user/user-profile" element={<UserProfile />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup/user" element={<User_SignUp />} />
      <Route path="/signup/restaurant" element={<Restaurant_SignUp />}/>

    </Routes>
      <Carrossel />
      <Booking />
    </div>
  );
}

export default App;

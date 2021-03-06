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
import { RestaurantProfile } from "./Components/RestaurantProfile";
import { RestaurantPage } from "./User/pages/RestaurantPage"

import {Login} from "../src/Public/pages/Login";
import {Home} from "../src/Public/pages/Home"
import "./app.css"


function App() {
  const [test, setTest] = useState()
 
  return (
    <div className="App">
      <NavBar setTest={setTest}/>
    <Routes>
      <Route path="/" />
      <Route path="/search" element ={<SearchResults test={test} />}/>
      <Route path="/user/user-profile" element={<UserProfile />}/>
      <Route path="/restaurant/user-profile" element={<RestaurantProfile />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup/user" element={<User_SignUp/>}/>
      <Route path="/signup/restaurant" element={<Restaurant_SignUp/>}/>
      <Route path="/restaurantpage/:restaurantId" element={<RestaurantPage/>}/>
      <Route path="/booking/:restaurantId" element={<Booking />}/>

    </Routes>

     

    </div>
  );
}

export default App;


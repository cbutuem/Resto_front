import {Routes, Route} from "react-router-dom";
import { RestaurantProfile } from "./Components/RestaurantProfile";
import { UserProfile } from "./Components/UserProfile";
import { Home } from "./Pages/Home";
import { SignUpPage } from "./Pages/SignUp";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/profile" element={<UserProfile />}/>
      <Route path="/restaurant/profile" element={<RestaurantProfile />}/>
    </Routes>
    </div>
  );
}

export default App;

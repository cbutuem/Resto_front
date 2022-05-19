import {Routes, Route} from "react-router-dom";
import {Forms} from "./Components/Forms"
import { Login } from "./Public/pages/Login";
import {Review} from "./User/pages/Review"
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/forms" element ={<Forms/>}/>
      <Route path="/Review" element ={<Review/>}/>
      <Route path="/" element={<Login/>}/>
    </Routes>
      
    </div>
  );
}

export default App;

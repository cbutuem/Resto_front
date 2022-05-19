import {Routes, Route} from "react-router-dom";
import {Forms} from "./Components/Forms"
import {Review} from "./User/pages/Review"
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/forms" element ={<Forms/>}/>
      <Route path="/" element ={<Review/>}/>
    </Routes>
      
    </div>
  );
}

export default App;

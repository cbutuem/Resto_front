import {Routes, Route} from "react-router-dom";
import {Forms} from "./Components/Forms"
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element ={<Forms/>}/>
    </Routes>
      
    </div>
  );
}

export default App;

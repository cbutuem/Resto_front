import {Routes, Route} from "react-router-dom";
import { Home } from "./Pages/Home";
import { SignUpPage } from "./Pages/SignUp";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;

import './App.css';
import Login from './Component/Login';
import Register  from './Component/Register';
import Profil  from './Component/Profil';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Profil" element={<Profil />} />
              <Route path="*" element={<Login/>} />
          </Routes>
        </BrowserRouter>
        </div>
  );
}

export default App;

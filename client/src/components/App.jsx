import Navbar from "./Navbar";
import './app.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Registration from "./auth/Registration";
import Login from "./auth/login";
function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Navbar/>
              <Routes>
                  <Route path="/registration" element={<Registration/>}/>
                  <Route path="/login" element={<Login/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;

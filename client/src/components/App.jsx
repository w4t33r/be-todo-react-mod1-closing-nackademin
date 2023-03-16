import Navbar from "./Navbar";
import './app.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Registration from "./registration/Registration";
function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Navbar/>
              <Routes>
                  <Route path="/registration" element={<Registration/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;

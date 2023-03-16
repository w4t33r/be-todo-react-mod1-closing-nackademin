import Navbar from "./Navbar";
import './app.css'
import {BrowserRouter, Route} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Navbar/>
              <Switch>
                  <Route path="/registration" component={Registration}/>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;

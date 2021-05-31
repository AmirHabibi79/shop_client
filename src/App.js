import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Navbar from "./components/navbar"
import Shop from "./components/shop"
import './App.css';
import Product from "./components/product";

function App() {
  return (
    <div className="App">
     <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact>
            <Shop/>
          </Route>
          <Route path="/:id">
            <Product/>
          </Route>
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;

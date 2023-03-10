//import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";

import { Navbar } from "./components/navbar/index";
import {HomePage} from './components/pages/home/index';
import {CartPage} from './components/pages/cart/index';
import {Footer} from './components/Footer/index'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/cart">
            <CartPage></CartPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

//import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";

import { Navbar } from "./components/navbar/index";
import {HomePage} from './components/pages/home/index'

function App() {
  return (
    <div classname="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/shop">
            <div>Shop</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

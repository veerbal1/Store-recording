import React, { Component } from "react";
import { Route,Switch } from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./Components/ProductList";
import NavBar from "./Components/NavBar";
import Details from "./Components/Details";
import Default from "./Components/Default";
import Cart from "./Components/Cart/Cart";
import Modal from './Components/Modal';
export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
        <Route path="/" exact component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/>
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;

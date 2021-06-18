import React from "react"
import { Link, Route } from "react-router-dom"
import Form from "./PizzaForm"
import Home from "./Home"
import "./App.css"
import Logo from "./Pizza.jpeg"


function Header() {
  return (
    <div className="nav-links">
      <div className="navBar">
      <div className="linkA">
        <Link to="/">Home</Link>
      </div>
      <div className="linkB">
        <Link to="/PizzaForm">Order Now</Link>
     </div> 
     </div>
      <h1>Jacob's 🤯 Pizzza</h1>
      <img src={Logo} alt ="pizza"/>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/PizzaForm">
        <Form />
      </Route>
   </div>

  );
}
export default Header;
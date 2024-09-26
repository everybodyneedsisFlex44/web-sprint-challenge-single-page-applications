import React from 'react'
import Form from './PizzaForm'
import { Link, Route } from 'react-router-dom'

function Home() {
    return (
        <div className="link">
            <Link to="/PizzaForm">
                <button onClick={(evt)=> evt.preventDefault}>Pizza me now!</button></Link>
            <Route path="/PizzaForm">
                 <Form />
            </Route>
        </div>
    )
}

export default Home;

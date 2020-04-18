import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Products from './Products';
import Contact from './Contact';
import Nav from './Nav';
import "./style.css";

const Home = (props) => {
return  (
    <>
      <form onSubmit={props.addProduct}>
        <label>Product Name:</label>
        <input value={props.state.productName} onChange={props.handleChange} name="product-field" />
        {/* Show a validation message when the user tries to add product without first entering any product name */}
        {props.state.err && <h2> {props.state.err} </h2>}
        <button>Add Product</button> 
      </form>
    </>
  )
}

function App() {
  const [ state, setState ] = useState({
    productName: '',
    productList: [],
    err: '',
  })

  const handleChange = (e) => {
    setState({...state, productName: e.target.value})
  }
  
  const addProduct = (e) => {
    e.preventDefault();
    if (state.productName === '') {
      setState({ ...state, err: 'Please enter the name of the product'});
      return;
    }
    setState({
      ...state,
      err: '',
      productName: '',
      productList: [ ...state.productList, {name: state.productName}]
    })

  }

  return (
    <>    
      <Router>
        <Nav />
        <Switch>
          <Route 
            path="/" 
            render={(props) => <Home state={state} addProduct={addProduct} handleChange={handleChange} />} 
            exact
          />
          <Route path="/products" render={(props) => <Products state={state} />} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
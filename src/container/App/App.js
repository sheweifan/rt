import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../Home/Home'
import ProductDetail from '../ProductDetail/ProductDetail'

// import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Home />
          <Route path="/product_detail/:id" component={ProductDetail}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

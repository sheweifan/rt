import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../Home/Home'
import ProductDetail from '../ProductDetail/ProductDetail'
import Login from '../Login/Login'
import Invest from '../Invest/Invest'

class App extends React.Component<any, any> {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Home />
          <Route path="/product_detail/:id" component={ProductDetail}/>
          <Route path="/login" component={Login}/>
          <Route path="/invest" component={Invest}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

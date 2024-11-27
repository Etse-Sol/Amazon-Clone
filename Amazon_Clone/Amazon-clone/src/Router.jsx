import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from './page/Landing/Landing'

import Cart from './page/Cart/Cart'
import Orders from './page/Orders/Orders'
import Payment from './page/Payment/Payment'
import Results from './page/Results/Results'
import ProductDeail from './page/ProductDetails/ProductDeail'
import Auth from './page/Auth/Auth'
function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDeail/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routering

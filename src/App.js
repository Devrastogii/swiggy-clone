import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Offers from './components/Offers'
import Search from './components/Search'
import Food from './components/Food'
import RateSort from './components/sortPages/RateSort'
import DeliverySort from './components/sortPages/DeliverySort'
import CostLow from './components/sortPages/CostLow'
import CostHigh from './components/sortPages/CostHigh'
import Cart from './components/Cart'
import After from './components/After'

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Food />} />
      <Route path='/search' element={<Search />} />
      <Route path='/offers' element={<Offers />} />
      <Route path='/sort-by-rating' element={<RateSort />} />
      <Route path='/sort-by-delivery' element={<DeliverySort />} />
      <Route path='/sort-cost-low' element={<CostLow />} />
      <Route path='/sort-cost-high' element={<CostHigh />} />                                      
      <Route path='/cart' element={<Cart />} />           
      <Route path='/after' element={<After />} />                                           
    </Routes>    
    </div>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Booking from './components/Booking'


function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<Booking/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App

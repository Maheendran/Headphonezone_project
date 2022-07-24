import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart } from '../Pages/Cart'
import { Homepage } from '../Pages/Homepage'
import { Loginpage } from '../Pages/Loginpage'
import { Payment} from '../Pages/Payment'
import { Products } from '../Pages/Products'
import { Singleproduct } from '../Pages/Singleproduct'

  export const Routing = () => {
  return (
   
    <Routes> 
    <Route path='/' element={<Homepage/>}/>
    <Route path='/loginpage' element={<Loginpage/>}/>
    
    <Route path='/singleproduct/:type'  element={<Singleproduct/>}/>

     <Route path='/products'  element={<Products/>}/>
   
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/payment' element={<Payment/>}/>
  </Routes>
  )
}

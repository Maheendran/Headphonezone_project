
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import '../style/Cart.css'
export const Cart = () => {

  const[popular,setPopular]=useState([])
  const getpopular=()=>{
      fetch(`http://localhost:8080/product`)
      .then(res=>res.json())
      .then((res)=>{
        setPopular( res)})
      } 
  
  useEffect(()=>{
      getpopular()
  })
  const total=popular.reduce(function(sum,e){
    return sum+Number(e.price);

},0)
console.log(total)
  return (

    <div className='maincart'>
   <Navbar item={popular.length}/>
  <div className='headergap'></div>
  {/* ....................................................................... */}


  <div className='cart_totalsec'>
<h4>Bag contain {popular.length} products</h4> <br />
<h2>TOTAL : ₹ {total}</h2>
<div>
  <NavLink to='/payment'>
  <button>Procced to pay</button></NavLink>
</div>
  </div>
   <div className='productsgrid1'> {popular.map((el)=>(

    <div key={el.id} className="cart_img">
       <img src={el.url} alt=""/>
   <p>{el.name}</p>
   <h3>₹{el.price}</h3>
   <button> -</button>
   {1}
   <button>+</button>
       </div>))}
       {popular.map((el)=>(

<div key={el.id} className="cart_img">


   </div>))}
 
   </div>




   </div>
  )
}

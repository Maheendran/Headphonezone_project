import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import '../style/Singlepto.css';


export const Singleproduct = () => { 
  const[popular,setPopular]=useState([])
  var cartdata=JSON.parse(localStorage.getItem("cart")) || [];
  const param=useParams()
 
// ///////////////............/////////
  const singleproduct=()=>{
    fetch(`http://localhost:8080/product?id=${param.type}`)
   
    .then(res=>res.json())
    .then((res)=>{
      setPopular( res)  
    })
    console.log(param)
   
}
useEffect(()=>{
  singleproduct(param.type)
},[param.type])
// .............................//\\.................................//
const[cart,setCart]=useState([])

const handleAddproduct = (product) => {
  console.log("jaiii")
   const productExist = cart.find((items)=> items.id === product.id);
   if(productExist){
     setCart(cart.map((items)=>items.id === product.id ?
     {...productExist,quantity : productExist.quantity + 1}:items))
   }
   else{
     setCart([...cart,{...product,quantity:1}])
   }
  cartdata.push(cart);
  console.log(cartdata)
  
  localStorage.setItem("cart",JSON.stringify(cartdata))

}

// ................
  return (
 
    <>
    <Navbar/>
    <div className='headgap'></div>
<div className='single_main_conatiner'>




<div className='singl_left_cont'>
  
  {popular.map((el)=>(
    <div key={el.id}>
       <img src={el.url} alt="" />
    
    </div>
   
    ))}
</div>

<div className='singl_right_cont'>

<div div className='right_product_name'>
{popular.map((e)=>(
    <div>
      <h1>{e.name}</h1>
      <p>{e.detail}</p>
    </div>
   
    ))}
</div>
<div className='right_prduct-second'>
{popular.map((e)=>(
    <div style={{  display: "inline"}}> 
     <p >No Particular Reason Sale Price :</p><h1 style={{color:"blue"}}>₹{e.price}</h1> 
    
    <p style={{"text-decoration": "line-through"}}>MRP:{e.cutprice}</p>
    </div>
   
    ))}

</div>
{popular.map((e)=>(
    <div style={{display:"flex"}} className="right_color">
     <p >color :</p> <p style={{left:"0"}}>{e.Color}</p> 
    </div>
   
    ))}{popular.map((e)=>(
    <div style={{display:"flex"}} className="right_color">
     <p >Type : </p> <p style={{left:"0"}}>{e.Type}</p> 
 
    </div>
   
    ))}
    {/* //////////////////////////// */}
    <div className='cart_button'>
 <NavLink to="/cart"> <button onClick={()=>handleAddproduct(popular)} >ADD TO CART</button>
 </NavLink></div>
</div>


</div>
{/* ............. */}

<Footer/>
    </>
  )
}

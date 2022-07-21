import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import '../style/Singlepto.css'
export const Singleproduct = () => { 
  const[popular,setPopular]=useState([])
  const param=useParams()
  const singleproduct=()=>{
    fetch(`http://localhost:8080/product?id=${param.type}`)
   
    .then(res=>res.json())
    .then((res)=>{
      setPopular( res)
       console.log(popular)   
    })
    console.log(param)
   
}

useEffect(()=>{
  singleproduct(param.type)
},[param.type])
  return (
 
    <>
    <Navbar/>
    <div className='headgap'></div>
<div className='sinle_main_conatiner'>




<div className='singl_left_cont'>
  {popular.map((e)=>(
    <div>
       <img src={e.url} alt="" />
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
    <div>
     <p >No Particular Reason Sale Price :<h1 style={{color:"blue"}}>₹{e.price}</h1> </p>
    </div>
   
    ))}

</div>
</div>


</div>
{/* ............. */}

<Footer/>
    </>
  )
}

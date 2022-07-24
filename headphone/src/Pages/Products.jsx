import React, { useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import '../style/Products.css'
import styled from "styled-components"
import {Splide,SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css';
import { NavLink,} from 'react-router-dom'




export const Products = () => {

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
// ...............................


  return (
    <div>
        <Navbar/>
        {/* ..................................... */}
<div className='headgap'></div>
<div className='mainbanner'>
<img src="https://cdn.shopify.com/s/files/1/0153/8863/collections/KZ_Banner_1350x.jpg?v=1649762539" alt="" />
<div className='bannerheading'>
   <h1>BEGINNER</h1> <br />
<h1>AUDIOPHILE IEMS</h1> 
</div>
</div>
{/* ... */}
<div className='prod_slidesection'>
<div className='productsecc'>

<Splide options={{perPage:5,
   pagination:false,drag:'free',
  gap:"1rem"}}>

 {popular.map((e)=>{
          return(
            <SplideSlide key={e.id}>

<NavLink to={`/singleproduct/${e.id}`}>
         <Card >
            <img src={e.url} alt="" />
           
             <h3>{e.name}</h3>
             <p>{e.detail}</p>
             <h4 style={{color:"blue"}} >₹{e.price}</h4>
            
             </Card>
         </NavLink>  
            </SplideSlide>
          )
        })}
          </Splide>
          
</div>

</div>


<div className='container_product'>

<div className='container_leftbar'>

<div className='prodfiler_box'>

<select id="Filter_brand"><option value="">Brand</option>

<option value="" >1Custom</option>
<option value="">64 Audio</option>
<option value="">Abyss</option>
<option value="">AIAIAI</option>
<option value="">AKG</option>
<option value="">ALO Audio</option>
</select> <br />
<select name=""  id="Filter_brand"><option value="">Product type</option>

<option value="">Gaming</option>
<option value="">Wired Earphones</option>
</select>
<div></div>
</div>

</div>

<div className='container_righbar'>
<div className='right_twobox'>

        <div >

        <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Beginner-iems-mini-banner-2-best-seller-1_580x.jpg?v=1652247257" alt="" />
        
          </div>

            <div>
                <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/beginner-iems-mini-banner-4_580x.jpg?v=1652334652" alt="" />
                <div className='rightbox_font'>
               
            </div>

</div>
{/* ............ */}


</div>


<div className='productsgrid'>
  
{/* <Grid> */}  
 {popular.map((e)=>{

          return(<div key={e.id} >
          <NavLink to={`/singleproduct/${e.id}`}>
             <img src={e.url} alt="" />
             <h2>{e.name}</h2>
             <p>{e.detail}</p>
             <h3 style={{color:"blue"}} >₹{e.price}</h3>
             <p style={{ "text-decoration": "line-through"}} >₹{e.cutprice}</p>  </NavLink>
         
             </div>
          )
        })}
      {/* </Grid> */}

    
</div>

</div>

</div>
 <Footer/>
    </div>
  )
}


const Card=styled.div`
width:300px;
heigth:500px;
border:0px solid;
font-Weight:600
min-heigth:25rem;
border-radius:10rem

overflow:hidden;
h3{
  text-decoration:none;
};

img{
 
  width:80%;
  height:250px;
  border-radius:3rem;
  padding:1rem;
}
`
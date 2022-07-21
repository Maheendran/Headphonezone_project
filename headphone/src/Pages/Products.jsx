import React, { useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import '../style/Products.css'
import styled from "styled-components"
import {Splide,SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css';
import { Link, NavLink,} from 'react-router-dom'
export const Products = () => {
  const product=[{
    img:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Lypertek-Pureplay-Z7-014_09db4938-4d9a-4d20-80f9-2de0e1a9132b_300x.jpg?v=1626441347",
  name:"LYPERTEK - PUREPLAY Z7",price:"₹ 9,999",
  detail:"True Wireless Earbuds with 1 DD + 2 BA Drivers"},
  {img:"https://cdn.shopify.com/s/files/1/0153/8863/products/Sennhieser-IE300-05_300x.jpg?v=1616396163",name:"LYPERTEK - PUREPLAY Z7",price:"₹ 9,999",
  detail:"True Wireless Earbuds with 1 DD + 2 BA Drivers"},
  {img:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sennheiser-HD-660-S-1160-1160-2_300x.jpg?v=1593681951",name:"LYPERTEK - PUREPLAY Z7",price:"₹ 9,999",
  detail:"True Wireless Earbuds with 1 DD + 2 BA Drivers"},
  {img:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Sundara-1160-1160-2_300x.jpg?v=1592332661",name:"LYPERTEK - PUREPLAY Z7",price:"₹ 9,999",
  detail:"True Wireless Earbuds with 1 DD + 2 BA Drivers"},
  
  {img:"https://cdn.shopify.com/s/files/1/0153/8863/products/beyerdynamic-dt-770-pro-headphone-zone-13980464185407_300x.jpg?v=1579662488",name:"LYPERTEK - PUREPLAY Z7",price:"₹ 9,999",
  detail:"True Wireless Earbuds with 1 DD + 2 BA Drivers"},
  {img:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Fiio-Q3-1_300x.jpg?v=1620643675",name:"LYPERTEK - PUREPLAY Z7",price:"₹ 9,999",
  detail:"True Wireless Earbuds with 1 DD + 2 BA Drivers"},
  {img:"https://cdn.shopify.com/s/files/1/0153/8863/products/sennheiser-hd-569-headphone-zone-29093551111_300x.jpg?v=1579780219",name:"LYPERTEK - PUREPLAY Z7",price:"₹ 9,999",
  detail:"True Wireless Earbuds with 1 DD + 2 BA Drivers"}]
   
  const[popular,setPopular]=useState([])


  const getpopular=()=>{
      fetch(`http://localhost:8080/product`)
      // ) 
      .then(res=>res.json())
      .then((res)=>{
        setPopular( res)
         console.log(popular)   
      })
     
  } 
  
  useEffect(()=>{
      getpopular()
  })


  return (
    <div>
        <Navbar/>
        {/* ..................................... */}

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



  <ul><div>
     <li>Brands
      <ul><div className='lifilterlist'>
        <li>headet</li>
        <li>headet</li>
        <li>headet</li>
        <li>headet</li></div>
      </ul>
    </li>
  </div>
   
  </ul>

  <ul><div>
     <li>Brands
      <ul><div className='lifilterlist'>
        <li>headet</li>
        <li>headet</li>
        <li>headet</li>
        <li>headet</li></div>
      </ul>
    </li>
  </div>
   
  </ul>
<div></div>
</div>

</div>

<div className='container_righbar'>
<div className='right_twobox'>

        <div className='smallbox_sec'>

        <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Beginner-iems-mini-banner-2-best-seller-1_580x.jpg?v=1652247257" alt="" />
        <h2>KZ ZSN PRO X</h2>
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
             <p style={{"text-decoration": "line-through"}}>₹{e.cutprice}</p>
             </NavLink>
             </div>
          )
        })}
      {/* </Grid> */}

    
</div>

 
        







</div>



<div></div>

</div>




           {/* ..................................... */}
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
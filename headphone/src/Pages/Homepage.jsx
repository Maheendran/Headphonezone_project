import React from 'react'
import '../style/Homepage.css'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import {Splide,SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import {BsSpeakerFill,BsMusicPlayerFill,BsEarbuds}from "react-icons/bs"
import {FaDesktop,FaLaptop,FaHeadphones,FaHeadphonesAlt}from "react-icons/fa"
import {GiEarbuds}from "react-icons/gi"
import {MdCable,MdOutlineCases,MdOutlineCable}from "react-icons/md"
import {BiJoystick}from "react-icons/bi"
import {DiVisualstudio}from "react-icons/di"
import styled from 'styled-components';
import { Link } from 'react-router-dom'
export const Homepage = () => {
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
       
  return (
    <>
      <Navbar/>
{/* .................. */}

 
 
{/* body start */}
<div className='bannersection'>
<Splide options={{perPage:1,
   pagination:false,drag:'free',
  gap:"1rem"}}>
 
<SplideSlide  >
<img src="https://cdn.shopify.com/s/files/1/0153/8863/files/K9ProEss_HomepageBanner_Desktop_2000x.jpg?v=1654174152" alt="" />
      <div className='innersection'>
      <button>SHOP NOW</button>
      </div> </SplideSlide>
            <SplideSlide>
             <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/HeadphoneZone_Mojo2-Banner_Desktop-1_2000x.jpg?v=1657284419" alt="" />
          
           </SplideSlide>
         <SplideSlide >

          <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Kublai_Khan_HomepageBanner_Desktop_2000x.jpg?v=1654167888" alt="" />
         </SplideSlide>
          {/* </div>   */}
          </Splide>
          </div>
    
          <h1 style={{margin:"20px"}}>START YOUR AUDIOPHILE JOURNEY HERE</h1>
<div className='thirdsection'>
 

<div className='thirdsectionborder'>
<div className='thirdsectiongrid'>
 
 <Box>
  <div><GiEarbuds size={"4rem"} color={"grey"}/>
  <p>IN-EAR FOR BEGINNERS</p>
  </div>
  </Box>
 
  <div><FaHeadphones size={"4rem"}color={"grey"}/>
  <p>HEADPHONES FOR BEGINNERS</p></div>
  <div><BsEarbuds size={"4rem"}color={"grey"}/>
  <p>TRUE WIRELESS EARBUDS</p></div>
  <div><FaHeadphonesAlt size={"4rem"} color={"grey"}/>
  <p>WIRELESS HEADPHONES</p></div>
  <div><BsEarbuds size={"4rem"} color={"grey"}/>
  <p>FLAGSHIP IEMS</p></div>
  <div><BsMusicPlayerFill size={"4rem"} color={"grey"}/>
 
  <p>HI-RES AUDIO PLAYERS</p></div>
  <div><MdCable size={"4rem"} color={"grey"}/>
<p>PROTABLE AMPS & DACS</p>
  </div>
  <div><FaHeadphonesAlt size={"4rem"} color={"grey"}/>
  <p>FLAGSHIP HEADPHONES</p></div>
  
  <div><FaDesktop size={"4rem"} color={"grey"}/>
  <p>DESKTOP AMPS & DACS</p></div>
  <div><FaLaptop size={"4rem"}color={"grey"}/>
  <p>WORK FROM HOME</p></div>
  <div><BiJoystick size={"4rem"}color={"grey"}/>
  <p>GAMING</p></div>
  <div><DiVisualstudio size={"4rem"}color={"grey"}/>
  <p>STUDIO & PROFESSIONAL</p></div>
  <div><BsSpeakerFill size={"4rem"}color={"grey"}/>
  <p>SPEAKERS</p></div>
  <div><FaHeadphones size={"4rem"} color={"grey"}/>
  <p>HEADPHONES FOR BEGINNERS</p></div>
  <div><MdOutlineCases size={"4rem"}color={"grey"}/>
  <p>CASE</p></div>
  
  <div>
  <MdOutlineCable size={"4rem"}color={"grey"}/><p>CABLES</p> </div>
  
  
</div>

</div>
</div>
{/* ..................... */}
<div className='thirdnextsection'>
<h1>LIKE YOU, WE LOVE MUSIC...</h1>
<div className='paragrph'>
<p>And we believe a Headphone is more than just an instrument for sound. <br />
It’s the key to a mind-blowing moment of emotion, bringing you closer to your favourite artist, and yourself. <br />
We’ve curated the world’s finest headphones & earphones to help you discover the riffs, percussions, basslines and solos that were <br /> always there but never heard.</p>
</div>
</div>
{/* video section */}
<div className='videobanner'>
<iframe title="homepagevideo" src="https://player.vimeo.com/video/681364200?autoplay=1&amp;autopause=1&amp;background=1&amp;loop=1&amp;muted=1&amp;transparent=0&amp;responsive=1&amp;portrait=0&amp;title=0&amp;byline=0&amp;color=444444" allow="autoplay; encrypted-media;" allowfullscreen="allowfullscreen" 
width="100%" height="700px"></iframe>
  </div>
  {/* CHART TOPPING HEADPHONES */}

<div className='chaartopping'>
     <div>
  <h1>CHART TOPPING HEADPHONES</h1>
    </div>
    <div className='categbar'>
  <div style={{width:"23%",height:"55px",border:"0px"}}>DEALS OF THE MONTH</div>
  <div style={{width:"17%"}}>TRENDING IN TOWN</div>
  <div>NEW LAUNCHES</div>
  <div style={{width:"12%"}}>WFH</div>
  <div>UNBOXED</div>
  
  </div>
<div className='productsecc'>
<Splide options={{perPage:5,
   pagination:false,drag:'free',
  gap:"1rem"}}>

 {product.map((e)=>{
          return(
            <SplideSlide key={e.price}>

        <Link to='/singleproduct'>     <Card >
            <img src={e.img} alt="" />
             <h2>{e.name}</h2>
            
             <p>{e.detail}</p>
             <h4>{e.price}</h4>
             </Card>
</Link>  
            </SplideSlide>
          )
        })}
          </Splide>
          <div className='botmbutton'>
           <Link to='/products'><button>VIEW MORE</button></Link> 
          </div>
</div>

</div>
{/* ...newlaunch. */}
<div className='newlaunchsec'>
  <div>

  <h4>FRESH OFF THE BOAT, EXPLORE THE BEST IN AUDIOPHILIA RIGHT NOW</h4>

  </div>

<div className='headingsec'>
  <h2>NEW LAUNCHES</h2>
</div>

<div className='threegridsec'>
<div>
  <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Shanling-UA3_NewArrivalsBanner_700x.jpg?v=1658217171" alt="" />
 
       
  <div className='threegridsec_heading'>
        <h4>SHANLING UA3</h4>
        <br />
        <h1>
        IMPRESSIVE, <br />
        IMPRESSIVE,<br />
        IMPECCABLE</h1>

        </div>

</div>

<div>
  <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Fiio_-_M17Pro_NewArrivalsBanner_1_700x.jpg?v=1655193794" alt="" />
  <div className='threegridsec_heading'>
  <h4>FIIO - M17</h4>
        <br />
        <h1>
       MEET THE BIG <br />
        DADDY<br />
        </h1>
        </div>


</div>
<div>
  <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/64Audio-Duo_NewArrivalsBanner_fdc2eaeb-aa36-4b6a-9e26-d4982f226286_700x.jpg?v=1654680319" alt="" />
  <div className='threegridsec_heading'>
        <h4>64 AUDIO - DUO</h4>
        <br />
        <h1>
      PERFECT MATCH<br />
        MADE<br />
 </h1>

        </div>

</div>
</div>

</div>
{/* quz i*/}
<div className='quizsec'>
<img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Finder-New_1400x.jpg?v=1655447696" alt="" />


<div className='quixbox'>

  <h1>CONFUSED? USE <br />
OUR <br />
HEADPHONE <br />
FINDER</h1>

<p>Find the perfect headphones in less than 5 steps</p>
  
  
  <button>TAKE THE QUIZ</button></div>
 
  </div>
{/* ............................ */}
      <Footer/>
    </>
  )
}
const Box=styled.div`
align-item:center;
width:100%;
height:100%;
color:black;
text-align:center;



`
const Card=styled.div`
border:0px solid;
font-Weight:600;

min-heigth:25rem;
border-radius:2rem;
overflow:hidden;
h3{
  text-decoration:none;
};

img{
 
width:16rem;
height:15rem;
  border-radius:3rem;
  padding:1rem;
}
`


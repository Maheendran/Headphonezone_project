import React from 'react'
import '../style/Footer.css'
import {BsTwitter,BsInstagram,BsYoutube}from "react-icons/bs"
import {FaFacebookF}from "react-icons/fa"
export const Footer = () => {
  return (
    <div>
       <div className='Footersec'>
<div className='footer_first_sec'>
 <div style={{width:"200px"}}>
<h3> LET US HELP</h3>
<p>Help Center</p>
<p>Track My Order</p>
<p>Cancel My Order</p>
<p>Return My Order</p>
<p>Request a Product</p>
<p>Report a Bug</p>
<p>Contact Us</p></div>
 <div>
 
<h3>OUR POLICIES</h3>
<p>Shipping & Delivery</p>
<p>Returns, Refunds & Cancellations</p>
<p>Terms & Conditions</p>
<p>
Privacy Policy</p>
</div>
 <div>
 
<h3>COMMUNITY</h3>
<p>Headphone Zone Merchandise</p>
<p>Trade-Up Program</p>
<p>The Insider</p>
 </div>
 <div style={{width:"350px"}}>

  <h3>
  BEWARE OF FAKES
</h3>

  <p>Don't get fooled. Look out for smuggled & <br /> refurbished headphones while shopping online.<br /> Headphone Zone is a professionally run <br /> business & deals only in 100% genuine headphones.
Learn more</p>
 </div>
 <div style={{width:"240px"}}>
  <h3>FOLLOW US</h3>
<div className='footerlogo'>
  <div><FaFacebookF/></div>
  <div><BsTwitter/></div>
  <div><BsInstagram/></div>
  <div><BsYoutube/></div>



</div>
 </div>
</div>

<div className='lastfootersec'>
  <p>Owned, Operated & Funded by Proud Indians <br />
Copyright ©2011-2022 Headphone Zone. <br />
Everything on this website has been made with a lot of love and hard work. If you copy anything we will hunt you down. We mean it.</p>
</div>

</div>
{/* ...... */}
</div>
  
  )
  
}

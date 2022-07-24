import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Payment.css'
export const Payment = ({total}) => {
    const handlepayment=()=>{
        alert("payment successful")
    }
  return (
    <><div className='payment_main__container'>


        <div className='payment_left__container'> 

<div className='payment_left_logo'>
<div className='weblogo'>
   <Link to='/'>
<img src="https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/8055f4d12f83f589f2d9a1270cd12aaf/headphonezone-logo-large.gif?965006" alt="" />
</Link>
</div>
</div>

<div className='payment_left_email'>

<div className='payment_left_border'>
<div><p>Contact information</p></div>
<div><p>
Already have an account?Log in</p></div>
</div>
<input type="text" placeholder='Email' /> <br />
<input type="checkbox" name="" id="checkbox" />
<label >Email and WhatsApp me with news and offers</label>
</div>
<div className='left_gst_box'>
<div>
    <h3>GST details:  </h3> <p>Is your organisation registered under GST ACT in India?</p>  
</div>
<div className='left_gstbox_detail'>
<input type="radio" />Yes, registered under GST ACT<label htmlFor="">
</label>
<input type="radio" /><label htmlFor="">No, not registered under GST ACT.</label>
</div>
<p>Please enter your GST number now. Once order has been placed, no modifications can be made to add your GST number to the invoice.</p>

</div>

<div className='Shipping_address'>
    <h3>Shipping address</h3>

    <input type="text" placeholder='First name' />
    <input type="text" placeholder='Last name' />
    <input type="text" placeholder='Address' />
    <input type="text" placeholder='Landmark' />
    <input type="text" placeholder='City' />
    <input type="text" placeholder='State' />
    <input type="text" placeholder='Pincode' />
    <input type="number" placeholder='Phone' />
</div>

</div>
        
        
        
        
        <div className='payment_right__container'>

 <div className='payment_right_input'>
 <input type="text " placeholder='Apply Card' />
 <button>Apply</button>
 </div>
 <div>

<h3>Subtotal: ₹2,299.00</h3>
<br />
<h3>Shipping:Calculated at next step</h3>
 </div>
 <div>
<h2>Total:INR ₹2,299.00 </h2>
<p>Including ₹350.69 in taxes</p>
 </div>
 <button onClick={handlepayment}>Payment</button>
        </div>
        
    </div>
    
    
    
    </>
  )
}

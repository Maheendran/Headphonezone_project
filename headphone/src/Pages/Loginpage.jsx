import React from 'react'
// import { Link } from 'react-router-dom'
import '../style/Loginpage.css'
import {BsFacebook}from "react-icons/bs"
import {FcGoogle}from "react-icons/fc"
// import {FaFacebookF}from "react-icons/fa"
import {FiTwitter}from "react-icons/fi"
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { NavLink } from 'react-router-dom'
export const Loginpage = () => {
  return (
    // .......
    <div>

        <Navbar/>
        <div className='loginhead'>
    <h1 style={{margin:"14%" }}>LOGIN</h1>
    <div className='login_three_div'>
 <div id='facbook'><BsFacebook/>Facebook</div>
 <div id='google'><FcGoogle/>Google</div>
 <div id='twitter'><FiTwitter/>Twitter</div>
</div>

<h4>_________LOGIN WITH SOCIAL OR_________</h4>
</div>
<div className='logininput'>
<p>Please enter your e-mail and password:</p>

<input type="text" placeholder='E-mail' /> <br />
<input type="text" placeholder='Password' /> <br />
<NavLink to='/products'><button>LOGIN</button></NavLink>

</div>
<Footer/>
    </div>
  )
}


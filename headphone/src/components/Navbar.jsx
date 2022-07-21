import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'
export const Navbar = () => {
  return (
    <div>
         <div className='navcontainer'>
  
  <div className='weblogo'>
   <Link to='/'>
<img src="https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/8055f4d12f83f589f2d9a1270cd12aaf/headphonezone-logo-large.gif?965006" alt="" />
</Link>
</div>


<div className='wrapper'>
<ul>
<li>
 <Link to='/products'>
Categories </Link>
<div className='text'></div>

  <ul style={{width:"100%"}}>
  <li>design</li>
    <li>design</li>
    <li>design</li> 
  </ul></li>
<div className='catediv'></div>
<li>Brands
  <ul>
  <li> 1Custom</li>
    <li>64 Audio</li>
    <li>Abyss</li>
    <li>AIAIAI</li>
    <li>AKG</li>
    <li>ALO Audio</li>
    <li>Astell&Kern</li>
  </ul>
</li>
<li>Price</li>
<li>Deals</li>
<li id='phonefinder'>Headphone</li>
<li>Events</li>
<li>Forum</li>
<li>Info</li>
<li>Help Center</li>

</ul>
</div>

<div className='navlogin'>
<div className='rightside'>
<Link to='/'>Search</Link> 
</div>
<div className='rightside'>
<Link to='/loginpage'>Login</Link> 
</div>
<div className='rightside'>
<Link to='/cart'>Cart</Link> 
</div>

</div>
</div >

    </div>
  )
}

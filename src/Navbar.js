import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

const Navbar=()=> {
  return (

    <div style={{width:"100%" ,height:"60px", backgroundColor:"gray", color:"red", fontSize:"20px",textDecoration:"none"}}>
            
           <Link to='/' style={{position:"absolute", color:"red",marginTop:"30px", marginLeft:"20px", textDecoration:"none"}}>Home</Link>
           <Link to='/cart'  style={{position:"absolute", color:"red",marginTop:"30px", marginLeft:"80px", textDecoration:"none", float:"right", right:"20px"}}>CART</Link>

    </div>
  )
}
export default Navbar

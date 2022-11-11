import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{backgroundColor:"black",height:"50px",display:"flex",alignItems:"center",justifyContent:"center"}} >
      <NavLink to="/" style={{marginRight:"20px",textDecoration:"none",color:"white",fontWeight:"700"}} >Home</NavLink>
      <NavLink to="About"  style={{marginRight:"20px",textDecoration:"none",color:"white",fontWeight:"700"}}>About</NavLink>
      <NavLink to="/Contact"  style={{marginRight:"20px",textDecoration:"none",color:"white",fontWeight:"700"}}>Contact</NavLink>
      <NavLink to="/Product"  style={{marginRight:"20px",textDecoration:"none",color:"white",fontWeight:"700"}}>Product</NavLink>
     
    </div>
  )
}

export default Navbar
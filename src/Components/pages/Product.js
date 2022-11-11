import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Product() {
  return (
   <>
 <h1>This is Product Page</h1>
 <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
 <NavLink to="Feature" style={{marginRight:"20px"}}>Features</NavLink>
 <NavLink to="New">New</NavLink>
 </div>
 <Outlet/>
   </>
  )
}

export default Product
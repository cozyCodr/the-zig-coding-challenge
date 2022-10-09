import React from 'react'
import Logo from '../../src/zig-logo.png'
import { Link } from 'react-router-dom'


type Props = {
  children:any,
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div className="bg-black h-100">
        <Link to="/" className="d-flex justify-content-center align-items-center p-3" style={{textDecoration: "none", width: "fit-content", margin:"auto"}}>
          <h1 className="text-center pt-2"  style={{fontSize:"4rem", color: "White"}} >M</h1>
          <div style={{width: "40px", height: "40px", borderRadius: "50%", boxShadow: "0 0 0 1px white, 0 0 0 3px black, 0 0 0 4px white"}} className="d-flex justify-content-center align-items-center mx-2">
            <img style={{width: "20px", height: "20px"}} src={Logo} />
          </div>
          <h1 className="text-center pt-2"  style={{fontSize:"4rem", color: "White"}}>VIES</h1>
        </Link>
        {children}
    </div>
  )
}

export default Layout
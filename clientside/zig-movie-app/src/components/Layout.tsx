import React from 'react'
import  Search from './Search'
import Logo from '../../src/zig-logo.png'

type Props = {
  children:any,
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div className="bg-black h-100">
        <div className="d-flex justify-content-center align-items-center p-3">
          <div style={{width: "40px", height: "40px", borderRadius: "50%", boxShadow: "0 0 0 1px white, 0 0 0 3px black, 0 0 0 4px white"}} className="d-flex justify-content-center align-items-center mx-2">
            <img style={{width: "20px", height: "20px"}} src={Logo} />
          </div>
          <h1 className="text-center pt-2"  style={{fontSize:"4rem"}} >Movies</h1>
        </div>
        <Search />
        {children}
    </div>
  )
}

export default Layout
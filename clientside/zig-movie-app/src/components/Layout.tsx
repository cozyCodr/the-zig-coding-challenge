import React from 'react'
import  Search from './Search'


type Props = {
  children:any,
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div className="bg-black h-100">
        <Search />
        {children}
    </div>
  )
}

export default Layout
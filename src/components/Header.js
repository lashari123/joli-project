import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
export const Header = (props) => {
    return (
        
          <div className="inner">        
               <span>
                <FaBars className="bars" />
                <h2>Menu</h2>              
            </span>          
            <h1>{props.title}</h1>
           </div>                              
       )
}
export default Header;
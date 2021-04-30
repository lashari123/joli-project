import React from 'react'
// import {FaCalendarAlt} from ""
import {FaSearch, FaCalendarAlt,FaArrowDown } from "react-icons/fa";

export const TopForm = (props) => {
    return (
       
            <form action="" >
              <div style={{width:'100%', marginLeft:'32px'}}> 
                <label htmlFor="" >Date encoded:</label>
                  
                  </div>  
           <div style={{display:'flex'}}>
           <div className="form-container"> 
                <div className="buttons">
                {/* <label htmlFor="">Date encoded</label> */}
                <input type="date"/>            
                <label htmlFor="" className="position">{props.label}</label>
                <button><FaCalendarAlt/></button>
                <select name="" id="">
                    <option value="Select encoder">Select encoder</option>
                    <option value="abc">abc</option>
                    <option value="abc">abc</option>
                    <option value="abc">abc</option>
                </select>
                <button className="dropDown"><FaArrowDown/></button>
            </div>          
            <div className="buttons">
                <input type="date"/> 
                <button><FaCalendarAlt/></button>
                   
                <label htmlFor="" className="position" >Incident No:</label>
                <input type="text"placeholder="Enter incident no" /> 
            </div>
            </div>
            <div className="search-button" >
                <button type="">
                    <FaSearch className="search-icon"/>
                    Search</button>
                <button>clear</button>
            </div>
           </div>
            </form>
    )
}

export default TopForm;
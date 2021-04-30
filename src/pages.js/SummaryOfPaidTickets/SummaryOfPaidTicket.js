import React from 'react'
import Header from '../../components/Header'
import SPTtable from './SPTtable'
import {FaSearch, FaCalendarAlt,FaArrowDown } from "react-icons/fa";

export default function SummaryOfPaidTicket() {
    return (
        <div>
            <Header  title ="Summary of Paid Tickets"/>


<div className="paid-ticket">

<div style={{marginLeft:'1rem'}}>
<div style={{display:'flex' ,flexDirection:'row',marginTop:'1rem'}} >
    <div>
    <label>Date of Payment:</label>
    <br/>
<input type="date" name=""/>
</div>

<div style={{marginLeft:'2rem'}}>
<label>Date of Payment:</label>
<br/><span style={{ color:'gray'}}> - </span>
<input type="date" name=""/>
</div>
</div>


<div style={{display:'flex' ,flexDirection:'row',marginTop:'1rem'}}>
    <div>
    <label>Date of Payment:</label>
    <br/>
<input type="selector" placeholder="Select encoder" name=""/>
</div>

<div style={{marginLeft:'2rem'}}>

<div>
    <label>Date of Payment:</label>
    <br/>
<input type="text"  placeholder="Enter order payment no." name=""/>
</div>
</div>

<div style={{marginLeft:'2rem'}}>

<div>
    <label>Date of Payment:</label>
    <br/>
<input type="text" placeholder="Enter official receipt no." name=""/>
</div>
</div>

<button className="ticket-btn" ><FaSearch/> search</button>


<button className="ticket-btn">Clear</button>

</div>
</div>

</div>



 
 
           <SPTtable/>

        </div>
    )
}

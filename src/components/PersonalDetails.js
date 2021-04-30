import React from 'react'

const PersonalDetails = () => {
    return (
        <div>
            <table>
                <tr>
                    <th>Incident No:</th>
                    <td>1234567890123456:</td>
                    <th>Gender</th>
                    <td>Male </td>
                </tr>
                <tr>
                    <th>Name of Person:</th>
                    <td>Dela Cruz, Juan Jr. Santos</td>
                    <th>Birthdate:</th>
                    <td>01/02/1995 </td>
                </tr>
                <tr>
                    <th>Contact No:</th>
                    <td>(1234)567-89-01</td>
                    <th>ID Type/No.:</th>
                    <td>Voter's ID - 123456789 </td>
                </tr>
                <tr>
                    <th>Email Address:</th>
                    <td>sample@gmail.com</td>
                    
                    
                </tr>
                <tr>
                    <th>Address:</th>
                    <td  colSpan="2">123 Lot 8 Blk 1 Road 321, Sample Subdivision, Barangay Q, Quezon City, Metro Manila</td>
                    <td></td>
                </tr>
               </table>
               <h3>Incident Details</h3>
               {/* -----------------SECOND TABLE------------------- */}
{/* 
                <table className="SecondTable">
                <tr>
                    <th>Place of Incident:</th>
                    <td colSpan>Quezon City</td>
                    <td></td>
                    <th>Barangay</th>
                    <td>Barangay A </td>
                </tr>
                <tr>
                    <th>Date:</th>
                    <td>03/26/2021</td>
                    <td></td>
                    <th colSpan>Involved in Acciddent:</th>
                    <td>Yes </td>
                </tr>
                <tr>
                    <th>Time:</th>
                    <td colSpan>1:30 PM</td>
                    <td></td>
                    <th>Confiscated Item::</th>
                    <td>Driver's License </td>
                </tr>
                </table> */}

        </div>
    )
}

export default PersonalDetails

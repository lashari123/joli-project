import React,{useState} from 'react'
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import { FaAngleDoubleLeft,FaChevronLeft, FaAngleDoubleRight,FaChevronRight} from 'react-icons/fa'
const Pagination = () => {
    const [paginate, setPaginate] = useState(0)
   
    return (
       <div className="pagination"> 
           <button style={{width:'131px', padding:'6px 10px', fontSize:'16px', marginLeft:'15px'}}>Add</button>
           <ul className="pagination ">
                <li className="page-item navigator">
                    <a href="page-link">
                       <FaAngleDoubleLeft/>
                    </a>
                </li>
                <li className="page-item navigator">
                    <a href="page-link">
                       <FaChevronLeft/>
                    </a>
                </li>
                
                <li className="page-item">
                    Page
                    <a href="page-link" id="paginateCounter">{paginate}</a>
                    10
                </li>    
                
                <li className="page-item navigator">
                    <a href="page-link">
                        <FaChevronRight/>
                    </a>
                </li>
                <li className="page-item navigator">
                    <a href="page-link">
                        <FaAngleDoubleRight/>
                    </a>
                </li>
                
           </ul>
       </div>
    )
}

export default Pagination

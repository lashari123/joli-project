import React,{useState} from 'react'
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import { FaAngleDoubleLeft,FaChevronLeft, FaAngleDoubleRight,FaChevronRight} from 'react-icons/fa'
const ProofPagination = ( props) => {
    const [paginate, setPaginate] = useState(0)
   
    return (
       <div className="pagination"> 
       { props.button} 
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
                <div style={{marginRight:'7rem'}}></div>
                <li className="page-item">
                    Page 
                    <a href="page-link" id="paginateCounter">{paginate}</a>
                    of 10
                </li>    
                <div style={{marginLeft:'7rem'}}></div>
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

export default ProofPagination

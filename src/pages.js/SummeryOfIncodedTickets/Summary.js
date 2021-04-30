import React from 'react'
import Header from '../../components/Header'
import TicketEncoding from '../../components/TicketEncoding'
import TopForm from '../../components/TopForm'
import SET from './SET'

const Summary = () => {
    return (
        <div>
            <Header title ="Summary of Encoded Tickets"/>
           <TopForm  label="Encoded by:"/>
           <SET/>
        </div>
    )
}

export default Summary

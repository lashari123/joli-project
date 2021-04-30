import React from 'react'
import FormFooter from '../../components/FormFooter'
import Header from '../../components/Header'
import IncidentDetails from '../../components/IncidentDetails'
import TicketEncoding from '../../components/TicketEncoding'

const TicketEncodingForm = () => {
    return (
        <div>
            <Header title ="Incident Ticket Encoding Form"/>
            <TicketEncoding/>
            {/* <TicketEncoding1/> */}
            <IncidentDetails/>
            <FormFooter/>
        </div>
    )
}

export default TicketEncodingForm

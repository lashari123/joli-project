import React from 'react'
import FormFooter from '../../components/FormFooter'
import Header from '../../components/Header'
import IncidentDetails from '../../components/IncidentDetails'
import TicketEncoding from '../../components/TicketEncoding'

const IncidentTicketFormSidebar = () => {
    return (
        <div>
            <Header/>
            <TicketEncoding/>
            <IncidentDetails/>
            <FormFooter/>
        </div>
    )
}

export default IncidentTicketFormSidebar

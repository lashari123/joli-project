import React from 'react'
import FormFooter from '../../components/FormFooter'

import Header from '../../components/Header'
import SavedSuccessfully from '../../components/SavedSuccessfully'
import IncidentDetails from '../../components/IncidentDetails'
import TicketEncoding from '../../components/TicketEncoding'

const TicketFormSaved = () => {
    return (
        <div>
             <Header/>
            <TicketEncoding/>
            <IncidentDetails/>
            <FormFooter/>
            <SavedSuccessfully/>
        </div>
    )
}

export default TicketFormSaved

import React from 'react'
import FormFooter from '../../components/FormFooter'

import Header from '../../components/Header'
import SavedSuccessfully from '../../components/SavedSuccessfully'
import IncidentDetails from '../../components/IncidentDetails'
import TicketEncoding from '../../components/TicketEncoding'
import CloseMsgConfirmation from '../../components/CloseMsgConfirmation'
const CloseForm = () => {
    return (
        <div>
             <Header/>
            <TicketEncoding/>
            <IncidentDetails/>
            <FormFooter/>
            <CloseMsgConfirmation/>
        </div>
    )
}

export default CloseForm

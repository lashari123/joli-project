import React from 'react'
import FormFooter from '../../components/FormFooter'

import Header from '../../components/Header'
import SavedSuccessfully from '../../components/SavedSuccessfully'
import IncidentDetails from '../../components/IncidentDetails'
import TicketEncoding from '../../components/TicketEncoding'
import SaveMsgConfirmation from '../../components/SaveMsgConfirmation'
const SaveForm = () => {
    return (
        <div>
             <Header/>
            <TicketEncoding/>
            <IncidentDetails/>
            <FormFooter/>
            <SaveMsgConfirmation/>
        </div>
    )
}

export default SaveForm

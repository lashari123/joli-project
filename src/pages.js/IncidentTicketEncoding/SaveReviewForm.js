import React from 'react'
import FormFooter from '../../components/FormFooter'
import Header from '../../components/Header'
import IncidentDetails from '../../components/IncidentDetails'
import TicketEncoding from '../../components/TicketEncoding'
import SaveReview from '../../components/SaveReview'
const SaveReviewForm = () => {
    return (
        <div>
            <Header/>
            <TicketEncoding/>
            <IncidentDetails/>
            <FormFooter/>
            <SaveReview/>
        </div>
    )
}

export default SaveReviewForm

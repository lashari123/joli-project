import React from 'react'
import Header from '../../components/Header'
import TopForm from '../../components/TopForm'
import SET from '../SummeryOfIncodedTickets/SET'

const SummaryAssessedTicketsSidebar = () => {

    return (
        <div>
            <Header title ="Summary of Assessed Tickets"/>
            <TopForm label="Assessed by:" />
            <SET/>
        </div>
    )
}

export default SummaryAssessedTicketsSidebar

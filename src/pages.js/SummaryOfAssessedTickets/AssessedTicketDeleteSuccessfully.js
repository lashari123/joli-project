import React from 'react'
import DeleteSuccessfully from '../../components/DeleteSuccessfully'
import Header from '../../components/Header'
import TopForm from '../../components/TopForm'
import SET from '../SummeryOfIncodedTickets/SET'

const AssessedTicketDeleteSuccessfully = () => {
    return (
        <div>
            <div>
            <Header title ="Summary of Assessed Tickets"/>
            <TopForm label="Assessed by:" />
            <SET/>
            <DeleteSuccessfully/>
        </div>
        </div>
    )
}

export default AssessedTicketDeleteSuccessfully

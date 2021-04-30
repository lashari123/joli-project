import React from 'react'
import DeleteModel from '../../components/DeleteModel'
import Header from '../../components/Header'
import TopForm from '../../components/TopForm'
import SET from '../SummeryOfIncodedTickets/SET'

const AssessedTicketDelete = () => {

    return (
        <div>
            <Header title ="Summary of Assessed Tickets"/>
            <TopForm label="Assessed by:" />
            <SET/>
            <DeleteModel/>
        </div>
    )
}

export default AssessedTicketDelete

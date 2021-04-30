import React from 'react'
import Header from '../../components/Header'
import TopForm from '../../components/TopForm'
import DeleteSuccessfully from '../../components/DeleteSuccessfully'
import SET from './SET'

const DeleteSuccessfullyPage = () => {
    return (
        <div>
            <Header title ="Summary of Encoded Tickets"/>
           <TopForm  label="Encoded by:"/>
           <SET/>
            <DeleteSuccessfully/>
        </div>
    )
}

export default DeleteSuccessfullyPage

import React from 'react'
import FormFooter from '../../components/FormFooter'
import Header from '../../components/Header'
import IncidentDetails from '../../components/IncidentDetails'
import UserDetails from '../../components/UserDetails'
const TicketFormViewLessSidebar = () => {
    return (
        <div>
            <Header/>
          <UserDetails/>
            <IncidentDetails/>
            <FormFooter/>
        </div>
    )
}

export default TicketFormViewLessSidebar

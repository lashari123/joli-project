import React from 'react'
import DeleteModel from '../../components/DeleteModel'
import Header from '../../components/Header'
import TopForm from '../../components/TopForm'

import SET from './SET'

const Delete = () => {
    return (
        <div>
            <Header/>
            <TopForm/>
            <SET/>
            <DeleteModel/>
        </div>
    )
}

export default Delete;

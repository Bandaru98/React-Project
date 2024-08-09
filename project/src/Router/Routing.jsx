import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Parent from '../Parent/Parent'


const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Parent />} />
            </Routes>
        </>
    )
}

export default Routing

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Parent from '../Parent/Parent'
import Shop from '../Shop/Shop'
import Cart from '../Cart/Cart'


const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Parent />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/cart' element={<Cart />} />

            </Routes>
        </>
    )
}

export default Routing

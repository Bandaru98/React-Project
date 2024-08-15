import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Parent from '../Parent/Parent'
import Shop from '../Shop/Shop'
import Cart from '../Cart/Cart'
import SingleProduct from '../Bigdiscount/SingleProduct'


const Routing = () => {
    return (
        <>
            {/* <CartProvider> */}
                <Routes>
                    <Route path='/' element={<Parent />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                
                </Routes>
            {/* </CartProvider> */}
        </>
    )
}

export default Routing




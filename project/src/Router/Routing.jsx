import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Parent from '../Parent/Parent'
import Shop from '../Shop/Shop'
import Cart from '../Cart/Cart'
import SingleProduct from '../Bigdiscount/SingleProduct'
// import SinglePro from '../BestSales/SinglePro'
// import SingleProdesc from '../NewArrivals/SingleProdesc'





const Routing = () => {
    return (
        <>
            {/* <CartProvider> */}
                <Routes>
                    <Route path='/' element={<Parent />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    {/* <Route path="/product/:id" element={<SinglePro />} />
                    <Route path="/product/:id" element={<SingleProdesc/>} /> */}



              


                </Routes>
            {/* </CartProvider> */}
        </>
    )
}

export default Routing




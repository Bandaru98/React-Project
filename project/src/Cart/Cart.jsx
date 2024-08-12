import React from 'react'
import productImg03 from "../Images/double-sofa-03.png";
const Cart = () => {
    return (
       
        <div className="container mt-3 mb-3 p-1">
            <div className="row align-items-center">
                <div className="row">

                    <div className="col-8 card">
                        <div className="row">
                            <div className="col-md-5">
                                <img src={productImg03} alt="Product" className="img-fluid" />
                            </div>
                            <div className="col-md-7 mt-2">
                                <h3>Stone and Beam Westview</h3>
                                <div className="d-flex justify-content-evenly">
                                    <p>$193.00 x 1</p>
                                    <h4>$193.00</h4>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card col-4">
                        <h3>Cart Summary</h3>
                        <p>Total Price</p>
                        <h4>$619.00</h4>
                    </div>


                </div>

            </div>


        </div>


    )
}

export default Cart

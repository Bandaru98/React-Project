import React, { useState } from 'react';
import './b.css'
import productImg01 from "../Images/double-sofa-01.png";

const BigDis = () => {


    const starstyle = {
        staricon: {
            display: 'none'
        }
    }
    const [cartItems, setCartItems] = useState(0);

    const handleAddToCart = () => {
        setCartItems(cartItems + 1);
        alert('Item added to cart!');
    };

    return (
        <div style={{ backgroundColor: 'blue' }}>
            <header>
                <h2>Cart Items: {cartItems}</h2>
            </header>
            <div className='container'>
                <h2>Big Discount</h2>
                <div className="row">
                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <div className="card">
                            <div className='d-flex justify-content-between p-3'>
                                <button className='btn btn-info'>20% off</button>
                                <i className="bi bi-star" style={starstyle.staricon}></i>
                            </div>
                            <div className="card-body">
                                <img src={productImg01} alt="img" style={{ height: '150px' }} />
                                <h6>Stone and Beam Westview</h6>
                                <div className='d-grid justify-content-start'>
                                    <div className="star-hover">
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between p-3'>
                                    <h6>$193</h6>
                                    <button
                                        onClick={handleAddToCart}
                                        style={{ borderRadius: '50%', border: '0px' }}
                                        className="add-cart-btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigDis;

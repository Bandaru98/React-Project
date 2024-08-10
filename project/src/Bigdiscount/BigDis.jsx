import React, { useState } from 'react';
import './b.css'
import productImg01 from "../Images/double-sofa-01.png";
import productImg02 from "../Images/double-sofa-02.png";
import productImg08 from "../Images/arm-chair-02.jpg";

import productImg09 from "../Images/arm-chair-03.jpg";
import phone03 from "../Images/phone-03.png";
import phone04 from "../Images/phone-04.jpg";
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
        <div style={{ backgroundColor: '#f6f9fc' }}>
            <header>
                <h2>Cart Items: {cartItems}</h2>
            </header>
            <div className='container'>
                <h2 className='text-center'>Big Discount</h2>
                <div className="row mb-3">
                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <div className="card">
                            <div className='d-flex justify-content-between p-3'>
                                <button className='btn btn-info'>20% off</button>
                                <i className="bi bi-star" style={starstyle.staricon}></i>
                            </div>
                            <div className="card-body">
                                <img src={productImg01} alt="img" style={{ height: '150px' }}/>
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

                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <div className="card">
                            <div className='d-flex justify-content-between p-3'>
                                <button className='btn btn-info'>20% off</button>
                                <i className="bi bi-star" style={starstyle.staricon}></i>
                            </div>
                            <div className="card-body">
                                <img src={productImg02} alt="productImg02" style={{ height: '150px' }} />
                                <h6>Rivet Bigelow Modern</h6>
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
                                    <h6>$253</h6>
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

                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <div className="card">
                            <div className='d-flex justify-content-between p-3'>
                                <button className='btn btn-info'>20% off</button>
                                <i className="bi bi-star" style={starstyle.staricon}></i>
                            </div>
                            <div className="card-body">
                                <img src={productImg08} alt="productImg08" style={{ height: '150px' }} />
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
                                    <h6>$89</h6>
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


                <div className="row mb-3">
                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <div className="card">
                            <div className='d-flex justify-content-between p-3'>
                                <button className='btn btn-info'>20% off</button>
                                <i className="bi bi-star" style={starstyle.staricon}></i>
                            </div>
                            <div className="card-body">
                                <img src={productImg09} alt="productImg09" style={{ height: '150px' }} />
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
                                    <h6>$112</h6>
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

                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <div className="card">
                            <div className='d-flex justify-content-between p-3'>
                                <button className='btn btn-info'>20% off</button>
                                <i className="bi bi-star" style={starstyle.staricon}></i>
                            </div>
                            <div className="card-body">
                                <img src={phone03} alt="phone03" style={{ height: '150px' }} />
                                <h6>Rivet Bigelow Modern</h6>
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
                                    <h6>$599</h6>
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

                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <div className="card">
                            <div className='d-flex justify-content-between p-3'>
                                <button className='btn btn-info'>20% off</button>
                                <i className="bi bi-star" style={starstyle.staricon}></i>
                            </div>
                            <div className="card-body">
                                <img src={phone04} alt="phone04" style={{ height: '150px' }} />
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
                                    <h6>$799</h6>
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

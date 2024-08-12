import React, { useState } from 'react';
import productImg01 from "../Images/double-sofa-01.png";
import productImg02 from "../Images/double-sofa-02.png";
import productImg03 from "../Images/double-sofa-03.png";

import productImg04 from "../Images/single-sofa-01.jpg";
import productImg05 from "../Images/single-sofa-02.jpg";
import productImg06 from "../Images/single-sofa-03.jpg";
import productImg007 from "../Images/single-sofa-04.png";



const Shop = () => {
    const [cartItems, setCartItems] = useState(0);

    const handleAddToCart = () => {
        setCartItems(cartItems + 1);
        alert('Item added to cart!');
    };


    return (
        <>

            {/* cards */}
            <div style={{ backgroundColor: '#f6f9fc' }}>
                <header>
                    <h2>Cart Items: {cartItems}</h2>
                </header>

                <div className='container'>


                    {/*  dropdown input*/}
                    <div className="row mb-3">
                        <div className="col-1"></div>
                        <div className="col-4">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                 Filter by Category
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                <span class="input-group-text" id="basic-addon1">@</span>

                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>



                    {/* carts */}
                    <div className="row mb-3">
                        <div className="col-sm-4 mb-4 mb-sm-0">
                            <div className="card">
                                <div className='d-flex justify-content-end p-3'>
                                    <i className="bi bi-star"></i>
                                </div>
                                <div className="card-body">
                                    <div className='d-flex justify-content-center'>

                                        <img src={productImg01} alt="productImg01" style={{ height: '150px' }} />
                                    </div>
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
                                <div className='d-flex justify-content-end p-3'>
                                    <i className="bi bi-star"></i>
                                </div>
                                <div className="card-body">
                                    <div className='d-flex justify-content-center'>

                                        <img src={productImg02} alt="productImg02" style={{ height: '150px' }} />
                                    </div>
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
                                <div className='d-flex justify-content-end p-3'>
                                    <i className="bi bi-star"></i>
                                </div>
                                <div className="card-body">
                                    <div className='d-flex justify-content-center'>

                                        <img src={productImg03} alt="productImg03" style={{ height: '150px' }} />
                                    </div>
                                    <h6>Amazon Brand Modern Sofa</h6>
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
                                        <h6>$173</h6>
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

                    {/*  */}
                    <div className="row mb-3">
                        <div className="col-sm-4 mb-4 mb-sm-0">
                            <div className="card">
                                <div className='d-flex justify-content-end p-3'>
                                    <i className="bi bi-star" ></i>
                                </div>
                                <div className="card-body">
                                    <div className='d-flex justify-content-center'>

                                        <img src={productImg02} alt="productImg02" style={{ height: '150px' }} />
                                    </div>
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
                                <div className='d-flex justify-content-end p-3'>
                                    <i className="bi bi-star"></i>
                                </div>
                                <div className="card-body">
                                    <div className='d-flex justify-content-center'>

                                        <img src={productImg05} alt="productImg05" style={{ height: '150px' }} />
                                    </div>
                                    <h6>Fllufy Sheep Sofa</h6>
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
                                        <h6>$163</h6>
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
                                <div className='d-flex justify-content-end p-3'>
                                    <i className="bi bi-star"></i>
                                </div>
                                <div className="card-body">
                                    <div className='d-flex justify-content-center'>

                                        <img src={productImg06} alt="productImg06" style={{ height: '150px' }} />
                                    </div>
                                    <h6>Fall Velvet Sofa</h6>
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
                                        <h6>$163</h6>
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


                    {/*  */}
                    <div className="row mt-4">

                        <div className="col-sm-2 mb-4 mb-sm-0"></div>

                        <div className="col-sm-4 mb-4 mb-sm-0">
                            <div className="card">
                                <div className='d-flex justify-content-end p-3'>
                                    <i className="bi bi-star" ></i>
                                </div>
                                <div className="card-body">
                                    <div className='d-flex justify-content-center'>

                                        <img src={productImg007} alt="productImg007" style={{ height: '150px' }} />
                                    </div>
                                    <h6>Fllufy Sheep Sofa</h6>
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
                                        <h6>$163</h6>
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
                                <div className='d-flex justify-content-end p-3'>
                                    <i className="bi bi-star" ></i>
                                </div>
                                <div className="card-body">
                                    <div className='d-flex justify-content-center'>
                                        <img src={productImg04} alt="productImg04" style={{ height: '150px' }} />
                                    </div>
                                    <h6>Modern arm Sofa</h6>
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
                                        <h6>$173</h6>
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
                        <div className="col-sm-2 mb-4 mb-sm-0"></div>

                    </div>




                </div>
            </div>

        </>
    );
};

export default Shop;

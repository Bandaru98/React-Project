import React, { useState } from 'react';
import './b.css'
import productImg01 from "../Images/double-sofa-01.png";
import productImg02 from "../Images/double-sofa-02.png";
import productImg08 from "../Images/arm-chair-02.jpg";

import productImg09 from "../Images/arm-chair-03.jpg";
import phone03 from "../Images/phone-03.png";
import phone04 from "../Images/phone-04.jpg";
import { Link } from 'react-router-dom';


// export const CartNumbers = React.createContext()
{/* <CartNumbers.Provider value={cartItems}>
                <CartNumbers.Provider /> */}

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
                            <Link to={`/product/01`}>
                                <div className='d-flex justify-content-between p-3'>
                                    <button className='btn btn-info'>20% off</button>
                                    <i className="bi bi-star" style={starstyle.staricon}></i>
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
                                    {/* <Link to={`/product/01`} className="btn btn-info mt-2">
                                    View Details
                                </Link> */}


                                </div>
                            </Link>


                        </div>
                    </div>

                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <div className="card">
                            <div className='d-flex justify-content-between p-3'>
                                <button className='btn btn-info'>20% off</button>
                                <i className="bi bi-star" style={starstyle.staricon}></i>
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
                            <div className='d-flex justify-content-between p-3'>
                                <button className='btn btn-info'>20% off</button>
                                <i className="bi bi-star" style={starstyle.staricon}></i>
                            </div>
                            <div className="card-body">
                                <div className='d-flex justify-content-center'>
                                    <img src={productImg08} alt="productImg08" style={{ height: '150px' }} />
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
                                <div className='d-flex justify-content-center'>
                                    <img src={productImg09} alt="productImg09" style={{ height: '150px' }} />
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
                                <div className='d-flex justify-content-center'>
                                    <img src={phone03} alt="phone03" style={{ height: '150px' }} />
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
                                <div className='d-flex justify-content-center'>
                                    <img src={phone04} alt="phone04" style={{ height: '150px' }} />
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


export const discoutProducts = [
    {
        id: "01",
        productName: "Stone and Beam Westview ",
        imgUrl: productImg01,
        category: "sofa",
        price: 193,
        discount: 30,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.7,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.5,
    },
    {
        id: "02",
        productName: "Rivet Bigelow Modern ",
        imgUrl: productImg02,
        category: "sofa",
        price: 253,
        discount: 20,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.7,
    },
    {
        id: "08",
        productName: "Baltsar Chair",
        imgUrl: productImg08,
        category: "chair",
        price: 89,
        discount: 15,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.6,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.7,
    },
    {
        id: "09",
        productName: "Helmar Chair",
        imgUrl: productImg09,
        category: "chair",
        price: 112,
        discount: 35,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.6,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.7,
    },
    {
        id: "12",
        productName: "Realme 8",
        imgUrl: phone03,
        category: "mobile",
        price: 599,
        discount: 10,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.8,
    },
    {
        id: "13",
        productName: "One Plus Nord",
        imgUrl: phone04,
        category: "mobile",
        price: 799,
        discount: 5,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.8,
    },

]


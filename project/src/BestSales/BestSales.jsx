
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../Images/products';


const BestSales = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = () => {
        setCartItems(cartItems + 1);
        alert('Item added to cart!');
    };
    useEffect(() => {
        getproducts()
    }, [])
    const getproducts = () => {
        let temp = [];
        temp = products.filter((item) => {
            return item.category === 'sofa'
        })
        setCartItems(temp) // cartItems == temp
        console.log(temp);

    }

    return (
        <>
            {/* <header>
        <h2>Cart Items: {cartItems}</h2>
      </header> */}
            <div className='container'>
                <h2 className='text-center'>Best Sales</h2>
                {/*  */}
                <div className="row d-flex justify-content-center mb-3">

                    {
                        cartItems.map((items) => (
                            <div className="col-sm-4 mb-sm-0" >

                                <div className="card mb-3" >
                                    {/* <div className='d-flex justify-content-between m-2 p-3'>
                                        <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px' }}>{items.discount}% off</span>
                                        <i className="bi bi-heart-fill"></i>
                                    </div> */}
                                    <div className="card-body">
                                        <Link to={`/product/${items.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <div className='d-flex justify-content-center'>
                                            <img src={items.imgUrl} alt={items.id} style={{ height: '150px' }} />
                                                {/* <img src={items.imgUrl} alt="phone01" className='w-50' style={{ height: '200px' }} /> */}
                                            </div>
                                            <h6>{items.productName}</h6>
                                            <div className='d-grid justify-content-start'>
                                                <div className="star-hover">
                                                    <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                                                    <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                                    <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                                    <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                                    <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-between p-3'>
                                                <h6>{items.price}</h6>
                                                <button
                                                    onClick={handleAddToCart}
                                                    style={{ borderRadius: '50%', border: '0px' }}
                                                    className="add-cart-btn"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                            </div>

                        ))
                    }


                </div>
            </div >
        </>
    );
};

export default BestSales;


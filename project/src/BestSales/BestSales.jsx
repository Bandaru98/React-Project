import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../Images/products';
import { toast } from 'react-toastify';

import { addToCart } from '../Redux/ProductAction/ProductAction';
import { useDispatch } from 'react-redux'


const BestSales = () => {
    const dispatch = useDispatch()
    const [cartItems, setCartItems] = useState([]);


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

            {/* BestSales */}

            {/* <header>
                 <h2>Cart Items: {cartItems}</h2>
               </header> */}
            <div className='container'>
                <h2 className='text-center'>Best Sales</h2>

                <div className="row d-flex justify-content-center mb-3">

                    {cartItems.map((items) => (
                        <div className="col-sm-4 mb-sm-0" >

                            <div className="card mb-3" >
                                <div className="card-body">
                                    <Link to={`/product/${items.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className='d-flex justify-content-center'>
                                            <img src={items.imgUrl} alt={items.id} style={{ height: '150px' }} />
                                        </div>
                                    </Link>
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
                                            onClick={() => {
                                                dispatch(addToCart(items))
                                                toast.success('Item added to cart!');
                                            }}
                                            style={{ borderRadius: '50%', border: '0px' }}
                                            className="add-cart-btn"
                                        >
                                            +
                                        </button>
                                    </div>

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

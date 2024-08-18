import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../Images/products';
import { toast } from 'react-toastify';
import { addToCart } from '../Redux/ProductAction/ProductAction';

import { useDispatch } from 'react-redux';

const BestSales = () => {
    const dispatch = useDispatch();
    const [cartItems, setCartItems] = useState([]);

    const [hoveredCardId, setHoveredCardId] = useState(null);

    useEffect(() => {
        getproducts();
    }, []);

    const getproducts = () => {
        const temp = products.filter((item) => item.category === 'sofa');
        setCartItems(temp);
        console.log(temp);
    };

    return (
        <>
            {/* Best Sales */}
            <div className='container'>
                <h2 className='text-center'>Best Sales</h2>
                <div className="row d-flex justify-content-center mb-3">
                    {cartItems.map((items) => (
                        <div className="col-sm-4 mb-sm-0" key={items.id}
                            onMouseEnter={() => setHoveredCardId(items.id)}
                            onMouseLeave={() => setHoveredCardId(null)}
                            style={{ position: 'relative' }} >
                            <div className="card mb-3">
                                {hoveredCardId === items.id && (
                                    <div>
                                        <i className="bi bi-heart heart-icon" style={{ position: 'absolute', top: '10px', right: '10px' }} ></i>
                                        <button className="add-cart-btn" onClick={() => {
                                            dispatch(addToCart(items));
                                            toast.success('Item added to cart!');
                                        }}
                                            style={{ position: 'absolute', bottom: '10px', right: '10px', borderRadius: '50%', border: '0px', width: '30px', height: '30px', backgroundColor: '#0f3460', color: 'white' }}>
                                            +
                                        </button>
                                    </div>
                                )}
                                <div className="card-body">
                                    <Link to={`/product/${items.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className='card-img-top d-flex justify-content-center mt-4 mb-4'>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BestSales;

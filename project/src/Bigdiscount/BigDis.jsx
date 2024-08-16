import React, { useState } from 'react';
import { discoutProducts } from '../Images/products';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToCart } from '../Redux/ProductAction/ProductAction';
import {useDispatch} from 'react-redux'

const BigDis = () => {
const dispatch=useDispatch()


    const [hoveredCardId, setHoveredCardId] = useState(null);

    // const addToCart = (id) => {
    //     setCartItems(cartItems + 1);
    //     setHoveredCardId(id); 
    //     toast.success('Item added to cart!');
    // };
  

    return (
        <div className='container mt-4 mb-4'style={{backgroundColor:'#f6f9fc'}}>
            <h2 className='text-center'>Big Discount</h2>
            <div className='row'>
                {
                    discoutProducts.map((items) => (
                        <div className='col-md-4' key={items.id} >
                            {/* <Link to={`/product/${items.id}`} style={{ textDecoration: 'none', color: 'inherit' }}> */}
                                <div className='card mb-3'>
                        
                                    <div className='d-flex justify-content-between m-2 p-3'>
                                        <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px' }}>{items.discount}% off</span>
                                        <i className="bi bi-heart-fill" style={{ display: hoveredCardId === items.id ? 'block' : 'none' }}></i>
                                    </div>
                                    <div className='card-body'>
                                    <Link to={`/product/${items.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className='card-img-top d-flex justify-content-center'>
                                            <img src={items.imgUrl} alt={items.id} style={{ height: '150px' }} />
                                            
                                        </div>
                                        </Link>
                                        <div className='card-title'>
                                            <h6 className="card-title">{items.productName}</h6>
                                            <span className='d-flex'>
                                                <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                                                <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                                <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                                <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                                <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                            </span>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <h6>$ {items.price}</h6>
                                            <button 
                                                onMouseEnter={() => setHoveredCardId(items.id)} 
                                                onMouseLeave={() => setHoveredCardId(null)} 
                                                // onClick={() => addToCart(items.id)}
                                           onClick={()=>{dispatch(addToCart(items))}}
                                                style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            {/* </Link> */}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BigDis;






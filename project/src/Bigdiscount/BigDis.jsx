import React, { useState } from 'react';
import { discoutProducts } from '../Images/products';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const BigDis = () => {
    const [cartItems, setCartItems] = useState(0);

    const handleAddToCart = () => {
        setCartItems(cartItems + 1);
        toast.success('Item added to cart!');

    };

    return (
        <div className='container mt-4 mb-4'>
            <h2 className='text-center'>Big Discount</h2>
            <div className='row'>
                {
                    discoutProducts.map((items) => (
                        <div className='col-md-4' key={items.id} >
                            <Link to={`/product/${items.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className='card mb-3'>
                                    <div className='d-flex justify-content-between m-2 p-3'>
                                        <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px' }}>{items.discount}% off</span>
                                        <i className="bi bi-heart-fill"></i>
                                    </div>
                                    <div className='card-body'>
                                        <div className='card-img-top d-flex justify-content-center'>
                                            <img src={items.imgUrl} className="card-img-top w-50" alt={items.id} style={{ height: '150px' }} />
                                        </div>
                                        <div className='card-title'>
                                            <h6 className="card-title">{items.productName}</h6>
                                            <span className='d-flex'>
                                                <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                                                <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                                                <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                                                <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                                                <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                                            </span>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <h6>$ {items.price}</h6>
                                            <button onClick={handleAddToCart}
                                                style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BigDis;





//----

// import React, { useState } from 'react';
// import './b.css';
// import productImg01 from "../Images/double-sofa-01.png";
// import productImg02 from "../Images/double-sofa-02.png";
// import productImg08 from "../Images/arm-chair-02.jpg";
// import productImg09 from "../Images/arm-chair-03.jpg";
// import phone03 from "../Images/phone-03.png";
// import phone04 from "../Images/phone-04.jpg";
// import { Link } from 'react-router-dom';

// const BigDis = () => {

//     const starstyle = {
//         staricon: {
//             display: 'none'
//         }
//     };

// const [cartItems, setCartItems] = useState(0);

// const handleAddToCart = () => {
//     setCartItems(cartItems + 1);
//     alert('Item added to cart!');
// };


//     return (
//         <div style={{ backgroundColor: '#f6f9fc' }}>
//             <header>
//                 <h2>Cart Items: {cartItems}</h2>
//             </header>
//             <div className='container'>
//                 <h2 className='text-center'>Big Discount</h2>

//                 <div className="row mb-3">
//                     {/* First Product */}
//                     <div className="col-sm-4 mb-4 mb-sm-0">
//                         <div className="card">
//                             <Link to={`/product/01`}style={{ textDecoration: 'none', color: 'inherit' }}>
//                                 <div className='d-flex justify-content-between p-3'>
//                                     <button className='btn btn-info'>20% off</button>
//                                     <i className="bi bi-star" style={starstyle.staricon}></i>
//                                 </div>
//                                 <div className="card-body">
//                                     <div className='d-flex justify-content-center'>
//                                         <img src={productImg01} alt="productImg01" style={{ height: '150px' }} />
//                                     </div>
//                                     <h6>Stone and Beam Westview</h6>
//                                     <div className='d-grid justify-content-start'>
//                                         <div className="star-hover">
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                         </div>
//                                     </div>
//                                     <div className='d-flex justify-content-between p-3'>
//                                         <h6>$193</h6>
//                                         <button
//                                             onClick={handleAddToCart}
//                                             style={{ borderRadius: '50%', border: '0px' }}
//                                             className="add-cart-btn"
//                                         >
//                                             +
//                                         </button>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Second Product */}
//                     <div className="col-sm-4 mb-4 mb-sm-0">
//                         <div className="card">
//                             <Link to={`/product/02`}style={{ textDecoration: 'none', color: 'inherit' }}>
//                                 <div className='d-flex justify-content-between p-3'>
//                                     <button className='btn btn-info'>20% off</button>
//                                     <i className="bi bi-star" style={starstyle.staricon}></i>
//                                 </div>
//                                 <div className="card-body">
//                                     <div className='d-flex justify-content-center'>
//                                         <img src={productImg02} alt="productImg02" style={{ height: '150px' }} />
//                                     </div>
//                                     <h6>Rivet Bigelow Modern</h6>
//                                     <div className='d-grid justify-content-start'>
//                                         <div className="star-hover">
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                         </div>
//                                     </div>
//                                     <div className='d-flex justify-content-between p-3'>
//                                         <h6>$253</h6>
//                                         <button
//                                             onClick={handleAddToCart}
//                                             style={{ borderRadius: '50%', border: '0px' }}
//                                             className="add-cart-btn"
//                                         >
//                                             +
//                                         </button>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Third Product */}
//                     <div className="col-sm-4 mb-4 mb-sm-0">
//                         <div className="card">
//                             <Link to={`/product/08`}style={{ textDecoration: 'none', color: 'inherit' }}>
//                                 <div className='d-flex justify-content-between p-3'>
//                                     <button className='btn btn-info'>20% off</button>
//                                     <i className="bi bi-star" style={starstyle.staricon}></i>
//                                 </div>
//                                 <div className="card-body">
//                                     <div className='d-flex justify-content-center'>
//                                         <img src={productImg08} alt="productImg08" style={{ height: '150px' }} />
//                                     </div>
//                                     <h6>Baltsar Chair</h6>
//                                     <div className='d-grid justify-content-start'>
//                                         <div className="star-hover">
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                         </div>
//                                     </div>
//                                     <div className='d-flex justify-content-between p-3'>
//                                         <h6>$89</h6>
//                                         <button
//                                             onClick={handleAddToCart}
//                                             style={{ borderRadius: '50%', border: '0px' }}
//                                             className="add-cart-btn"
//                                         >
//                                             +
//                                         </button>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Second Row of Products */}
//                 <div className="row mb-3">
//                     {/* Fourth Product */}
//                     <div className="col-sm-4 mb-4 mb-sm-0">
//                         <div className="card">
//                             <Link to={`/product/09`}style={{ textDecoration: 'none', color: 'inherit' }}>
//                                 <div className='d-flex justify-content-between p-3'>
//                                     <button className='btn btn-info'>20% off</button>
//                                     <i className="bi bi-star" style={starstyle.staricon}></i>
//                                 </div>
//                                 <div className="card-body">
//                                     <div className='d-flex justify-content-center'>
//                                         <img src={productImg09} alt="productImg09" style={{ height: '150px' }} />
//                                     </div>
//                                     <h6>Helmar Chair</h6>
//                                     <div className='d-grid justify-content-start'>
//                                         <div className="star-hover">
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                         </div>
//                                     </div>
//                                     <div className='d-flex justify-content-between p-3'>
//                                         <h6>$112</h6>
//                                         <button
//                                             onClick={handleAddToCart}
//                                             style={{ borderRadius: '50%', border: '0px' }}
//                                             className="add-cart-btn"
//                                         >
//                                             +
//                                         </button>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Fifth Product */}
//                     <div className="col-sm-4 mb-4 mb-sm-0">
//                         <div className="card">
//                             <Link to={`/product/12`}style={{ textDecoration: 'none', color: 'inherit' }}>
//                                 <div className='d-flex justify-content-between p-3'>
//                                     <button className='btn btn-info'>20% off</button>
//                                     <i className="bi bi-star" style={starstyle.staricon}></i>
//                                 </div>
//                                 <div className="card-body">
//                                     <div className='d-flex justify-content-center'>
//                                         <img src={phone03} alt="phone03" style={{ height: '150px' }} />
//                                     </div>
//                                     <h6>Realme 8</h6>
//                                     <div className='d-grid justify-content-start'>
//                                         <div className="star-hover">
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                         </div>
//                                     </div>
//                                     <div className='d-flex justify-content-between p-3'>
//                                         <h6>$599</h6>
//                                         <button
//                                             onClick={handleAddToCart}
//                                             style={{ borderRadius: '50%', border: '0px' }}
//                                             className="add-cart-btn"
//                                         >
//                                             +
//                                         </button>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Sixth Product */}

//                     <div className="col-sm-4 mb-4 mb-sm-0">
//                         <div className="card">
//                             <Link to={`/product/13`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                                 <div className='d-flex justify-content-between p-3'>
//                                     <button className='btn btn-info'>20% off</button>
//                                     <i className="bi bi-star" style={starstyle.staricon}></i>
//                                 </div>
//                                 <div className="card-body">
//                                     <div className='d-flex justify-content-center'>
//                                         <img src={phone04} alt="phone04" style={{ height: '150px' }} />
//                                     </div>
//                                     <h6>Redmi 10</h6>
//                                     <div className='d-grid justify-content-start'>
//                                         <div className="star-hover">
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                             <i className="bi bi-star"></i>
//                                         </div>
//                                     </div>
//                                     <div className='d-flex justify-content-between p-3'>
//                                         <h6>$799</h6>
//                                         <button
//                                             onClick={handleAddToCart}
//                                             style={{ borderRadius: '50%', border: '0px' }}
//                                             className="add-cart-btn"
//                                         >
//                                             +
//                                         </button>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>

//                 </div>

//             </div>
//         </div>
//     );
// };

// export default BigDis;



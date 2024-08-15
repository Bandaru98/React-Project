// import React, { useState } from 'react';
// import productImg01 from "../Images/double-sofa-01.png";
// import productImg02 from "../Images/double-sofa-02.png";
// import productImg03 from "../Images/double-sofa-03.png";

// import productImg04 from "../Images/single-sofa-01.jpg";
// import productImg05 from "../Images/single-sofa-02.jpg";
// import productImg06 from "../Images/single-sofa-03.jpg";
// import productImg007 from "../Images/single-sofa-04.png";



// const BestSales = () => {
//     const [cartItems, setCartItems] = useState(0);

//     const handleAddToCart = () => {
//         setCartItems(cartItems + 1);
//         alert('Item added to cart!');
//     };


//     return (
//         <div style={{ backgroundColor: '#f6f9fc' }}>
//             <header>
//                 <h2>Cart Items: {cartItems}</h2>
//             </header>
//             <div className='container'>
//                 <h2 className='text-center'>Best Sales</h2>

//                 <div className="row mb-3">
//                     <div className="col-sm-4 mb-4 mb-sm-0">
//                         <div className="card">
//                             <div className='d-flex justify-content-between p-3'>
//                                 <button className='btn btn-info'>20% off</button>
//                                 <i className="bi bi-star"></i>
//                             </div>
//                             <div className="card-body">
//                                 <div className='d-flex justify-content-center'>                    
//                                 <img src={productImg01} alt="productImg01" style={{ height: '150px' }} />
//                                 </div>
//                                 <h6>Stone and Beam Westview</h6>
//                                 <div className='d-grid justify-content-start'>
//                                     <div className="star-hover">
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                     </div>
//                                 </div>
//                                 <div className='d-flex justify-content-between p-3'>
//                                     <h6>$193</h6>
//                                     <button
//                                         onClick={handleAddToCart}
//                                         style={{ borderRadius: '50%', border: '0px' }}
//                                         className="add-cart-btn"
//                                     >
//                                         +
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-sm-4 mb-4 mb-sm-0">
//                         <div className="card">
//                             <div className='d-flex justify-content-between p-3'>
//                                 <button className='btn btn-info'>20% off</button>
//                                 <i className="bi bi-star"></i>
//                             </div>
//                             <div className="card-body">
//                                 <div className='d-flex justify-content-center'>
                                 
//                                 <img src={productImg02} alt="productImg02" style={{ height: '150px' }} />
//                                 </div>
//                                 <h6>Rivet Bigelow Modern</h6>
//                                 <div className='d-grid justify-content-start'>
//                                     <div className="star-hover">
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                     </div>
//                                 </div>
//                                 <div className='d-flex justify-content-between p-3'>
//                                     <h6>$253</h6>
//                                     <button
//                                         onClick={handleAddToCart}
//                                         style={{ borderRadius: '50%', border: '0px' }}
//                                         className="add-cart-btn"
//                                     >
//                                         +
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-sm-4 mb-4 mb-sm-0">
//                         <div className="card">
//                             <div className='d-flex justify-content-between p-3'>
//                                 <button className='btn btn-info'>20% off</button>
//                                 <i className="bi bi-star"></i>
//                             </div>
//                             <div className="card-body">
//                                 <div className='d-flex justify-content-center'>
                                  
//                                 <img src={productImg03} alt="productImg03" style={{ height: '150px' }} />
//                                 </div>
//                                 <h6>Amazon Brand Modern Sofa</h6>
//                                 <div className='d-grid justify-content-start'>
//                                     <div className="star-hover">
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                     </div>
//                                 </div>
//                                 <div className='d-flex justify-content-between p-3'>
//                                     <h6>$173</h6>
//                                     <button
//                                         onClick={handleAddToCart}
//                                         style={{ borderRadius: '50%', border: '0px' }}
//                                         className="add-cart-btn"
//                                     >
//                                         +
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//                 {/*  */}
//                 <div className="row mb-3">
//                     <div className="col-sm-4 mb-4 mb-sm-0">
//                         <div className="card">
//                             <div className='d-flex justify-content-between p-3'>
//                                 <button className='btn btn-info'>20% off</button>
//                                 <i className="bi bi-star" ></i>
//                             </div>
//                             <div className="card-body">
//                                 <div className='d-flex justify-content-center'>
                                   
//                                 <img src={productImg02} alt="productImg02" style={{ height: '150px' }} />
//                                 </div>
//                                 <h6>Rivet Bigelow Modern</h6>
//                                 <div className='d-grid justify-content-start'>
//                                     <div className="star-hover">
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                     </div>
//                                 </div>
//                                 <div className='d-flex justify-content-between p-3'>
//                                     <h6>$253</h6>
//                                     <button
//                                         onClick={handleAddToCart}
//                                         style={{ borderRadius: '50%', border: '0px' }}
//                                         className="add-cart-btn"
//                                     >
//                                         +
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-sm-4 mb-4 mb-sm-0">
//                         <div className="card">
//                             <div className='d-flex justify-content-between p-3'>
//                                 <button className='btn btn-info'>20% off</button>
//                                 <i className="bi bi-star"></i>
//                             </div>
//                             <div className="card-body">
//                                 <div className='d-flex justify-content-center'>
                                 
//                                 <img src={productImg05} alt="productImg05" style={{ height: '150px' }} />
//                                 </div>
//                                 <h6>Fllufy Sheep Sofa</h6>
//                                 <div className='d-grid justify-content-start'>
//                                     <div className="star-hover">
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                     </div>
//                                 </div>
//                                 <div className='d-flex justify-content-between p-3'>
//                                     <h6>$163</h6>
//                                     <button
//                                         onClick={handleAddToCart}
//                                         style={{ borderRadius: '50%', border: '0px' }}
//                                         className="add-cart-btn"
//                                     >
//                                         +
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-sm-4 mb-4 mb-sm-0">
//                         <div className="card">
//                             <div className='d-flex justify-content-between p-3'>
//                                 <button className='btn btn-info'>20% off</button>
//                                 <i className="bi bi-star"></i>
//                             </div>
//                             <div className="card-body">
//                                 <div className='d-flex justify-content-center'>
                                  
//                                 <img src={productImg06} alt="productImg06" style={{ height: '150px' }} />
//                                 </div>
//                                 <h6>Fall Velvet Sofa</h6>
//                                 <div className='d-grid justify-content-start'>
//                                     <div className="star-hover">
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                     </div>
//                                 </div>
//                                 <div className='d-flex justify-content-between p-3'>
//                                     <h6>$163</h6>
//                                     <button
//                                         onClick={handleAddToCart}
//                                         style={{ borderRadius: '50%', border: '0px' }}
//                                         className="add-cart-btn"
//                                     >
//                                         +
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>


//                 {/*  */}
//                 <div className="row mt-4">

//                     <div className="col-sm-2 mb-4 mb-sm-0"></div>

//                     <div className="col-sm-4 mb-4 mb-sm-0">
//                         <div className="card">
//                             <div className='d-flex justify-content-between p-3'>
//                                 <button className='btn btn-info'>20% off</button>
//                                 <i className="bi bi-star" ></i>
//                             </div>
//                             <div className="card-body">
//                                 <div className='d-flex justify-content-center'>
                                    
//                                 <img src={productImg007} alt="productImg007" style={{ height: '150px' }} />
//                                 </div>
//                                 <h6>Fllufy Sheep Sofa</h6>
//                                 <div className='d-grid justify-content-start'>
//                                     <div className="star-hover">
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                     </div>
//                                 </div>
//                                 <div className='d-flex justify-content-between p-3'>
//                                     <h6>$163</h6>
//                                     <button
//                                         onClick={handleAddToCart}
//                                         style={{ borderRadius: '50%', border: '0px' }}
//                                         className="add-cart-btn"
//                                     >
//                                         +
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-sm-4 mb-4 mb-sm-0">
//                         <div className="card">
//                             <div className='d-flex justify-content-between p-3'>
//                                 <button className='btn btn-info'>20% off</button>
//                                 <i className="bi bi-star" ></i>
//                             </div>
//                             <div className="card-body">
//                                 <div className='d-flex justify-content-center'>
//                                     <img src={productImg04} alt="productImg04" style={{ height: '150px' }} />
//                                 </div>
//                                 <h6>Modern arm Sofa</h6>
//                                 <div className='d-grid justify-content-start'>
//                                     <div className="star-hover">
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                         <i className="bi bi-star"></i>
//                                     </div>
//                                 </div>
//                                 <div className='d-flex justify-content-between p-3'>
//                                     <h6>$173</h6>
//                                     <button
//                                         onClick={handleAddToCart}
//                                         style={{ borderRadius: '50%', border: '0px' }}
//                                         className="add-cart-btn"
//                                     >
//                                         +
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>


//                     <div className="col-sm-2 mb-4 mb-sm-0"></div>

//                 </div>




//             </div>
//         </div>
//     );
// };

// export default BestSales;
//---------------------------------------------------


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productslist } from '../Images/products';


const BestSales = () => {
    const [cartItems, setCartItems] = useState(0);

    const handleAddToCart = () => {
        setCartItems(cartItems + 1);
        alert('Item added to cart!');
    };

    return (
        <div className='container mt-4 mb-4'>
            <h2 className='text-center'>Bestsales</h2>
            <div className='row d-flex justify-content-center'>
                {
                   productslist.map((items) => (
                        <div className='col-md-4' key={items.id}>
                            <Link to={`/product/${items.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className='card mb-3'>
                                    <div className='d-flex justify-content-between m-2 p-3'>
                                        <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px' }}>20% off</span>
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

export default BestSales;








   
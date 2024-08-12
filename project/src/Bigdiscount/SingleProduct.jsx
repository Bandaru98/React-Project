import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { discoutProducts } from './BigDis';

const SingleProduct = () => {

    const { id } = useParams();
    const product = discoutProducts.find(item => item.id === id);

    if (!product) {
        return <h2>Product not found!</h2>;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6" >
                    <img src={product.imgUrl} alt={product.productName} className="img-fluid" style={{ height: '250px' }} />
                </div>

                <div className="col-md-6">
                    <h1>{product.productName}</h1>
                    <div className='d-flex justify-content-between'>
                        <div className="star-hover">
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                        </div>
                        <div>
                            <p>{product.reviews[0].rating}</p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <h4>Price: ${product.price}</h4>
                        <p>Category:{product.category}</p>
                    </div>
                    <p>{product.shortDesc}</p>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>


            <div className="row mt-5">

                <h4>Description</h4>
                <p>Reviews()</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!</p>
            </div>



            <h3 className="mt-5">You may also like:</h3>
            <div className="row">
                {discoutProducts.filter(item => item.id !== id).map(item => (
                    <div className="col-sm-4 mb-4" key={item.id}>
                        <div className="card">
                            <img src={item.imgUrl} alt={item.productName} className="card-img-top" />
                            {/* <div className="card-body"> */}
                            <h5 className="card-title">{item.productName}</h5>



                            <div className="star-hover">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            {/* <Link to={`/product/${item.id}`} className="btn btn-info">
                                    View Details
                                </Link> */}

                            {/* </div> */}
                            <div className='d-flex justify-content-between ms-1'>
                                <p className="card-text">${item.price}</p>
                                <h4> <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }} >
                                    +
                                </Link></h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SingleProduct;

//--------------------------
// import React, { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { discoutProducts } from './BigDis';

// const SingleProduct = () => {
//     const { id } = useParams();
//     const product = discoutProducts.find(item => item.id === id);
//     const [quantity, setQuantity] = useState(1);

//     if (!product) {
//         return <h2>Product not found!</h2>;
//     }

//     const handleQuantityChange = (e) => {
//         setQuantity(Number(e.target.value));
//     };

//     return (
//         <div className="container mt-5">
//             <div className="row">
//                 <div className="col-md-6">
//                     <img src={product.imgUrl} alt={product.productName} className="img-fluid" style={{ height: '250px' }} />
//                 </div>

//                 <div className="col-md-6">
//                     <h1>{product.productName}</h1>
//                     <div className='d-flex justify-content-between'>
//                         <div className="star-hover">
//                             <i className="bi bi-star"></i>
//                             <i className="bi bi-star"></i>
//                             <i className="bi bi-star"></i>
//                             <i className="bi bi-star"></i>
//                             <i className="bi bi-star"></i>
//                         </div>
//                         <div>
//                             <p>{product.reviews[0].rating}</p>
//                         </div>
//                     </div>

//                     <div className='d-flex justify-content-between'>
//                         <h4>Price: ${product.price}</h4>
//                         <p>Category: {product.category}</p>
//                     </div>

//                     <p>{product.shortDesc}</p>

//                     <div className="d-flex align-items-center mb-3">
//                         <label htmlFor="quantity" className="me-2">Quantity:</label>
//                         <input
//                             type="number"
//                             id="quantity"
//                             value={quantity}
//                             onChange={handleQuantityChange}
//                             className="form-control"
//                             style={{ width: '70px' }}
//                             min="1"
//                         />
//                     </div>

//                     <button className="btn btn-primary">Add to Cart</button>
//                 </div>
//             </div>

//             <div className="row mt-5">
//                 <h4>Description</h4>
//                 <p>{product.description}</p>

//             </div>

//             <h3 className="mt-5">You may also like:</h3>
//             <div className="row">
//                 {discoutProducts.filter(item => item.id !== id).map(item => (
//                     <div className="col-sm-4 mb-4" key={item.id}>
//                         <div className="card">
//                             <img src={item.imgUrl} alt={item.productName} className="card-img-top" />
//                             <h5 className="card-title">{item.productName}</h5>
//                             <div className="star-hover">
//                                 <i className="bi bi-star"></i>
//                                 <i className="bi bi-star"></i>
//                                 <i className="bi bi-star"></i>
//                                 <i className="bi bi-star"></i>
//                                 <i className="bi bi-star"></i>
//                             </div>
//                             <div className='d-flex justify-content-between ms-1'>
//                                 <p className="card-text">${item.price}</p>
//                                 <h4>
//                                     <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
//                                         +
//                                     </Link>
//                                 </h4>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SingleProduct;



//---------------



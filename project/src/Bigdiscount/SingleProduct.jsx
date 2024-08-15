
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { discoutProducts, products } from '../Images/products';

const SingleProduct = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({});
    const [youLike, setYouLike] = useState([]);

    useEffect(() => {
        getData();
    }, [])


    const getData = () => {
        let temp = discoutProducts.find(item => item.id === id);
        // console.log(temp);
        setProduct(temp)

        let tempLike = [];
        tempLike = products.filter((item) => {
            return item.category === temp.category
        })
        setYouLike(tempLike)
        // setYouLike(youLike)

    }

    if (!product) {
        return <h2>Product not found!</h2>;
    }

    // const handleQuantityChange = (e) => {
    //     setQuantity(Number(e.target.value));
    // };

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
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
                                {/* <p>{product.reviews.rating}</p> */}
                            </div>
                        </div>

                        <div className='d-flex justify-content-between'>
                            <h4>Price: ${product.price}</h4>
                            <p>Category: {product.category}</p>
                        </div>

                        <p>{product.shortDesc}</p>

                        <div className="d-flex align-items-center mb-3">
                            <label htmlFor="quantity" className="me-2">Quantity:</label>
                            <input
                                type="number"
                                id="quantity"
                                // value={product}
                                // onChange={handleQuantityChange}
                                className="form-control"
                                style={{ width: '70px' }}
                                min="1"
                            />
                        </div>

                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>

                <div className="row mt-5">
                    <h4>Description</h4>
                    <p>{product.description}</p>

                </div>
            </div>

            {/* You might like also */}
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    {
                        // console.log(youLike)/
                        youLike.map((items) => (
                            <div className="col-md-4">
                                <img src={items.imgUrl} alt={items.productName} className="card-img-top" />
                                <h5 className="card-title">{items.productName}</h5>
                                <div className="star-hover">
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                </div>
                                <div className='d-flex justify-content-between ms-1'>
                                    <p className="card-text">$ {items.price}</p>
                                    <h4>
                                        <Link to={`/product/${items.id}`} style={{ textDecoration: 'none' }}>
                                            +
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>
        </>
    );
};

export default SingleProduct;



// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { discoutProducts, products } from '../Images/products';

// const SingleProduct = () => {
//   const { id } = useParams();

//   const [product, setProduct] = useState(null); // Initialize as null
//   const [youLike, setYouLike] = useState([]);

//   useEffect(() => {
//     getData();
//   }, [id]); // Re-run effect if id changes

//   const getData = () => {
//     let temp = discoutProducts.find(item => item.id === id);
//     setProduct(temp);

//     if (temp) {
//       let tempLike = products.filter((item) => item.category === temp.category);
//       setYouLike(tempLike);
//     }
//   };

//   if (!product) {
//     return <h2>Product not found!</h2>;
//   }

//   return (
//     <>
//       <div className="container mt-5">
//         <div className="row">
//           <div className="col-md-6">
//             <img src={product.imgUrl} alt={product.productName} className="img-fluid" style={{ height: '250px' }} />
//           </div>
//           <div className="col-md-6">
//             <h1>{product.productName}</h1>
//             <div className='d-flex justify-content-between'>
//               <div className="star-hover">
//                 <i className="bi bi-star"></i>
//                 <i className="bi bi-star"></i>
//                 <i className="bi bi-star"></i>
//                 <i className="bi bi-star"></i>
//                 <i className="bi bi-star"></i>
//               </div>
//             </div>
//             <div className='d-flex justify-content-between'>
//               <h4>Price: ${product.price}</h4>
//               <p>Category: {product.category}</p>
//             </div>
//             <p>{product.shortDesc}</p>
//             <button className="btn btn-primary">Add to Cart</button>
//           </div>
//         </div>
//         <div className="row mt-5">
//           <h4>Description</h4>
//           <p>{product.description}</p>
//         </div>
//       </div>

//       <div className='container'>
//         <div className='row d-flex justify-content-center'>
//           {youLike.map((item) => (
//             <div className="col-md-4" key={item.id}>
//               <img src={item.imgUrl} alt={item.productName} className="card-img-top" />
//               <h5 className="card-title">{item.productName}</h5>
//               <div className="star-hover">
//                 <i className="bi bi-star"></i>
//                 <i className="bi bi-star"></i>
//                 <i className="bi bi-star"></i>
//                 <i className="bi bi-star"></i>
//                 <i className="bi bi-star"></i>
//               </div>
//               <div className='d-flex justify-content-between ms-1'>
//                 <p className="card-text">$ {item.price}</p>
//                 <h4>
//                   <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
//                     +
//                   </Link>
//                 </h4>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default SingleProduct;



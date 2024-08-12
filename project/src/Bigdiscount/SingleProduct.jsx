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
                <div className="col-md-6">
                    <img src={product.imgUrl} alt={product.productName} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1>{product.productName}</h1>
                    <p>{product.description}</p>
                    <h4>Price: ${product.price}</h4>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>

            <h3 className="mt-5">You may also like:</h3>
            <div className="row">
                {discoutProducts.filter(item => item.id !== id).map(item => (
                    <div className="col-sm-4 mb-4" key={item.id}>
                        <div className="card">
                            <img src={item.imgUrl} alt={item.productName} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{item.productName}</h5>
                                <p className="card-text">${item.price}</p>
                                <Link to={`/product/${item.id}`} className="btn btn-info">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SingleProduct;

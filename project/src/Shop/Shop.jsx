

import React, { useState } from 'react'
import { discoutProducts } from '../Images/products'
import { Link } from 'react-router-dom'
import { products } from '../Images/products'

const Shop = () => {

    const [pro, setPro] = useState(discoutProducts);

    const handlechange = (x) => {
        let temp = products.filter((item) => {
            return item.category === x;
        })
        setPro(temp)
    }

    const handlein = (e) => {
        e.preventDefault();
        let temp = products.filter((item) => {
            return item.category === e.target[0].value;
        })
        setPro(temp)
        console.log(e.target[0].value);

    }

    const handleAddToCart = () => {
        alert('Item added to cart!');
    };
    return (
        <>
            <div className='container'>

                <div className="row mb-4 mt-4">
                    {/* <div className="col-1"></div> */}
                    <div className="col-4">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Filter by Category
                            </button>
                            <ul class="dropdown-menu" >
                                <li><Link class="dropdown-item" onClick={() => handlechange('sofa')}>Sofa</Link></li>
                                <li><Link class="dropdown-item" onClick={() => handlechange('chair')} >Chair</Link></li>
                                <li><Link class="dropdown-item" onClick={() => handlechange('watch')}  >Watch</Link></li>
                                <li><Link class="dropdown-item" onClick={() => handlechange('mobile')} >Mobile</Link></li>
                                <li><Link class="dropdown-item" onClick={() => handlechange('wireless')}  >Wireless</Link></li>

                            </ul>
                        </div>

                    </div>
                    <div className="col-md-8">

                        <form className='d-flex' role='search' onSubmit={handlein}>
                            <input className='form-control' type="search" placeholder="Search" />
                            <button className='btn btn-secondary' type='submit'><i class="bi bi-search"></i></button>
                        </form>

                    </div>
                    {/* <div className="col-1"></div> */}
                </div>

            </div>


            <div className="container">
                {/*  */}
                <div className="row mb-3 mt-4 d-flex justify-content-center">

                    {
                        pro.map((items) => (
                            <div className="col-md-4 mb-sm-0" >
                                <div className="card mb-3">

                                    <div className="card-body">
                                        <div className='d-flex justify-content-center'>
                                            <img src={items.imgUrl} alt="productImg04" style={{ height: '200px' }} />
                                        </div>
                                        <h6>{items.title}</h6>
                                        <div className='d-grid justify-content-start'>
                                            <div className="star-hover">
                                                <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                                                <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                                                <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                                                <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                                                <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between p-3'>
                                            <h6>${items.price}</h6>
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

                        ))
                    }


                </div>
            </div >
        </>
    )
}

export default Shop


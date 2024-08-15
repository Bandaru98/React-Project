
import React, { useState } from 'react';
import phone01 from "../Images/phone-01.jpg";
import phone02 from "../Images/phone-02.jpg";
import phone03 from "../Images/phone-03.png";
import phone04 from "../Images/phone-04.jpg";
import phone05 from "../Images/phone-05.jpg";
import phone06 from "../Images/phone-06.jpg";

import wireless01 from "../Images/wireless-01.png";
import wireless02 from "../Images/wireless-02.png";
import wireless03 from "../Images/wireless-03.png";
import wireless04 from "../Images/wireless-04.png";
// import { Link } from 'react-router-dom';



const NewArrival = () => {
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = () => {
    setCartItems(cartItems + 1);
    alert('Item added to cart!');
  };



  return (
    <div>
      <header>
        <h2>Cart Items: {cartItems}</h2>
      </header>
      <div className='container'>
        <h2 className='text-center'>New Arrivals</h2>
        {/*  */}
        <div className="row mb-3">

          <div className="col-sm-4 mb-4 mb-sm-0">
            {/* <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}> */}
              {/* <Link to={`/product/1`} style={{ textDecoration: 'none', color: 'inherit' }}> */}
              <div className="card">

                <div className='d-flex justify-content-between p-3'>
                  <button className='btn btn-info'>20% off</button>
                  <i className="bi bi-star"></i>
                </div>


                <div className="card-body">
                  <div className='d-flex justify-content-center'>

                    <img src={phone01} alt="phone01" style={{ height: '150px' }} />
                  </div>
                  <h6>Apple iPhone 12 Pro</h6>
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
                    <h6>$799</h6>
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
            {/* </Link> */}
            {/* </Link> */}
          </div>


          <div className="col-sm-4 mb-4 mb-sm-0">
            <div className="card">
              <div className='d-flex justify-content-between p-3'>
                <button className='btn btn-info'>20% off</button>
                <i className="bi bi-star"></i>
              </div>
              <div className="card-body">
                <div className='d-flex justify-content-center'>

                  <img src={phone02} alt="phone02" style={{ height: '150px' }} />
                </div>
                <h6>Apple iPhone 12 Max</h6>
                <div className='d-grid justify-content-start'>
                  <div className="star-hover">
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                </div>
                <div className='d-flex justify-content-between p-3'>
                  <h6>$799</h6>
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

          <div className="col-sm-4 mb-4 mb-sm-0">
            <div className="card">
              <div className='d-flex justify-content-between p-3'>
                <button className='btn btn-info'>20% off</button>
                <i className="bi bi-star"></i>
              </div>
              <div className="card-body">
                <div className='d-flex justify-content-center'>

                  <img src={phone03} alt="phone03" style={{ height: '150px' }} />
                </div>
                <h6>Realme 8</h6>
                <div className='d-grid justify-content-start'>
                  <div className="star-hover">
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                </div>
                <div className='d-flex justify-content-between p-3'>
                  <h6>$599</h6>
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

        </div>
        {/*  */}

        <div className="row mb-3">
          <div className="col-sm-4 mb-4 mb-sm-0">
            <div className="card">
              <div className='d-flex justify-content-between p-3'>
                <button className='btn btn-info'>20% off</button>
                <i className="bi bi-star"></i>
              </div>
              <div className="card-body">
                <div className='d-flex justify-content-center'>

                  <img src={phone04} alt="phone04" style={{ height: '150px' }} />
                </div>
                <h6>One Plus Nord</h6>
                <div className='d-grid justify-content-start'>
                  <div className="star-hover">
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                </div>
                <div className='d-flex justify-content-between p-3'>
                  <h6>$799</h6>
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

          <div className="col-sm-4 mb-4 mb-sm-0">
            <div className="card">
              <div className='d-flex justify-content-between p-3'>
                <button className='btn btn-info'>20% off</button>
                <i className="bi bi-star"></i>
              </div>
              <div className="card-body">
                <div className='d-flex justify-content-center'>

                  <img src={phone05} alt="phone05" style={{ height: '150px' }} />
                </div>
                <h6>apple iPhone 13 Pro</h6>
                <div className='d-grid justify-content-start'>
                  <div className="star-hover">
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                </div>
                <div className='d-flex justify-content-between p-3'>
                  <h6>$899</h6>
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

          <div className="col-sm-4 mb-4 mb-sm-0">
            <div className="card">
              <div className='d-flex justify-content-between p-3'>
                <button className='btn btn-info'>20% off</button>
                <i className="bi bi-star" ></i>
              </div>
              <div className="card-body">
                <div className='d-flex justify-content-center'>

                  <img src={phone06} alt="phone06" style={{ height: '150px' }} />
                </div>
                <h6>Samsung Galaxy 512</h6>
                <div className='d-grid justify-content-start'>
                  <div className="star-hover">
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                </div>
                <div className='d-flex justify-content-between p-3'>
                  <h6>$699</h6>
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

        </div>
        {/*  */}
        <div className="row mb-3">
          <div className="col-sm-4 mb-4 mb-sm-0">
            <div className="card">
              <div className='d-flex justify-content-between p-3'>
                <button className='btn btn-info'>20% off</button>
                <i className="bi bi-star"></i>
              </div>
              <div className="card-body">
                <div className='d-flex justify-content-center'>

                  <img src={wireless01} alt="wireless01" style={{ height: '150px' }} />
                </div>
                <h6>Beat Studio Wireless</h6>
                <div className='d-grid justify-content-start'>
                  <div className="star-hover">
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                </div>
                <div className='d-flex justify-content-between p-3'>
                  <h6>$199</h6>
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

          <div className="col-sm-4 mb-4 mb-sm-0">
            <div className="card">
              <div className='d-flex justify-content-between p-3'>
                <button className='btn btn-info'>20% off</button>
                <i className="bi bi-star" ></i>
              </div>
              <div className="card-body">
                <div className='d-flex justify-content-center'>

                  <img src={wireless02} alt="wireless02" style={{ height: '150px' }} />
                </div>
                <h6>Beat EP Headphones</h6>
                <div className='d-grid justify-content-start'>
                  <div className="star-hover">
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                </div>
                <div className='d-flex justify-content-between p-3'>
                  <h6>$199</h6>
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

          <div className="col-sm-4 mb-4 mb-sm-0">
            <div className="card">
              <div className='d-flex justify-content-between p-3'>
                <button className='btn btn-info'>20% off</button>
                <i className="bi bi-star"></i>
              </div>
              <div className="card-body">
                <div className='d-flex justify-content-center'>

                  <img src={wireless03} alt="wireless03" style={{ height: '150px' }} />
                </div>
                <h6>Black Headphones</h6>
                <div className='d-grid justify-content-start'>
                  <div className="star-hover">
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                </div>
                <div className='d-flex justify-content-between p-3'>
                  <h6>$169</h6>
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

        </div>

        {/*  */}

        <div className="row mb-3">
          <div className="col-sm-4 mb-4 mb-sm-0">

          </div>

          <div className="col-sm-4 mb-4 mb-sm-0">
            <div className="card">
              <div className='d-flex justify-content-between p-3'>
                <button className='btn btn-info'>20% off</button>
                <i className="bi bi-star"></i>
              </div>
              <div className="card-body">
                <div className='d-flex justify-content-center'>

                  <img src={wireless04} alt="wireless04" style={{ height: '150px' }} />
                </div>
                <h6>Bluetooth Headphones</h6>
                <div className='d-grid justify-content-start'>
                  <div className="star-hover">
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                </div>
                <div className='d-flex justify-content-between p-3'>
                  <h6>$139</h6>
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

          <div className="col-sm-4 mb-4 mb-sm-0">

          </div>

        </div>


      </div>
    </div>
  );
};

export default NewArrival;




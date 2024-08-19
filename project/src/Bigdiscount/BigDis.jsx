import React, { useState } from 'react';
import { discoutProducts } from '../Images/products';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToCart } from '../Redux/ProductAction/ProductAction';
import { useDispatch } from 'react-redux';

const BigDis = () => {
  const dispatch = useDispatch();
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <>
      {/* Big Discount */}
      <div className='container mt-4 mb-4'>
        <h2 className='text-center mb-4'>Big Discount</h2>
        <div className='row'>

          {discoutProducts.map((items) => (
            <div className='col-md-4' key={items.id}
              onMouseEnter={() => setHoveredCardId(items.id)}
              onMouseLeave={() => setHoveredCardId(null)} >

              <div className='card mb-3' style={{ position: 'relative' }}>
                <div className='d-flex justify-content-between m-2 p-3'>
                  <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px' }}>{items.discount}% off</span>
                </div>
                {hoveredCardId === items.id && (
                  <div>
                    <i className="bi bi-heart heart-icon" style={{ position: 'absolute', top: '10px', right: '10px' }} ></i>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => {
                        dispatch(addToCart(items));
                        toast.success('Item added to cart!');
                      }}
                      style={{ position: 'absolute', bottom: '10px', right: '10px', border: 'none', borderRadius: '50%', width: '30px', height: '30px', backgroundColor: '#0f3460', color: 'white'}}  >
                      +
                    </button>
                  </div>
                )}

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

export default BigDis;


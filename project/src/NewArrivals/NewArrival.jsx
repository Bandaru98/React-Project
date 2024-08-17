import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../Images/products';
import { toast } from 'react-toastify';
import { addToCart } from '../Redux/ProductAction/ProductAction';
import { useDispatch } from 'react-redux'

const NewArrival = () => {
  const dispatch = useDispatch()
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getproducts();
  }, [])

  const getproducts = () => {
    let temp = [];

    temp = products.filter((item) => {
      return item.category === 'mobile' || item.category === 'wireless'
    })
    setCartItems(temp) // cartItems == temp
    console.log(temp);

  }

  return (
    <>
      {/* New Arrivals */}
      <div className='container'>
        <h2 className='text-center'>New Arrivals</h2>
        <div className="row mb-3 d-flex justify-content-center">

          {cartItems.map((items) => (
            <div className='col-md-4' key={items.id} >

              <div className='card mb-3'>
                {/* <div className='d-flex justify-content-between m-2 p-3'>
                      <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px' }}>{items.discount}% off</span>
                      <i className="bi bi-heart-fill"></i>
                    </div> */}
                <div className='card-body'>
                  <Link to={`/product/${items.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className='card-img-top d-flex justify-content-center'>
                      <img src={items.imgUrl} alt={items.id} style={{ height: '200px' }} />
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
                      onClick={() => {
                        dispatch(addToCart(items))
                        toast.success('Item added to cart!');
                      }}
                      style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+
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
  );
};

export default NewArrival;

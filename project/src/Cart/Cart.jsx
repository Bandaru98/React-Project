import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from '../Redux/ProductAction/ProductAction'
import { addToCart } from '../Redux/ProductAction/ProductAction';
import { toast } from 'react-toastify';

const Cart = () => {
  const dispatch = useDispatch()
  const cart_data = useSelector((state) => state.productData.cartData)
  console.log(cart_data);

  const totalPrice = cart_data.reduce((prevsValue, currentValue) => {
    return prevsValue + currentValue.price;
  }, 0)

  return (
    <>

      <div className="container" style={{ backgroundColor: '#f6f9fc' }}>
        <div className="row">
          <div className="col-7">
            {
              cart_data && cart_data.length ? (
                cart_data.map((item) => (

                  <div className="row mt-4 mb-1 ms-4 mb-3" style={{ backgroundColor: '#ffffff', height: '200px' }}>
                    <div className="col-md-4">
                      <img src={item.imgUrl} alt="icon" className='img-fluid' />

                    </div>
                    <div className="col-md-8">
                      <div className='card-title'>
                        <h4 className="card-title">{item.productName}</h4>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-4 mt-4">
                        <h4>${item.price}</h4>
                        <div>
                          <button className='pb-1' style={{ border: '0px' }} onClick={() => {
                            dispatch(addToCart(item));
                            toast.success('Item added to cart!');
                          }}>+</button>
                          <button onClick={() => dispatch(removeFromCart(item.id))} className='ms-2' style={{ border: '0px' }}>-</button>
                        </div>
                      </div>
                    </div>

                  </div>


                ))
              )
                :
                (<div className='text-center mt-4 mb-4'><h4>Empty Cart</h4></div>)
            }

          </div>
          <div className="col-1"></div>
          <div className="col-4 mt-4" style={{ height: '200px', width: '300px', backgroundColor: '#ffffff' }}>
            <h3>Cart Summary</h3><hr />
            <p>Total Price:</p>
            {/* <h3>${totalPrice}</h3> */}
            <h3>${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </>

  )
}

export default Cart


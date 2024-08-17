import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from '../Redux/ProductAction/ProductAction';


const Cart = () => {

  const [Value, setValue] = useState(1)

  const inputValue = () => {
    setValue(Value + 1)
  }
  const outputValue = () => {
    if (Value > 0) {
      setValue(Value - 1)
    }
  }

  const dispatch = useDispatch()

  const cart_data = useSelector((state) => state.productData.cartData)
  console.log(cart_data);

  const totalPrice = cart_data.reduce((prevsValue, currentValue) => {
    return prevsValue + currentValue.price;
  }, 0)

  return (
    <>
      {/* Cart */}
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
                      <div className='card-title d-flex justify-content-between mt-4'>
                        <h4 className="card-title">{item.productName}</h4>
                        <h4 onClick={() => (dispatch(removeFromCart(item.id)))}><i class="bi bi-x-lg"></i></h4>
                      </div>

                      <div className="d-flex justify-content-between align-items-center mt-4">
                        <h6><span>${item.price}</span>*
                          <span>{Value}</span>
                          <span className='ms-4'>${item.price}</span>
                        </h6>
                        <div>
                          <button style={{ border: '0px' }} onClick={() => inputValue()}>+</button>
                          <button onClick={() => outputValue()} className='ms-2' style={{ border: '0px' }}>-</button>
                        </div>
                      </div>
                    </div>

                  </div>
                ))
              )
                :
                (<div className='text-center align-items-center mt-4 mb-4'>
                  <h4>Empty Cart</h4>
                </div>)
            }

          </div>

          <div className="col-1"></div>

          {/* Cart Summary */}
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


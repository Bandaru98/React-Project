import React from 'react'
import { useSelector } from "react-redux";

const Cart = () => {
  const cart_data = useSelector((state) => state.productData.cartData)
  console.log(cart_data);

  return (
    <>
      <div className="container" style={{ backgroundColor: '#a3eccd' }}>


        <div className="row">
          <div className="col-7">
            {cart_data.map((item) => (
         
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
                      <button>+</button>
                      <button className='ms-2'>-</button>
                    </div>
                  </div>
                </div>

              </div>

        
            ))}

          </div>
          <div className="col-1"></div>
          <div className="col-4 mt-4" style={{ height: '200px', width: '300px', backgroundColor: '#ffffff' }}>
            <h3>Cart Summary</h3><hr></hr>
            <p>Total Price</p>

          </div>
        </div>
      </div>
    </>

  )
}

export default Cart



























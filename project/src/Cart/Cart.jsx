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
                          <button className='pb-1' style={{ border: '0px' }}>+</button>
                          <button className='ms-2' style={{ border: '0px' }}>-</button>
                        </div>
                      </div>
                    </div>

                  </div>


                ))
              ) : (<div>  <h4>No Items add in Cart</h4></div>)
            }

          </div>
          <div className="col-1"></div>
          <div className="col-4 mt-4" style={{ height: '200px', width: '300px', backgroundColor: '#ffffff' }}>
            <h3>Cart Summary</h3><hr />
            <p>Total Price</p>
            <h3>0</h3>
          </div>
        </div>
      </div>
    </>

  )
}

export default Cart


//----------------------------------
// import React from 'react';
// import { useSelector, useDispatch } from "react-redux";
// // import { addToCart, removeFromCart } from '../Bigdiscount/BigDis'; // Import your actions

// const Cart = () => {
//   const cart_data = useSelector((state) => state.productData.cartData);
//   const dispatch = useDispatch();

//   // const addToCart = (productId) => {
//   //   if (productId) {
//   //     dispatch(addToCart(productId));
//   //   }
//   // };

//   // const removeFromCart = (productId) => {
//   //   if (productId) {
//   //     dispatch(removeFromCart(productId));
//   //   }
//   // };

//   const totalPrice = cart_data.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className="container" style={{ backgroundColor: '#a3eccd' }}>
//       <div className="row">
//         <div className="col-7">
//           {cart_data && cart_data.length ? (
//             cart_data.map((item) => (
//               <div key={item.id} className="row mt-4 mb-1 ms-4 mb-3" style={{ backgroundColor: '#ffffff', height: '200px' }}>
//                 <div className="col-md-4">
//                   <img src={item.imgUrl} alt="icon" className='img-fluid' />
//                 </div>
//                 <div className="col-md-8">
//                   <div className='card-title'>
//                     <h4 className="card-title">{item.productName}</h4>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mb-4 mt-4">
//                     <h4>${item.price}</h4>
//                     <div>
//                       <button className='pb-1' style={{ border: '0px' }} onClick={() => addToCart(item.id)}>+</button>
//                       <span className='ms-2 me-2'>{item.quantity}</span>
//                       <button className='ms-2' style={{ border: '0px' }} onClick={() => removeFromCart(item.id)}>-</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div>
//               <h4>No Items added in Cart</h4>
//             </div>
//           )}
//         </div>
//         <div className="col-1"></div>
//         <div className="col-4 mt-4" style={{ height: '200px', width: '300px', backgroundColor: '#ffffff' }}>
//           <h3>Cart Summary</h3>
//           <hr />
//           <p>Total Price</p>
//           <h3>${totalPrice.toFixed(2)}</h3>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;

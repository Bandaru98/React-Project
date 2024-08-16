import React from 'react'
import { useSelector } from "react-redux";

const Cart = () => {
  const cart_data = useSelector((state) => state.productData.cartData)
  console.log(cart_data);

  return (
    <div>
      <div className="container">
   

        <div className="row">
          <div className="col-8 card">
          {cart_data.map((item) => (
            <div className="row">
              <div className="col-md-4">
                <img src={item.imgUrl} alt="icon" className='img-fluid' />
                {/* <span>{item.productName}</span> */}
              </div>
              <div className="col-md-8">
                <div className='card-title'>
                  <h4 className="card-title">{item.productName}</h4>
                 </div>
                 <div className="d-flex justify-content-between align-items-center mb-4">
                <h4>{item.price}</h4>
               <div> 
                <button>+</button>
                <button className='ms-2'>-</button>
                </div>
                </div>
              </div>

            </div>
  ))}
           
          </div>



          <div className="col-4 card" style={{height:'200px'}}>
            <h3>Cart Summary</h3>
            <p>Total Price</p>

          </div>
        </div>

    

</div>
    </div>

  )
}

export default Cart





























// import React, { useState } from 'react';
// import productImg01 from "../Images/double-sofa-01.png";
// import productImg02 from "../Images/double-sofa-02.png";
// import productImg03 from "../Images/double-sofa-03.png";
// // import { products } from '../Images/products';

// const Cart = () => {
//     const [items, setItems] = useState([]);
//     const [inputValue, setInputValue] = useState('');
//     const [selectedIcon, setSelectedIcon] = useState('');

//     // List of available icons to choose from
//     const icons = {
//         productImg01,
//         productImg02,
//         productImg03,
//         // products,
//     };

//     // Add item with associated icon and default quantity
//     const addItem = () => {
//         if (inputValue.trim() && selectedIcon) {
//             const existingItem = items.find(item => item.name === inputValue);
//             if (existingItem) {
//                 setItems(items.map(item =>
//                     item.name === inputValue
//                         ? { ...item, quantity: item.quantity + 1 }
//                         : item
//                 ));
//             } else {
//                 setItems([...items, { name: inputValue, icon: icons[selectedIcon], quantity: 1 }]);
//             }
//             setInputValue('');
//             setSelectedIcon('');
//         }
//     };

//     // Increment item quantity
//     const incrementItem = (index) => {
//         setItems(items.map((item, i) =>
//             i === index ? { ...item, quantity: item.quantity + 1 } : item
//         ));
//     };

//     // Decrement item quantity or remove if quantity reaches 0
//     const decrementItem = (index) => {
//         setItems(items.map((item, i) =>
//             i === index
//                 ? item.quantity > 1
//                     ? { ...item, quantity: item.quantity - 1 }
//                     : null
//                 : item
//         ).filter(Boolean)); // Filter out null items
//     };

//     return (
//         <div>

//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 placeholder="Add a new item"
//             />
//             <select
//                 value={selectedIcon}
//                 onChange={(e) => setSelectedIcon(e.target.value)}
//             >
//                 <option value="">Select an icon</option>
//                 <option value="productImg01"> 01</option>
//                 <option value="productImg02"> 02</option>
//                 <option value="productImg03"> 03</option>
//                 {/* <option value="products">1</option> */}
             
//             </select>
//             <button onClick={addItem}>Add Item</button>

//             <ul>
                // {items.map((item, index) => (
                //     <li key={index}>
                //         <div className="row align-items-center">
                //             <div className="col-7 card">
                //                 <div className="row">
                //                     <div className="col-md-6">
                //                         <img src={item.icon} alt="icon" style={{ width: '20px', marginRight: '10px' }} />
                //                         {item.name}
                //                     </div>
                //                     <div className="col-md-6 mt-2">
                //                         <h3>{item.name}</h3>
                //                         <div className="d-flex justify-content-evenly align-items-center">
                //                             <p>${(item.price || 193).toFixed(2)} x {item.quantity}</p>
                //                             <h4>${(item.price || 193 * item.quantity).toFixed(2)}</h4>
                                            // <span onClick={() => decrementItem(index)} style={{ cursor: 'pointer' }}>-</span>
                                            // <span onClick={() => incrementItem(index)} style={{ cursor: 'pointer' }}>+</span>
                //                         </div>
                //                     </div>
                //                 </div>
                //             </div>




                //             <div className="card col-5">
                //                 <h3>Cart Summary</h3>
                //                 <p>Total Price</p>
                //                 <h4>${items.reduce((total, item) => total + 193 * item.quantity, 0).toFixed(2)}</h4>
                //             </div>


                //         </div>
//                     </li>
//                 ))}
//             </ul>

          
//         </div>
//     );
// };

// export default Cart;

// //------------------------------------------

// // import React, { useState, useEffect } from 'react';

// // const Cart = () => {
// //     const [items, setItems] = useState([]);

// //     useEffect(() => {
// //         const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
// //         setItems(cartItems);
// //     }, []);

// //     const incrementItem = (index) => {
// //         const updatedItems = items.map((item, i) =>
// //             i === index ? { ...item, quantity: item.quantity + 1 } : item
// //         );
// //         setItems(updatedItems);
// //         localStorage.setItem('cart', JSON.stringify(updatedItems));
// //     };

// //     const decrementItem = (index) => {
// //         let updatedItems = items.map((item, i) =>
// //             i === index
// //                 ? item.quantity > 1
// //                     ? { ...item, quantity: item.quantity - 1 }
// //                     : null
// //                 : item
// //         ).filter(Boolean);
// //         setItems(updatedItems);
// //         localStorage.setItem('cart', JSON.stringify(updatedItems));
// //     };

// //     return (
// //         <div className='container mt-4'>
// //             <h2>Cart</h2>
// //             <ul>
                // {items.map((item, index) => (
                //     <li key={index} className="mb-3">
                //         <div className="row align-items-center">
                //             <div className="col-7 card">
                //                 <div className="row">
                //                     <div className="col-md-6">
                //                         <img src={item.imgUrl} alt="icon" style={{ width: '50px', marginRight: '10px' }} />
                //                         <span>{item.productName}</span>
                //                     </div>
                //                     <div className="col-md-6 mt-2">
                //                         <div className="d-flex justify-content-evenly align-items-center">
                //                             <p>${(item.price).toFixed(2)} x {item.quantity}</p>
                //                             <span onClick={() => decrementItem(index)} style={{ cursor: 'pointer' }}>-</span>
                //                             <span onClick={() => incrementItem(index)} style={{ cursor: 'pointer' }}>+</span>
                //                         </div>
                //                     </div>
                //                 </div>
                //             </div>
                //             <div className="col-5 card">
                //                 <h3>Cart Summary</h3>
                //                 <p>Total Price</p>
                //                 <h4>${items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h4>
                //             </div>
                //         </div>
                //     </li>
                // ))}
// //             </ul>
// //         </div>
// //     );
// // };

// // export default Cart;




// // import React, { useState } from 'react';
// // import { discoutProducts } from '../Images/products';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { toast } from 'react-toastify';

// // const BigDis = () => {
// //     const [hoveredCardId, setHoveredCardId] = useState(null);
// //     const navigate = useNavigate();

// //     const handleAddToCart = (item) => {
// //         let cart = JSON.parse(localStorage.getItem('cart')) || [];
// //         let existingItem = cart.find((cartItem) => cartItem.id === item.id);

// //         if (existingItem) {
// //             existingItem.quantity += 1;
// //         } else {
// //             cart.push({ ...item, quantity: 1 });
// //         }

// //         localStorage.setItem('cart', JSON.stringify(cart));

// //         toast.success('Item added to cart!');
// //         navigate('/cart'); // Navigate to the Cart page after adding item
// //     };

// //     return (
// //         <div className='container mt-4 mb-4' style={{ backgroundColor: '#f6f9fc' }}>
// //             <h2 className='text-center'>Big Discount</h2>
// //             <div className='row'>
// //                 {discoutProducts.map((item) => (
// //                     <div className='col-md-4' key={item.id}>
// //                         <div className='card mb-3'>
// //                             <div className='d-flex justify-content-between m-2 p-3'>
// //                                 <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px' }}>{item.discount}% off</span>
// //                                 <i className="bi bi-heart-fill" style={{ display: hoveredCardId === item.id ? 'block' : 'none' }}></i>
// //                             </div>
// //                             <div className='card-body'>
// //                                 <div className='card-img-top d-flex justify-content-center'>
// //                                     <img src={item.imgUrl} alt={item.id} style={{ height: '150px' }} />
// //                                 </div>
                                // <div className='card-title'>
                                //     <h6 className="card-title">{item.productName}</h6>
                                //     <span className='d-flex'>
                                //         <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                                //         <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                //         <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                //         <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                //         <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                //     </span>
                                // </div>
// //                                 <div className='d-flex justify-content-between'>
// //                                     <h6>$ {item.price}</h6>
// //                                     <button
// //                                         onMouseEnter={() => setHoveredCardId(item.id)}
// //                                         onMouseLeave={() => setHoveredCardId(null)}
// //                                         onClick={() => handleAddToCart(item)}
// //                                         style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}
// //                                     >
// //                                         +
// //                                     </button>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default BigDis;






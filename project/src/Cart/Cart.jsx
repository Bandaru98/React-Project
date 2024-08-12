import React, { useState } from 'react';
// import React from 'react'
import productImg01 from "../Images/double-sofa-01.png";
import productImg02 from "../Images/double-sofa-02.png";
import productImg03 from "../Images/double-sofa-03.png";

const Cart = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [selectedIcon, setSelectedIcon] = useState('');

    // List of available icons to choose from
    const icons = {
        productImg01,
        productImg02,
        productImg03,
    };

    // Step 3: Add item with associated icon
    const addItem = () => {
        if (inputValue.trim() && selectedIcon) {
            setItems([...items, { name: inputValue, icon: icons[selectedIcon] }]);
            setInputValue('');
            setSelectedIcon('');
        }
    };
    return (


        <div>
            <h2>Dynamic List with Icons</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new item"
            />
            <select
                value={selectedIcon}
                onChange={(e) => setSelectedIcon(e.target.value)}
            >
                <option value="">Select an icon</option>
                <option value="productImg01">productImg01</option>
                <option value="productImg02">productImg02</option>
                <option value="productImg03">productImg02</option>
            </select>
            <button onClick={addItem}>Add Item</button>
     
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                    <div className="row align-items-center">
                    <div className="row mb-3">
                       <div className="col-8 card">
                           <div className="row">
                               <div className="col-md-5">
                                  <img src={item.icon} alt="icon" style={{ width: '20px', marginRight: '10px' }} />
                        {item.name}
                                   {/* <img src={productImg01} alt="Product" className="img-fluid" /> */}
                               </div>
                               <div className="col-md-7 mt-2">
                                   <h3>Stone and Beam Westview</h3>
                                   <div className="d-flex justify-content-evenly">
                                       <p>$193.00 x 1</p>
                                       <h4>$193.00</h4>
                                       <span>-</span>
                                       <span>+</span>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="card col-4">
                           <h3>Cart Summary</h3>
                           <p>Total Price</p>
                           <h4>$619.00</h4>
                       </div>
                   </div>
               </div>
                        {/* <img src={item.icon} alt="icon" style={{ width: '20px', marginRight: '10px' }} />
                        {item.name} */}
                    </li>
                 
                ))}
            </ul>
        </div>

        //-------    
        // <div className="container mt-3 mb-3 p-1">
        //     {/*  */}

            // <div className="row align-items-center">
            //     <div className="row mb-3">
            //         <div className="col-8 card">
            //             <div className="row">
            //                 <div className="col-md-5">
            //                     <img src={productImg01} alt="Product" className="img-fluid" />
            //                 </div>
            //                 <div className="col-md-7 mt-2">
            //                     <h3>Stone and Beam Westview</h3>
            //                     <div className="d-flex justify-content-evenly">
            //                         <p>$193.00 x 1</p>
            //                         <h4>$193.00</h4>
            //                         <span>-</span>
            //                         <span>+</span>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="card col-4">
            //             <h3>Cart Summary</h3>
            //             <p>Total Price</p>
            //             <h4>$619.00</h4>
            //         </div>
            //     </div>
            // </div>

        //     {/*  */}

        //     {/* <div className="row align-items-center">
        //         <div className="row mb-3">

        //             <div className="col-8 card">

        //                 <div className="row">
        //                     <div className="col-md-5">
        //                         <img src={productImg02} alt="Product" className="img-fluid" />
        //                     </div>
        //                     <div className="col-md-7 mt-2">
        //                         <h3>Stone and Beam Westview</h3>
        //                         <div className="d-flex justify-content-evenly">
        //                             <p>$193.00 x 1</p>
        //                             <h4>$193.00</h4>
        //                         </div>
        //                     </div>
        //                 </div>

        //             </div>

        //             <div className="col-4">

        //             </div>


        //         </div>

        //     </div> */}
        //     {/*  */}

        //     {/* <div className="row align-items-center">
        //         <div className="row">

        //             <div className="col-8 card">

        //                 <div className="row mb-3">
        //                     <div className="col-md-5">
        //                         <img src={productImg03} alt="Product" className="img-fluid" />
        //                     </div>
        //                     <div className="col-md-7 mt-2">
        //                         <h3>Stone and Beam Westview</h3>
        //                         <div className="d-flex justify-content-evenly">
        //                             <p>$193.00 x 1</p>
        //                             <h4>$193.00</h4>
        //                         </div>

        //                     </div>
        //                 </div>

        //             </div>

        //             <div className="col-4">

        //             </div>


        //         </div>

        //     </div> */}


        // </div>


    )
}

export default Cart




// ====================================================
// import React, { useState } from 'react';
// import productImg01 from "../Images/double-sofa-01.png";
// function Cart() {
//     const [quantity, setQuantity] = useState(1);
//     const price = 193.00;

//     const incrementQuantity = () => {
//         setQuantity(prevQuantity => prevQuantity + 1);
//     };

//     const decrementQuantity = () => {
//         if (quantity > 1) {
//             setQuantity(prevQuantity => prevQuantity - 1);
//         }
//     };

//     const deleteCard = () => {
//         console.log('Delete card function');
//         // Handle card deletion logic here
//     };

//     return (
//         <div className="row align-items-center">
//             <div className="row mb-3">

//                 <div className="col-8 card position-relative">
//                     {/* Replace Delete Icon with * symbol */}
//                     <span
//                         className="position-absolute top-0 end-0 m-2"
//                         style={{ cursor: 'pointer', fontSize: '24px', fontWeight: 'bold' }}
//                         onClick={deleteCard}
//                     >
//                         *
//                     </span>

//                     <div className="row">
//                         <div className="col-md-5">
//                             <img src={productImg01} alt="Product" className="img-fluid" />
//                         </div>
//                         <div className="col-md-7 mt-2">
//                             <h3>Stone and Beam Westview</h3>
//                             <div className="d-flex justify-content-evenly align-items-center">
//                                 <p>${price.toFixed(2)} x {quantity}</p>
//                                 <h4>${(price * quantity).toFixed(2)}</h4>
//                             </div>
//                             {/* Replace Buttons with + and - symbols */}
//                             <div className="d-flex justify-content-evenly mt-3 align-items-center">
//                                 <span
//                                     style={{ cursor: 'pointer', fontSize: '24px', fontWeight: 'bold' }}
//                                     onClick={decrementQuantity}
//                                 >
//                                     -
//                                 </span>
//                                 <span style={{ fontSize: '20px' }}>{quantity}</span>
//                                 <span
//                                     style={{ cursor: 'pointer', fontSize: '24px', fontWeight: 'bold' }}
//                                     onClick={incrementQuantity}
//                                 >
//                                     +
//                                 </span>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//                 <div className="card col-4">
//                     <h3>Cart Summary</h3>
//                     <p>Total Price</p>
//                     <h4>${(price * quantity).toFixed(2)}</h4>
//                 </div>
//             </div>
//             {/*  */}
//             <div className="row mb-3">

//                 <div className="col-8 card position-relative">
//                     {/* Replace Delete Icon with * symbol */}
//                     <span
//                         className="position-absolute top-0 end-0 m-2"
//                         style={{ cursor: 'pointer', fontSize: '24px', fontWeight: 'bold' }}
//                         onClick={deleteCard}
//                     >
//                         *
//                     </span>

//                     <div className="row">
//                         <div className="col-md-5">
//                             <img src={productImg01} alt="Product" className="img-fluid" />
//                         </div>
//                         <div className="col-md-7 mt-2">
//                             <h3>Stone and Beam Westview</h3>
//                             <div className="d-flex justify-content-evenly align-items-center">
//                                 <p>${price.toFixed(2)} x {quantity}</p>
//                                 <h4>${(price * quantity).toFixed(2)}</h4>
//                             </div>
//                             {/* Replace Buttons with + and - symbols */}
//                             <div className="d-flex justify-content-evenly mt-3 align-items-center">
//                                 <span
//                                     style={{ cursor: 'pointer', fontSize: '24px', fontWeight: 'bold' }}
//                                     onClick={decrementQuantity}
//                                 >
//                                     -
//                                 </span>
//                                 <span style={{ fontSize: '20px' }}>{quantity}</span>
//                                 <span
//                                     style={{ cursor: 'pointer', fontSize: '24px', fontWeight: 'bold' }}
//                                     onClick={incrementQuantity}
//                                 >
//                                     +
//                                 </span>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//                 <div className="col-4">

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Cart;


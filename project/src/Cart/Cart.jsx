
import React, { useState } from 'react';
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

    // Add item with associated icon and default quantity
    const addItem = () => {
        if (inputValue.trim() && selectedIcon) {
            const existingItem = items.find(item => item.name === inputValue);
            if (existingItem) {
                setItems(items.map(item =>
                    item.name === inputValue
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ));
            } else {
                setItems([...items, { name: inputValue, icon: icons[selectedIcon], quantity: 1 }]);
            }
            setInputValue('');
            setSelectedIcon('');
        }
    };

    // Increment item quantity
    const incrementItem = (index) => {
        setItems(items.map((item, i) =>
            i === index ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    // Decrement item quantity or remove if quantity reaches 0
    const decrementItem = (index) => {
        setItems(items.map((item, i) =>
            i === index
                ? item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : null
                : item
        ).filter(Boolean)); // Filter out null items
    };

    return (
        <div>
          
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
                <option value="productImg01"> 01</option>
                <option value="productImg02"> 02</option>
                <option value="productImg03"> 03</option>
            </select>
            <button onClick={addItem}>Add Item</button> 

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <div className="row align-items-center">
                            <div className="col-8 card">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src={item.icon} alt="icon" style={{ width: '20px', marginRight: '10px' }} />
                                        {item.name}
                                    </div>
                                    <div className="col-md-7 mt-2">
                                        <h3>{item.name}</h3>
                                        <div className="d-flex justify-content-evenly align-items-center">
                                            <p>${(item.price || 193).toFixed(2)} x {item.quantity}</p>
                                            <h4>${(item.price || 193 * item.quantity).toFixed(2)}</h4>
                                            <span onClick={() => decrementItem(index)} style={{ cursor: 'pointer' }}>-</span>
                                            <span onClick={() => incrementItem(index)} style={{ cursor: 'pointer' }}>+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="card col-4">
                <h3>Cart Summary</h3>
                <p>Total Price</p>
                <h4>${items.reduce((total, item) => total + 193 * item.quantity, 0).toFixed(2)}</h4>
            </div>
        </div>
    );
};

export default Cart;









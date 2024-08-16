
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../Images/products';


const NewArrival = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getproducts();
  }, [])

  const handleAddToCart = () => {
    setCartItems(cartItems + 1);
    alert('Item added to cart!');
  };


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
      {/* <header>
        <h2>Cart Items: {cartItems}</h2>
      </header> */}
      <div className='container'>
        <h2 className='text-center'>New Arrivals</h2>
        {/*  */}
        <div className="row mb-3 d-flex justify-content-center">

          {

            cartItems.map((items) => (
              <div className='col-md-4' key={items.id} >
                <Link to={`product/${items.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className='card mb-3'>
                    {/* <div className='d-flex justify-content-between m-2 p-3'>
                      <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px' }}>{items.discount}% off</span>
                      <i className="bi bi-heart-fill"></i>
                    </div> */}
                    <div className='card-body'>
                      <div className='card-img-top d-flex justify-content-center'>
                      <img src={items.imgUrl} alt={items.id} style={{ height: '150px' }} />
                        {/* <img src={items.imgUrl} className="card-img-top w-50" alt={items.id} style={{ height: '200px' }} /> */}
                      </div>
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
                        <button onClick={handleAddToCart}
                          style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }


        </div>
      </div >
    </>
  );
};

export default NewArrival;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { products } from '../Images/products';

// const NewArrival = () => {
//   const [arrivalProducts, setArrivalProducts] = useState([]);

//   useEffect(() => {
//     getproducts();
//   }, []); // Add empty dependency array to run only on mount

//   const getproducts = () => {
//     const temp = products.filter((item) =>
//       item.category === 'mobile' || item.category === 'wireless'
//     );
//     setArrivalProducts(temp);
//   };

//   return (
//     <div className='container'>
//       <h2 className='text-center'>New Arrivals</h2>
//       <div className="row mb-3 d-flex justify-content-center">
//         {
//           arrivalProducts.map((item) => (
//             <div className='col-md-4' key={item.id} >
//               <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                 <div className='card mb-3'>
//                   <div className='d-flex justify-content-between m-2 p-3'>
//                     <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px' }}>{item.discount}% off</span>
//                     <i className="bi bi-heart-fill"></i>
//                   </div>
//                   <div className='card-body'>
//                     <div className='card-img-top d-flex justify-content-center'>
//                       <img src={item.imgUrl} className="card-img-top w-50" alt={item.id} style={{ height: '150px' }} />
//                     </div>
//                     <div className='card-title'>
//                       <h6 className="card-title">{item.productName}</h6>
//                       <span className='d-flex'>
//                         <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
//                         <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
//                         <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
//                         <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
//                         <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
//                       </span>
//                     </div>
//                     <div className='d-flex justify-content-between'>
//                       <h6>$ {item.price}</h6>
//                       <button
//                         onClick={() => alert('Item added to cart!')}
//                         style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   );
// };

// export default NewArrival;

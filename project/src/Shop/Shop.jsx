import React, { useState } from 'react';
// import { discoutProducts } from '../Images/products';
import { Link } from 'react-router-dom';
import { products } from '../Images/products';
import { toast } from 'react-toastify';
// import bgroung from '../Background/bgroung.avif';
import table from '../Images/table.jpg'
import { addToCart } from '../Redux/ProductAction/ProductAction';
import { useDispatch } from 'react-redux'

const Shop = () => {
    const dispatch = useDispatch();
    // filtering category sofa---
    const currentItem = products.filter((element) => {
        return element.category === 'sofa'
    })

    const [pro, setPro] = useState(currentItem); //initial value is currentItem [sofa]

    const [coverdata, setCover] = useState('product')
    // const [proname, setProname] = useState(currentItem)
    const handleChange = (x) => {
        let temp = products.filter((item) => {
            return item.category === x;
        });
        setPro(temp);
        setCover(x)
    };

    const handleIn = (e) => {
        e.preventDefault();
        let temp = products.filter((item) => {
            return item.category === e.target[0].value;
        });
        setPro(temp);
        console.log(e.target[0].value);

        // if (temp) {
        //     setProname(temp)
        //     setCover(e.target[0].value)
        // } else {
        //     setProname([])
        // }
    };


    const handleAddToCart = () => {
        toast.success('Item added to cart!');
    };

    return (
        <>
            {/* Background */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <img src={table} alt="background" className='img-fluid w-100' style={{ maxHeight: '250px', filter: 'brightness(50%)' }} />
                        <h1 className="position-absolute bottom-50 start-50 translate-middle text-white" style={{ zIndex: 2 }}>
                            {coverdata}
                        </h1>
                    </div>
                </div>
            </div>
            {/* Dropdown Input Search */}
            <div className='container mt-4'>
                <div className="row mb-4">
                    <div className="col-4">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Filter by Category
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" onClick={() => handleChange('sofa')}>Sofa</Link></li>
                                <li><Link className="dropdown-item" onClick={() => handleChange('chair')}>Chair</Link></li>
                                <li><Link className="dropdown-item" onClick={() => handleChange('watch')}>Watch</Link></li>
                                <li><Link className="dropdown-item" onClick={() => handleChange('mobile')}>Mobile</Link></li>
                                <li><Link className="dropdown-item" onClick={() => handleChange('wireless')}>Wireless</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <form className='d-flex' role='search' onSubmit={handleIn}>
                            <input className='form-control' type="search" placeholder="Search" />
                            <button className='btn btn-secondary' type='submit'><i className="bi bi-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
            {/* Itemlists */}
            <div className="container">
                <div className="row mb-3 mt-4 d-flex justify-content-center">
                    {
                        pro.map((items) => (
                            <div className="col-md-4 mb-sm-0" key={items.id}>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className='d-flex justify-content-center'>
                                            <img src={items.imgUrl} alt={items.title} className='img-fluid' style={{ height: '200px' }} />
                                        </div>
                                        <h6>{items.title}</h6>
                                        <div className='d-grid justify-content-start'>
                                            <div className="star-hover">
                                                <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                                                <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                                <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                                <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                                <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between p-3'>
                                            <h6>${items.price}</h6>
                                            <button
                                                onClick={() => {
                                                    dispatch(addToCart(items));
                                                    handleAddToCart();
                                                }}
                                                style={{ border: 'none', borderRadius: '50%', backgroundColor: '#0f3460', color: 'white', width: '30px', height: '30px' }}  
                                                className="add-cart-btn"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Shop;















// import React, { useState } from 'react';
// import { discoutProducts } from '../Images/products';
// import { Link } from 'react-router-dom';
// import { products } from '../Images/products';
// import { toast } from 'react-toastify';
// import bgroung from '../Background/bgroung.avif';

// const Shop = () => {

//     const [pro, setPro] = useState(discoutProducts);

//     const handleChange = (x) => {
//         let temp = products.filter((item) => {
//             return item.category === x;
//         });
//         setPro(temp);
//     };

//     const handleIn = (e) => {
//         e.preventDefault();
//         let temp = products.filter((item) => {
//             return item.category === e.target[0].value;
//         });
//         setPro(temp);
//         console.log(e.target[0].value);
//     };

//     const handleAddToCart = () => {
//         toast.success('Item added to cart!');
//     };

//     return (
//         <>
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-md-12">
//                         <img src={bgroung} alt="background" className='img-fluid w-100' style={{ maxHeight: '250px' }} />
//                         <h2 className="position-absolute bottom-50 start-50 translate-middle text-white" style={{ zIndex: 2 }}>
//                             Product
//                         </h2>
//                     </div>
//                 </div>
//             </div>


//             <div className='container mt-4'>

//                 <div className="row mb-4">
//                     <div className="col-4">
//                         <div className="dropdown">
//                             <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                                 Filter by Category
//                             </button>
//                             <ul className="dropdown-menu">
//                                 <li><Link className="dropdown-item" onClick={() => handleChange('sofa')}>Sofa</Link></li>
//                                 <li><Link className="dropdown-item" onClick={() => handleChange('chair')}>Chair</Link></li>
//                                 <li><Link className="dropdown-item" onClick={() => handleChange('watch')}>Watch</Link></li>
//                                 <li><Link className="dropdown-item" onClick={() => handleChange('mobile')}>Mobile</Link></li>
//                                 <li><Link className="dropdown-item" onClick={() => handleChange('wireless')}>Wireless</Link></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col-md-8">
//                         <form className='d-flex' role='search' onSubmit={handleIn}>
//                             <input className='form-control' type="search" placeholder="Search" />
//                             <button className='btn btn-secondary' type='submit'><i className="bi bi-search"></i></button>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//             <div className="container">
//                 <div className="row mb-3 mt-4 d-flex justify-content-center">
//                     {
//                         pro.map((items) => (
//                             <div className="col-md-4 mb-sm-0" key={items.id}>
//                                 <div className="card mb-3">
//                                     <div className="card-body">
//                                         <div className='d-flex justify-content-center'>
//                                             <img src={items.imgUrl} alt={items.title} className='img-fluid' style={{ height: '200px' }} />
//                                         </div>
//                                         <h6>{items.title}</h6>
//                                         <div className='d-grid justify-content-start'>
//                                             <div className="star-hover">
//                                                 <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
//                                                 <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
//                                                 <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
//                                                 <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
//                                                 <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
//                                             </div>
//                                         </div>
//                                         <div className='d-flex justify-content-between p-3'>
//                                             <h6>${items.price}</h6>
//                                             <button
//                                                 onClick={handleAddToCart}
//                                                 //  onClick={()=>{dispatch(addToCart(items))}}
//                                                 style={{ borderRadius: '50%', border: '0px' }}
//                                                 className="add-cart-btn"
//                                             >
//                                                 +
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Shop;




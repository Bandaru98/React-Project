
import React, { useEffect } from 'react';
import { SliderData } from '../Images/products';


const Slider = () => {

    useEffect(() => {
        const carouselElement = document.querySelector('#carouselExampleSlidesOnly');
        if (carouselElement) {
            const carousel = new window.bootstrap.Carousel(carouselElement, {
                interval: 2000,
                ride: 'carousel',
            });
        }
    }, []);

    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide mt-2" data-bs-ride="carousel" style={{ backgroundColor: '#f6f9fc' }}>
            <div className="carousel-inner">
                {SliderData.map((item, index) => (
                    <div
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        key={item.id}
                    >
                        <div className="row d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
                            <div className="col-md-1"></div>
                            <div className="col-md-4">
                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                                <button style={{ border: 'none' }}>Visit Collection</button>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-5 d-flex justify-content-center align-items-center">
                                <img src={item.cover} className="d-block w-50" alt={item.title} style={{ height: '350px' }} />
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;

//-----------

// import React from 'react'
// import { SliderData } from '../Images/products'

// const Slider = () => {

//   return (
//     // <>
//     <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" >
//       <div className="carousel-inner">

//         <div className='carousel-item active' data-bs-interval="3000" >
//           <div className='row d-flex align-items-center' style={{ height: '100vh' }}>
//             <div className='col-md-1'></div>
//             <div className='col-md-5'>
//               <h1>{SliderData[0].title}</h1>
//               <p>{SliderData[0].desc}</p>
//               <button style={{ border: '0px' }}>Visit Collection</button>
//             </div>
//             <div className='col-md-1'></div>
//             <div className='col-md-4 d-flex justify-content-center'>
//               <img src={SliderData[0].cover} class="d-block img-fluid" alt={SliderData[0].id} />
//             </div>
//             <div className='col-md-1'></div>
//           </div>
//         </div>

//         <div className='carousel-item ' data-bs-interval="3000" >
//           <div className='row d-flex align-items-center' style={{ height: '100vh' }}>
//             <div className='col-md-1'></div>
//             <div className='col-md-5'>
//               <h1>{SliderData[1].title}</h1>
//               <p>{SliderData[1].desc}</p>
//               <button style={{ border: '0px' }}>Visit Collection</button>
//             </div>
//             <div className='col-md-1'></div>
//             <div className='col-md-4 d-flex justify-content-center'>
//               <img src={SliderData[1].cover} class="d-block img-fluid" alt={SliderData[1].id} />
//             </div>
//             <div className='col-md-1'></div>
//           </div>
//         </div>

//         <div className='carousel-item ' data-bs-interval="3000" >
//           <div className='row d-flex align-items-center' style={{ height: '100vh' }}>
//             <div className='col-md-1'></div>
//             <div className='col-md-5'>
//               <h1>{SliderData[2].title}</h1>
//               <p>{SliderData[2].desc}</p>
//               <button style={{ border: '0px' }}>Visit Collection</button>
//             </div>
//             <div className='col-md-1'></div>
//             <div className='col-md-4 d-flex justify-content-center'>
//               <img src={SliderData[2].cover} class="d-block img-fluid" alt={SliderData[2].id} />
//             </div>
//             <div className='col-md-1'></div>
//           </div>
//         </div>

//         <div className='carousel-item ' data-bs-interval="3000" >
//           <div className='row d-flex align-items-center' style={{ height: '100vh' }}>
//             <div className='col-md-1'></div>
//             <div className='col-md-5'>
//               <h1>{SliderData[3].title}</h1>
//               <p>{SliderData[3].desc}</p>
//               <button style={{ border: '0px' }}>Visit Collection</button>
//             </div>
//             <div className='col-md-1'></div>
//             <div className='col-md-4 d-flex justify-content-center'>
//               <img src={SliderData[3].cover} class="d-block img-fluid" alt={SliderData[3].id} />
//             </div>
//             <div className='col-md-1'></div>
//           </div>
//         </div>

//       </div>
//     </div>
//     // </>

//   )
// }

// export default Slider
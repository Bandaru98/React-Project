

import React from 'react';
import wireless01 from "../Images/wireless-01.png";
import sofaSlide from "../Images/hero-img.png";
import phone08 from "../Images/phone-08.png";
import watchSlide from "../Images/watch-07.png";

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active" data-bs-interval="3000" style={{ backgroundColor: '#f6f9fc' }}>

                        <div className="row d-flex align-items-center justify-content-center" style={{ height: '500px' }}>
                            <div className="col-lg-5 col-md-6 col-sm-8 mt-4">
                                <h5>50% Off For Your First Shopping</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                                <button className="btn btn-primary">Visit Collection</button>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-8">
                                <img src={sofaSlide} className="d-block w-100 h-auto mx-auto" alt="Sofa" style={{ maxHeight: '300px' }} />
                            </div>
                        </div>
                        
                    </div>

                    <div className="carousel-item" data-bs-interval="3000"style={{ backgroundColor: '#f6f9fc' }}>
                        <div className="row d-flex align-items-center justify-content-center" style={{ height: '500px' }}>
                            <div className="col-lg-5 col-md-6 col-sm-8 mt-4">
                                <h5>50% Off For Your First Shopping</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                                <button className="btn btn-primary">Visit Collection</button>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-8">
                                <img src={wireless01} className="d-block w-100 h-auto mx-auto" alt="Wireless" style={{ maxHeight: '300px' }} />
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="3000"style={{ backgroundColor: '#f6f9fc' }}>
                        <div className="row d-flex align-items-center justify-content-center" style={{ height: '500px' }}>
                            <div className="col-lg-5 col-md-6 col-sm-8 mt-4">
                                <h5>50% Off For Your First Shopping</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                                <button className="btn btn-primary">Visit Collection</button>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-8">
                                <img src={phone08} className="d-block w-100 h-auto mx-auto" alt="Phone" style={{ maxHeight: '300px' }} />
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="3000"style={{ backgroundColor: '#f6f9fc' }}>
                        <div className="row d-flex align-items-center justify-content-center" style={{ height: '500px' }}>
                            <div className="col-lg-5 col-md-6 col-sm-8 text-center mt-4">
                                <h5>50% Off For Your First Shopping</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                                <button className="btn btn-primary">Visit Collection</button>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-8">
                                <img src={watchSlide} className="d-block w-100 h-auto mx-auto" alt="Watch" style={{ maxHeight: '300px' }} />
                            </div>
                        </div>
                    </div>

                </div> 
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">P</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">N</span>
                </button>
            </div>
            
        </div>


        //     <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        //     <div class="carousel-inner">
        //       <div class="carousel-item active" data-bs-interval="3000">

        //         <div className='row'>
        //           <div className='col-1'></div>
        //           <div className='col-4'>
        //             <h5>50% Off For Your First Shopping</h5>
        //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        //               Vel inventore ex aliquam facere eius aspernatur atque! 
        //               Cupiditate beatae necessitatibus error dolorum voluptatem. 
        //               Atque ea, accusamus unde enim perspiciatis iusto asperiores.</p>
        //             <button>Visit Collection</button>
        //           </div>
        //           <div className='col-2'></div>
        //           <div className='col-4'>
        //             <img src={wireless01} class="d-block w-50" alt="..." />
        //           </div>
        //           <div className='col-1'></div>
        //         </div>

        //       </div>

        //       <div class="carousel-item" data-bs-interval="3000">

        //         <div className='row'>
        //           <div className='col-1'></div>
        //           <div className='col-4'>
        //             <h5>50% Off For Your First Shopping</h5>
        //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        //               Vel inventore ex aliquam facere eius aspernatur atque! 
        //               Cupiditate beatae necessitatibus error dolorum voluptatem. 
        //               Atque ea, accusamus unde enim perspiciatis iusto asperiores.</p>
        //             <button>Visit Collection</button>
        //           </div>
        //           <div className='col-2'></div>
        //           <div className='col-4'>
        //             <img src={sofaSlide} class="d-block w-50" alt="..." />
        //           </div>
        //           <div className='col-1'></div>
        //         </div>

        //       </div>

        //       <div class="carousel-item" data-bs-interval="3000">

        //         <div className='row'>
        //           <div className='col-1'></div>
        //           <div className='col-4'>
        //             <h5>50% Off For Your First Shopping</h5>
        //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        //               Vel inventore ex aliquam facere eius aspernatur atque! 
        //               Cupiditate beatae necessitatibus error dolorum voluptatem. 
        //               Atque ea, accusamus unde enim perspiciatis iusto asperiores.</p>
        //             <button>Visit Collection</button>
        //           </div>
        //           <div className='col-2'></div>
        //           <div className='col-4'>
        //             <img src={phone08} class="d-block w-50" alt="..." />
        //           </div>
        //           <div className='col-1'></div>
        //         </div>

        //       </div>
        //     </div>
        //   </div>
    );
}

export default Slider;

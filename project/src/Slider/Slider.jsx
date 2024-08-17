
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

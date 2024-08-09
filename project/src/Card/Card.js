import React from 'react';

const Card = () => {
    return (

        <div className='container'>
            <div class="row">

                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card text-center" style={{ width: "18rem;", backgroundColor: '#fdefe6' }}>
                        <div class="card-body">
                            <i className='bi bi-car-front-fill' style={{ fontSize: '2rem' }}></i>
                            <h5 class="card-title">Free Shipping</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card text-center" style={{ width: "18rem;", backgroundColor: '#ceebe9' }}>
                        <div class="card-body">
                            <i className='bi bi-credit-card-2-back-fill' style={{ fontSize: '2rem' }}></i>
                            <h5 class="card-title">Safe Payment</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card text-center" style={{ width: "18rem;", backgroundColor: '#e2f2b2' }}>
                        <div class="card-body">
                            <i className='bi bi-shield-shaded' style={{ fontSize: '2rem' }}></i>
                            <h5 class="card-title">Secure Payment</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card text-center" style={{ width: "18rem;", backgroundColor: '#d6e5fb' }}>
                        <div class="card-body">
                            <i className='bi bi-headphones' style={{ fontSize: '2rem' }}></i>
                            <h5 class="card-title">Back Guarantee</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;


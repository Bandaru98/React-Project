// import React from 'react';

// const Card = () => {
//     return (
// <>
//         <div className='container'style={{marginTop:'50px',marginBottom:'50px'}} >
//             <div class="row">

//                 <div class="col-sm-3 mb-3 mb-sm-0">
//                     <div class="card text-center" style={{ width: "18rem;", backgroundColor: '#fdefe6' }}>
//                         <div class="card-body">
//                             <i className='bi bi-car-front-fill' style={{ fontSize: '2rem' }}></i>
//                             <h5 class="card-title">Free Shipping</h5>
//                             <p class="card-text">Lorem ipsum dolor sit amet.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col-sm-3 mb-3 mb-sm-0">
//                     <div class="card text-center" style={{ width: "18rem;", backgroundColor: '#ceebe9' }}>
//                         <div class="card-body">
//                             <i className='bi bi-credit-card-2-back-fill' style={{ fontSize: '2rem' }}></i>
//                             <h5 class="card-title">Safe Payment</h5>
//                             <p class="card-text">Lorem ipsum dolor sit amet.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col-sm-3 mb-3 mb-sm-0">
//                     <div class="card text-center" style={{ width: "18rem;", backgroundColor: '#e2f2b2' }}>
//                         <div class="card-body">
//                             <i className='bi bi-shield-shaded' style={{ fontSize: '2rem' }}></i>
//                             <h5 class="card-title">Secure Payment</h5>
//                             <p class="card-text">Lorem ipsum dolor sit amet.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col-sm-3 mb-3 mb-sm-0">
//                     <div class="card text-center" style={{ width: "18rem;", backgroundColor: '#d6e5fb' }}>
//                         <div class="card-body">
//                             <i className='bi bi-headphones' style={{ fontSize: '2rem' }}></i>
//                             <h5 class="card-title">Back Guarantee</h5>
//                             <p class="card-text">Lorem ipsum dolor sit amet.</p>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
// </>
//     );
// };

// export default Card;

//-------------------------------------
import React from 'react';
import { IonIcon } from '@ionic/react';
import { carOutline, cardOutline, shieldHalfOutline, headsetOutline } from 'ionicons/icons';



// Update the serviceData array to use icon objects instead of JSX elements
export const serviceData = [
  {
    icon: carOutline,
    title: "Free Shipping",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#fdefe6",
  },
  {
    icon: cardOutline,
    title: "Safe Payment",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#ceebe9",
  },
  {
    icon: shieldHalfOutline,
    title: "Secure Payment",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#e2f2b2",
  },
  {
    icon: headsetOutline,
    title: "Back Guarantee",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#d6e5fb",
  },
];

const Card = () => {
  return (
    <div className="container" style={{ marginTop: '50px', marginBottom: '50px'}}>
      <div className="row">
        {serviceData.map((service, index) => (
          <div className="col-sm-3 mb-3 mb-sm-0" key={index}>
            <div className="card text-center" style={{ width: '18rem', backgroundColor: service.bg }}>
              <div className="card-body">
                <IonIcon icon={service.icon} style={{ fontSize: '2rem' }} />
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;




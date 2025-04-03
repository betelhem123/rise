import React from 'react';
import './LatestAdditions.css';

import img1 from '../assets/images/bg-img/1.png';
import img2 from '../assets/images/bg-img/2.png';
import img3 from '../assets/images/bg-img/3.png';
import img4 from '../assets/images/bg-img/4.png';
import img5 from '../assets/images/bg-img/5.png';

const latestAdditions = [
  { img: img1, name: 'Laptop' },
  { img: img2, name: 'Smartphone' },
  { img: img3, name: 'Mouse Pad' },
  { img: img4, name: 'Headphones' },
  { img: img5, name: 'Monitor' },
];

const LatestAdditions = () => {
  return (
    <section className="latest-additions">
      <h2 className="section-title">Latest Additions</h2>
      <div className="grid-container">
        {latestAdditions.map((item, index) => (
          <div key={index} className="grid-item">
            <img src={item.img} alt={item.name} className="product-img" />
            <p className="product-name">{item.name}</p>
          </div>
        ))}
       
      </div>
      <button style={{
        marginTop: '20PX'
      }}>SHOP NOW</button>
    </section>
  );
};

export default LatestAdditions;
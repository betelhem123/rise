import React, { useState, useEffect } from 'react';
import './landing.css';
import { Link } from "react-router-dom";

import img1 from "../../src/assets/images/landing/1.png";
import img2 from "../../src/assets/images/landing/2.png";
import img3 from "../../src/assets/images/landing/3.png";
import img4 from "../../src/assets/images/landing/4.png";
import img5 from "../../src/assets/images/landing/5.png";

const imagesGroup1 = [img1, img3, img4]; // 1st, 3rd, and 4th images
const imagesGroup2 = [img2, img5]; // 2nd and 5th images

const Landing = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % imagesGroup1.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='landing'>
            
            <div className='intro'>
                <h1>RISE    COMPUTECH</h1>
                <h2>We offer <span className="highlight">High-quality</span> tech products, excellent service, and <br/>a <span className="highlight">Wide range</span> of options for ALL. </h2>
                <Link to="/shop">
  <button>Shop NOW</button>
</Link>
            </div>
            <div className='image-slider'>
                <div className='group'>
                    {imagesGroup1.map((img, i) => (
                        <img key={`g1-${i}`} src={img} className={`slide ${i === index ? 'active' : ''}`} alt={`Slide ${i + 1}`} />
                    ))}
                </div>
                <div className='group'>
                    {imagesGroup2.map((img, i) => (
                        <img key={`g2-${i}`} src={img} className={`slide ${i === index ? 'active' : ''}`} alt={`Slide ${i + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Landing;

import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import './HomeCategory.css'; // Import the CSS file

const subTitle = "Discounted Items";
const btnText = "Get Started Now";

// Generate a countdown title (next month's name)
const getNextMonthTitle = () => {
    const now = new Date();
    now.setMonth(now.getMonth() + 1);
    return `Buy Everything with Us - ${now.toLocaleString('default', { month: 'long' })}`;
};

const categoryList = [
  {
    imgUrl: 'src/assets/images/landing/1.png',
    imgAlt: 'category image',
    title: 'Iphone 12',
    discount: '30% OFF',
  },
  {
    imgUrl: 'src/assets/images/landing/2.png',
    imgAlt: 'category image',
    title: 'AirPods Pro 2',
    discount: '25% OFF',
  },
  {
    imgUrl: 'src/assets/images/landing/3.png',
    imgAlt: 'category image',
    title: 'Stealth A16 AI+ A3XVGG-002US',
    discount: '40% OFF',
  },
  {
    imgUrl: 'src/assets/images/landing/4.png',
    imgAlt: 'category image',
    title: 'Logitech MX Mechanical Wireless Keyboard',
    discount: '15% OFF',
  },
  {
    imgUrl: 'src/assets/images/landing/5.png',
    imgAlt: 'category image',
    title: 'Razer Firefly Hard V2 RGB Gaming Mouse Pad',
    discount: '20% OFF',
  },
  {
    imgUrl: 'src/assets/images/landing/12.png',
    imgAlt: 'category image',
    title: 'Logitech G X56 HOTAS Throttle and Joystick',
    discount: '35% OFF',
  },
];

const HomeCategory = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState(getNextMonthTitle());

  useEffect(() => {
    // Update title when month changes
    const interval = setInterval(() => {
      setTitle(getNextMonthTitle());
    }, 1000 * 60 * 60 * 24); // Check once a day

    // Observe section visibility for zoom-in/out effect
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearInterval(interval);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={`category-section ${isVisible ? 'visible' : ''}`}>
      <div className='container'>
        <div className="section-header text-center">
          <span className="subtitle" style={{ color: "black", fontSize: "50px" }}>{subTitle}</span>
          <h2 className="title" style={{ color: "red", fontSize: "24px" }}>{title}</h2>
        </div>

        <div className='section-wrapper'>
          <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
            {categoryList.map((val, i) => (
              <div key={i} className='col'>
                <Link to="/shop" className='category-item'>
                  <div className='category-inner'>
                    <div className="category-thumb">
                      <img src={val.imgUrl} alt={val.imgAlt} />
                      <div className="discount-badge">
                        <span>{val.discount}</span>
                      </div>
                    </div>
                    <div className="category-content">
                      <h6>{val.title}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className='text-center mt-5'>
            <Link to="/shop" className="lab-btn"><span>{btnText}</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;

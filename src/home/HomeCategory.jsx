import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import './HomeCategory.css'; // Import CSS

const subTitle = "Discounted Items";
const btnText = "Get Started Now";

// Function to get countdown timer
const getCountdown = () => {
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1); // Next month's 1st day
    const diff = nextMonth - now;

    return {
        title: `ENDS IN  `,
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
    };
};

// Product categories
const categoryList = [
  {id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86", imgUrl: 'src/assets/images/landing/1.png', title: 'Iphone 12', discount: '30% OFF' },
  {id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86", imgUrl: 'src/assets/images/landing/2.png', title: 'AirPods Pro 2', discount: '25% OFF' },
  {id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86", imgUrl: 'src/assets/images/landing/3.png', title: 'Stealth A16 AI+ A3XVGG-002US', discount: '40% OFF' },
  {id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86", imgUrl: 'src/assets/images/landing/4.png', title: 'Logitech MX Mechanical Wireless Keyboard', discount: '15% OFF' },
  {id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86", imgUrl: 'src/assets/images/landing/5.png', title: 'Razer Firefly Hard V2 RGB Gaming Mouse Pad', discount: '20% OFF' },
  {id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86", imgUrl: 'src/assets/images/landing/12.png', title: 'Logitech G X56 HOTAS Throttle and Joystick', discount: '35% OFF' },
];

const HomeCategory = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      clearInterval(interval);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const calculateStrokeOffset = (value, total) => {
    const circumference = 2 * Math.PI * 45;
    return ((total - value) / total) * circumference;
  };

  return (
    <div ref={sectionRef} className={`category-section ${isVisible ? 'visible' : ''}`}>
      <div className='container'>
        <div className="section-header text-center">
          <span className="subtitle" style={{ color: "black", fontSize: "50px" }}>{subTitle}</span>
          <h2 className="title" style={{ color: "red", fontSize: "24px" }}>{countdown.title}</h2>

          {/* Countdown Timer */}
          <div className="countdown-wrapper">
            {["days", "hours", "minutes", "seconds"].map((unit, index) => (
              <div key={index} className="countdown-item">
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" className="circle-bg"></circle>
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    className="circle-progress"
                    strokeDasharray="282.74"
                    strokeDashoffset={calculateStrokeOffset(countdown[unit], unit === "days" ? 30 : 60)}
                  ></circle>
                  <text x="50" y="55" className="circle-text">{countdown[unit]}</text>
                </svg>
                <span className="countdown-label">{unit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Listings */}
        <div className='section-wrapper'>
          <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
            {categoryList.map((val, i) => (
              <div key={i} className='col'>
                <Link to={`/shop/${val.id}`} className='category-item'>
                  <div className='category-inner'>
                    <div className="category-thumb">
                      <img src={val.imgUrl} alt={val.title} />
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

       
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;

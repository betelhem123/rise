import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import './HomeCategory.css'; // Make sure the CSS is imported here

const subTitle = "Discounted Items";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: 'src/assets/images/landing/1.png',
    imgAlt: 'category image',
   /* iconName: 'icofont-brand-windows',*/
    title: 'Iphone 12',
    discount: '30% OFF',
  },
  {
    imgUrl: 'src/assets/images/landing/2.png',
    imgAlt: 'category image',
    title: 'airpods pro 2',
    /*iconName: 'icofont-brand-windows',*/
    discount: '25% OFF',
  },
  {
    imgUrl: 'src/assets/images/landing/3.png',
    imgAlt: 'category image',
    /*
    iconName: 'icofont-brand-windows',*/
    title: 'Stealth A16 AI+ A3XVGG-002US',
    discount: '40% OFF',
  },
  {
    imgUrl: 'src/assets/images/landing/4.png',
    imgAlt: 'category image',
 /*
    iconName: 'icofont-brand-windows',*/
        title: 'Logitech MX Mechanical Wireless Illuminated Performance Keyboard',
    discount: '15% OFF',
  },
  {
    imgUrl: 'src/assets/images/landing/5.png',
    imgAlt: 'category image',
 /*
    iconName: 'icofont-brand-windows',*/
        title: 'Razer Firefly Hard V2 RGB Gaming Mouse Pad',
    discount: '20% OFF',
  },
  {
    imgUrl: 'src/assets/images/landing/12.png',
    imgAlt: 'category image',
 /*
    iconName: 'icofont-brand-windows',*/
        title: 'Logitech G X56 HOTAS Throttle and Joystick ',
    discount: '35% OFF',
  },
];

const HomeCategory = () => {
  const sectionRef = useRef(null);

  return (
    <div className='category-section style-4 padding-tb' ref={sectionRef}>
      <div className='container'>
      <div className="section-header text-center">
  <span 
    className="subtitle" 
    style={{ color: "blue", fontSize: "18px" }}
  >
    {subTitle}
  </span>
  <h2 
    className="title" 
    style={{ color: "red", fontSize: "24px" }}
  >
    {title}
  </h2>
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
                      <div className="cate-icon">
                        <i className={val.iconName}></i>
                      </div>
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

import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import './HomeCategory.css'; // Make sure the CSS is imported here

const subTitle = "Discounted Items";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: 'src/assets/images/category/01.jpg',
    imgAlt: 'category image',
    iconName: 'icofont-brand-windows',
    title: 'DSLR Camera',
    discount: '30% OFF',
  },
  {
    imgUrl: 'src/assets/images/category/02.jpg',
    imgAlt: 'category image',
    iconName: 'icofont-brand-windows',
    title: 'Shoes',
    discount: '25% OFF',
  },
  {
    imgUrl: 'src/assets/images/category/03.jpg',
    imgAlt: 'category image',
    iconName: 'icofont-brand-windows',
    title: 'Photography',
    discount: '40% OFF',
  },
  {
    imgUrl: 'src/assets/images/category/04.jpg',
    imgAlt: 'category image',
    iconName: 'icofont-brand-windows',
    title: 'Formal Dress',
    discount: '15% OFF',
  },
  {
    imgUrl: 'src/assets/images/category/05.jpg',
    imgAlt: 'category image',
    iconName: 'icofont-brand-windows',
    title: 'Colorful Bags',
    discount: '20% OFF',
  },
  {
    imgUrl: 'src/assets/images/category/06.jpg',
    imgAlt: 'category image',
    iconName: 'icofont-brand-windows',
    title: 'Home Decor',
    discount: '35% OFF',
  },
];

const HomeCategory = () => {
  const sectionRef = useRef(null);

  return (
    <div className='category-section style-4 padding-tb' ref={sectionRef}>
      <div className='container'>
        <div className='section-header text-center'>
          <span className='subtitle'>{subTitle}</span>
          <h2 className='title'>{title}</h2>
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

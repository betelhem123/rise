import React, { useState } from 'react';
import './Discounted.css'; // Assuming you have a separate CSS file for this section

const DiscountedItems = () => {
  const discountedItems = [
    { img: 'item1.jpg', name: 'Laptop', originalPrice: 1000, discountPrice: 800 },
    { img: 'item2.jpg', name: 'Smartphone', originalPrice: 600, discountPrice: 450 },
    { img: 'item3.jpg', name: 'Headphones', originalPrice: 200, discountPrice: 150 },
    { img: 'item4.jpg', name: 'Monitor', originalPrice: 300, discountPrice: 250 },
    { img: 'item5.jpg', name: 'Mouse', originalPrice: 50, discountPrice: 35 },
    { img: 'item8.jpg', name: 'External HDD', originalPrice: 150, discountPrice: 120 },
    { img: 'item3.jpg', name: 'Headphones', originalPrice: 200, discountPrice: 150 },
    { img: 'item2.jpg', name: 'Smartphone', originalPrice: 600, discountPrice: 450 },
    { img: 'item1.jpg', name: 'Laptop', originalPrice: 1000, discountPrice: 800 },
    { img: 'item6.jpg', name: 'Keyboard', originalPrice: 70, discountPrice: 50 },
    { img: 'item7.jpg', name: 'Speaker', originalPrice: 120, discountPrice: 100 },
    { img: 'item8.jpg', name: 'External HDD', originalPrice: 150, discountPrice: 120 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < discountedItems.length - 6) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="discounts-section">
      <h2>Discounted Items</h2>
      <div className="slider-container">
        <button className="prev-button" onClick={prevSlide}>←</button>
        <div className="discounts-container">
          {discountedItems.slice(currentIndex, currentIndex + 6).map((item, index) => (
            <div key={index} className="discount-box">
              <img src={item.img} alt={item.name} className="discount-img" />
              <div className="discount-info">
                <h3>{item.name}</h3>
                <p className="original-price">${item.originalPrice}</p>
                <p className="discount-price">${item.discountPrice}</p>
                <p className="discount-percent">{`Save ${(100 - (item.discountPrice / item.originalPrice) * 100).toFixed(0)}%`}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="next-button" onClick={nextSlide}>→</button>
      </div>
    </div>
  );
};

export default DiscountedItems;

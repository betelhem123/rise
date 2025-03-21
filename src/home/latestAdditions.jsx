import React from 'react';
import './LatestAdditions.css'; // Assuming you have a separate CSS file for this section

const latestAdditions = [
  { img: 'laptop.jpg', name: 'Laptop' },
  { img: 'smartphone.jpg', name: 'Smartphone' },
  { img: 'mousepad.jpg', name: 'Mouse Pad' },
  { img: 'headphones.jpg', name: 'Headphones' },
  { img: 'monitor.jpg', name: 'Monitor' },
  { img: 'keyboard.jpg', name: 'Keyboard' },
  { img: 'externalhdd.jpg', name: 'External HDD' },
  { img: 'speaker.jpg', name: 'Speaker' },
  { img: 'charger.jpg', name: 'Charger' },
];

const LatestAdditions = () => {
  return (
    <div className="latest-additions-section">
      <h2>Latest Additions</h2>
      <div className="latest-additions-grid">
        {latestAdditions.map((item, index) => (
          <div key={index} className="latest-addition-box">
            <img src={item.img} alt={item.name} className="latest-addition-img" />
            <div className="latest-addition-info">
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestAdditions;

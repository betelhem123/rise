import React from 'react'
import { FaShieldAlt, FaHeadset, FaStore } from 'react-icons/fa'; // Updated icon for Wide Selection

const why = () => {
  const reasons =  [
    {
      icon: <FaShieldAlt size={50} color="#007bff" />,
      title: 'Reliability',
      description: 'We offer top-quality, genuine products with warranties you can trust.',
    },
    {
      icon: <FaHeadset size={50} color="#007bff" />,
      title: 'Excellent Customer Service',
      description: 'Our friendly support team is always ready to assist you with any inquiries.',
    },
    {
      icon: <FaStore size={50} color="#007bff" />, // Changed icon
      title: 'Wide Selection',
      description: 'From the latest gadgets to essential accessories, we have everything you need at competitive prices.',
    },
  ];
  return (
<div className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-box">
            <div className="icon">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default why
import React from 'react'
import { FaDesktop, FaTools, FaHeadphones, FaWrench, FaBoxOpen, FaCog } from 'react-icons/fa'; // Importing icons

const Services = () => {
  const services = [
    {
      icon: <FaDesktop size={50} color="#fff" />,
      title: 'Computers & Accessories',
      description: 'We sell the latest computers, laptops, and accessories for all your tech needs.',
    },
    {
      icon: <FaTools size={50} color="#fff" />,
      title: 'Custom PC Orders',
      description: 'Need a specific PC? We can order customized computers and accessories just for you.',
    },
    {
      icon: <FaHeadphones size={50} color="#fff" />,
      title: 'Electronics',
      description: 'From headphones to speakers, we offer a wide range of electronics to enhance your tech experience.',
    },
    {
      icon: <FaWrench size={50} color="#fff" />,
      title: 'Repair & Maintenance',
      description: 'We offer repair and maintenance services for computers, phones, and accessories to keep your tech running smoothly.',
    },
    {
      icon: <FaBoxOpen size={50} color="#fff" />,
      title: 'Unbox Your Dream Setup',
      description: 'We help you unbox and set up your computer or electronic setup with ease.',
    },
    {
      icon: <FaCog size={50} color="#fff" />,
      title: 'Tech Support',
      description: 'Our expert team is always available to provide support and guidance on your devices and setups.',
    },
  ];

  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-box">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
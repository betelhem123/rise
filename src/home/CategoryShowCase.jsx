import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const title = "Latest Additions";

const ProductData = [
  {
    id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
    imgUrl: 'src/assets/images/categoryTab/8.png',
    cate: 'Laptops',
    title: 'Acer Nitro 70 N70-130-UR13',
    brand: 'Acer',
    price: '$15,000 ETB',
  },
  {
    id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
    imgUrl: 'src/assets/images/categoryTab/12.png',
    cate: 'Accessories',
    title: 'DualSense Edge® Wireless Controller',
    brand: 'PS',
    price: '$5,000 ETB',
  },
  {
    id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
    imgUrl: 'src/assets/images/categoryTab/03.jpg',
    cate: 'Phones',
    title: 'iPhone 12',
    author: 'src/assets/images/categoryTab/brand/apple.png',
    brand: 'Apple',
    price: '$35,000 ETB',
  },
  {
    id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
    imgUrl: 'src/assets/images/categoryTab/5.png',
    cate: 'Accessories',
    title: 'Razer Firefly Hard V2 RGB Gaming Mouse Pad',
    brand: 'Razer',
    price: '$4,500 ETB',
  },
  {
    id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
    imgUrl: 'src/assets/images/categoryTab/6.png',
    cate: 'Laptops',
    title: 'Late 2019 Apple MacBook Pro ',
    brand: 'Apple',
    price: '$100,000 ETB',
  },
  {
    id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
    imgUrl: 'src/assets/images/categoryTab/10.png',
    cate: 'Airpods',
    title: 'JBL Vibe Beam - True Wireless JBL Deep Bass Sound Earbud',
    brand: 'JBL',
    price: '$1199.00 ETB',
  },
  {
    id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
    imgUrl: 'src/assets/images/categoryTab/9.png',
    cate: 'Accessories',
    title: 'Razer Basilisk V3 Customizable Ergonomic Gaming Mouse ',
    brand: 'RAZER',
    price: '$8000 ETB',
  },
  {
    id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
    imgUrl: 'src/assets/images/categoryTab/7.png',
    cate: 'Laptops',
    title: 'HP 17 Laptop, 17.3" FHD Display, 32GB RAM, 1TB SSD',
    brand: 'HP',
    price: '$99,900 ETB',
  },
];

const CategoryShowCase = () => {
  const [items, setItems] = useState(ProductData);

  const filterItem = (categItem) => {
    const updateItems = ProductData.filter((curElem) => curElem.cate === categItem);
    setItems(updateItems);
  };

  return (
    <div className="course-section style-3 padding-tb">
      {/* Shapes */}
      <div className='course-shape one'><img src="/src/assets/images/shape-img/icon/01.png" alt="" /></div>
      <div className='course-shape two'><img src="/src/assets/images/shape-img/icon/02.png" alt="" /></div>

      {/* Main Section */}
      <div className="container">
        {/* Section Header */}
        <div className="section-header"
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            padding: "15px",
            boxShadow: "4px 4px 10px rgba(255, 87, 51, 0.5)",
            borderRadius: "8px",
            backgroundColor: "#fff8f0"
          }}>
          <h2 className='title' style={{ fontSize: "56px", color: "#f07423" }}>{title}</h2>
          <div className='course-filter-group'>
            <ul className='lab-ul'>
              <li onClick={() => setItems(ProductData)}>ALL</li>
              <li onClick={() => filterItem("Laptops")}>Laptops</li>
              <li onClick={() => filterItem("Accessories")}>Accessories</li>
              <li onClick={() => filterItem("Phones")}>Phones</li>
              <li onClick={() => filterItem("Airpods")}>Airpods</li>
            </ul>
          </div>
        </div>

        {/* Section Body */}
        <div className="section-Wrapper">
          <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter'>
            {items.map((product) => (
              <div key={product.id} className='col'>
                <div className="cours-item"
                  style={{
                    border: "2px solid #7e7840",
                    borderRadius: "10px",
                    padding: "15px",
                    boxShadow: "4px 4px 10px #000",
                    backgroundColor: "#fff"
                  }}>
                  <div className="course-inner">
                    <div className="corse-thumb">
                      <img style={{ height: "150px" }} src={product.imgUrl} alt={product.title} />
                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">{product.cate}</a>
                        </div>
                        <div className="course-reiew"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="course-content">
                      <Link to={`/shop/${product.id}`}><h6>{product.title}</h6></Link>
                      <div className="course-footer">
                        <div className="course-author">
                          <Link to={`/shop/${product.id}`} className="ca-name">{product.brand}</Link>
                        </div>
                        <div className="course-price">{product.price}</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CategoryShowCase;

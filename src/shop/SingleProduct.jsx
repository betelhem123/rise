import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules"; // Import Navigation module
import ProductDisplay from './ProductDisplay';

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const { id } = useParams();
  const swiperRef = useRef(null);  // Create a reference for the swiper instance

  useEffect(() => {
    fetch("/src/products.json")
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  const result = product.filter((p) => p.id === id);

  // Add a check to ensure result has the product data before accessing img
  if (result.length === 0) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  const openModal = (image) => {
    setEnlargedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEnlargedImage(null);
  };

  return (
    <div>
      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                          <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            navigation={{
                              prevEl: ".pro-single-prev",
                              nextEl: ".pro-single-next"
                            }}
                            modules={[Navigation]} // Import and add the Navigation module
                            onSwiper={(swiper) => (swiperRef.current = swiper)}  // Link swiperRef to the instance
                          >
                            {Array.isArray(result[0].img) ? (
                              result[0].img.map((img, i) => (
                                <SwiperSlide key={i}>
                                  <img
                                    src={img}
                                    alt={`Product Image ${i + 1}`}
                                    onClick={() => openModal(img)} // Open modal on click
                                    style={{ cursor: 'pointer' }}
                                  />
                                </SwiperSlide>
                              ))
                            ) : (
                              <SwiperSlide>
                                <img
                                  src={result[0].img}
                                  alt="Product Image"
                                  onClick={() => openModal(result[0].img)} // Open modal on click
                                  style={{ cursor: 'pointer' }}
                                />
                              </SwiperSlide>
                            )}
                          </Swiper>
                          <div className="pro-single-next">
                            <i className="icofont-rounded-left"> </i>
                          </div>
                          <div className="pro-single-prev">
                            <i className="icofont-rounded-right"> </i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        {result.map(item => (
                          <ProductDisplay key={item.id} item={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review">
                  {/* Review Section */}
                </div>
              </article>
            </div>
            <div className='col-lg-4 col-12'>
              {/* Right side content */}
            </div>
          </div>
        </div>
      </div>

      {/* Modal to display the enlarged image */}
      {isModalOpen && (
        <div className="modal" style={modalStyles.overlay}>
          <div className="modal-content" style={modalStyles.content}>
            <span
              className="close"
              onClick={closeModal}
              style={modalStyles.close}
            >
              ×
            </span>
            <img
              src={enlargedImage}
              alt="Enlarged"
              style={modalStyles.image}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Styles for modal
const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  content: {
    position: 'relative',
    backgroundColor: 'white',
    padding: '20px',
    maxWidth: '70%',
    maxHeight: '70%',
    textAlign: 'center',
  },
  close: {
    position: 'absolute',
    bottom: '370px',
    right: '20px',
    fontSize: '100px',
    color: 'red',
    cursor: 'pointer',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '70vh',
  }
};

export default SingleProduct;
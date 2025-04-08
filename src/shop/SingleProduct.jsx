import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import PageHeader from '../components/PageHeader';
import "swiper/css";
import { Navigation } from "swiper/modules";
import ProductDisplay from './ProductDisplay';
import "./single.css"

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const { id } = useParams();
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("/src/products.json")
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  const result = product.filter((p) => p.id === id);

  if (result.length === 0) {
    return <div>Loading...</div>;
  }

  const openModal = (image) => {
    setEnlargedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEnlargedImage(null);
  };

  // Helper: Convert camelCase or mixedCase to Title Case
  const formatKey = (key) =>
    key
      .replace(/([A-Z])/g, ' $1')           // insert space before capital letters
      .replace(/_/g, ' ')                   // replace underscores with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // capitalize first letter

  return (
    <div>
      <PageHeader
        style={{ height: '15px' }}
        title="Our Shop Page"
        curPage="shop"
      />

      <div className="shop-single padding-tb aside-bg" style={{ padding: '5px' }}>
        <div className="container" style={{ height: '20px' }}>
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
                            modules={[Navigation]}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                          >
                            {Array.isArray(result[0].img) ? (
                              result[0].img.map((img, i) => (
                                <SwiperSlide key={i}>
                                  <img
                                    src={img}
                                    alt={`Product Image ${i + 1}`}
                                    onClick={() => openModal(img)}
                                    style={{ cursor: 'pointer' }}
                                  />
                                </SwiperSlide>
                              ))
                            ) : (
                              <SwiperSlide>
                                <img
                                  src={result[0].img}
                                  alt="Product Image"
                                  onClick={() => openModal(result[0].img)}
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
              </article>
            </div>

            <div className='col-lg-4 col-12'>
              <div className="product-description-box">
                {Object.entries(result[0]).map(([key, value]) => {
                  const excludedKeys = ['id', 'name', 'price', 'seller', 'ratingsCount', 'quantity', 'stock', 'ratings', 'img', 'category'];
                  if (excludedKeys.includes(key) || !value) return null;

                  return (
                    <div key={key}>
                      <hr />
                      <h5>{formatKey(key)}:</h5>
                      <p>{value}</p>
                    </div>
                  );
                })}
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>

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

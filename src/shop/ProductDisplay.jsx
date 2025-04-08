import React, { useState } from 'react';

const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, quantity, desc } = item;
  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  return (
    <div>
      <div>
        <h4 style={{
          fontSize:"30px",
          fontFamily:"Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
          color: "orange"
        }}>{name}</h4>
        <h4 style={{
          color:"orange"
        }}>Price: {price}</h4>
        <p style={{
          fontSize:"20px",
          color:"grey"
        }}><strong>Seller:</strong> {seller}</p>
        
      </div>
    </div>
  );
};

export default ProductDisplay;

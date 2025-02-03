import React, { useState } from 'react'
const desc = "lorem ipusm lorem ipsum lorem ipsim"
const ProductDisplay = ( {item}) => {
   // console.log(item)
    const {name, id, price, seller, ratingsCount, quantity} = item;
    const[prequantity, setQuantity]= useState(quantity);
    const[coupon, setCoupon]= useState("");
    const[size, setSize]= useState("Select Size");
    const[color, setColor]= useState("Select Color");
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p>

        </p>
        <h4>
            ${price}
        </h4>
        <p>
            {desc}
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay

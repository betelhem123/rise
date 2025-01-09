import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({Gridlist, products}) => {
  
    return (
    <div className={`shop-product-wrap row justify-content-center ${Gridlist ? "grid" : "list"}`}>
      {
        products.map((product, i)=> 
        (
            <div key={i} className='col-lg-4 col-md-6 col-12'> 
            <div className="product-item">
<div className="product-thumb">
    <div className="pro-thumb">
        <img src={product.img} alt="" />
    </div>
<div className="product-action-link">
<Link to={`/shop/${product.id}`}> <i className='icofont-eye'></i>
</Link>
<h6>${product.price}</h6>
</div>

</div>
<div className="product-content">
    <h5>
        <Link to={`/shop/${product.id}`}> {product.name} </Link>
    </h5>
</div>
            </div>
            <div className="product-list-item">
<div className="product-thumb">
    <div className="pro-thumb">
        <img src={product.img} alt="" />
    </div>
<div className="product-action-link">
<Link to={`/shop/${product.id}`}> <i className='icofont-eye'></i>
</Link>
<h6>${product.price}</h6>
</div>

</div>
<div className="product-content">
    <h5>
        <Link to={`/shop/${product.id}`}> {product.name} </Link>
    </h5>
</div>
            </div>
            </div>
        ))
      }
    </div>
  )
}

export default ProductCard

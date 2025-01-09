import React, { useState } from 'react'; // Combine import of React and useState

import PageHeader from '../components/PageHeader'

const showResults = "showing 01 - 12 of 139 Results"
import Data from "../products.json"
import ProductCard from './ProductCard'
import Pagination from './Pagination'

const Shop = () => {
  const [Gridlist, setGridList] = useState(true);
  const [products, setproducts] = useState(Data);
console.log(products)

//pag
const [CurrentPage, setCurrentpage]=useState(1);
const productsperpage = 12;

const indexOfLastProduct = CurrentPage * productsperpage;
const indexOffirstProduct = indexOfLastProduct -productsperpage;
const currentproducts= products.slice(indexOffirstProduct, indexOfLastProduct);

const paginate = (pageNumber) => {
  setCurrentpage(pageNumber)
}
  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="shop"/>
      <div className='shop-page padding-tb'>
<div className="container">
<div className="row justify-content-center">
<div className="col-lg-8 col-12">
<article>
  <div className="shop-title d-flex flex-wrap justify-content-between">
<p>{showResults}</p>
<div className={`product-veiw-mode ${Gridlist ? "gridActive" : "listActive"}`}>
<a className='grid' onClick={() => setGridList (!Gridlist)}> 
  <i className='icofont-ghost'>

  </i>
</a>
<a className='list' onClick={() => setGridList (!Gridlist)}> 
  <i className='icofont-listine-dots'>

  </i>
</a>
</div>
<div>
  <ProductCard Gridlist={Gridlist} products={products}/>
</div>
<Pagination 
productsperpage={productsperpage}
totalProducts= {products.length}
paginate={paginate}
activepage={CurrentPage}
/>
  </div>
</article>
</div>
<div className="col-lg-4 col-12">
right sides side 
</div>
</div>
</div>
      </div>

    </div>



  )
}

export default Shop
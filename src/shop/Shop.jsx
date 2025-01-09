import React, { useState } from 'react'; // Combine import of React and useState

import PageHeader from '../components/PageHeader'

const showResults = "showing 01 - 12 of 139 Results"
import Data from "../products.json"
import ProductCard from './ProductCard'
import Pagination from './Pagination'
import Search from './Search';
import ShopCategory from './ShopCategory'
const Shop = () => {
  const [Gridlist, setGridList] = useState(true);
  const [products, setproducts] = useState(Data);
console.log(products);

//pag
const [currentPage, setCurrentPage]=useState(1);
const productsPerPage = 12;

const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct -productsPerPage;
const currentProducts= products.slice(indexOfFirstProduct, indexOfLastProduct);

const paginate = (pageNumber) => {
  setCurrentPage(pageNumber)
}

const [selectedCategory, setSelectedCategory] = useState("All");
const menuItems = [...new Set(Data.map((Val) => Val.category))];
  const filterItem = (curcat) =>{
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    })
    setSelectedCategory(curcat);
    setproducts(newItem);
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
  <ProductCard Gridlist={Gridlist} products={currentProducts}/>
</div>
<Pagination 
productsPerPage={productsPerPage}
totalProducts  = {products.length}
paginate={paginate}
activePage={currentPage}
/>
  </div>
</article>
</div>
<div className="col-lg-4 col-12">
<aside>

  <Search products={products} Gridlist={Gridlist}/>
  <ShopCategory
  filterItem={filterItem}
  setItem={setproducts}
  menuItems={menuItems}
  setProducts={setproducts}
  selectedCategory={selectedCategory}
  />
</aside>
</div>
</div>
</div>
      </div>

    </div>



  )
}

export default Shop
import React, { useState } from 'react'
import productData from "../products.json"
import SelectedCategory from '../components/SelectedCategory';
import { Link } from 'react-router-dom';

const title = (
    <h2>Search One From <span>Thousand</span>of Products</h2>
)
const desc = "We Have the largets collection of products"
const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];
    
const Banner = () => {
  const[searchinput, setSearchInput] = useState("");
  const[filteredProducts, setfilteredProducts] = useState(productData);
//console.log(productData)


//search functionality
const handleSearch = (e) => {
  const searchTerm = e.target.value; // Get the input value
  setSearchInput(searchTerm); // Update search input state

  // Filter products based on the search term
  const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setfilteredProducts(filtered); // Update filtered products state
};
  return (
  
    <div className='banner-section style-4'>
      <div className='container'>
        <div className='banner-content'>
{title}
<form >
  <SelectedCategory select ={"all"}/>
<input type="text" name='search' id='search' placeholder='search your products' value={searchinput} onChange={handleSearch} />
<button type='submuit'>
<i classname="icofont-search"></i>
</button>
</form>

<>{desc}</>
<ul className="lab-ul">
{
  searchinput && filteredProducts.map((product, i)=> <li key={i}>
     <Link to={`/shop/${product.id}`}>{product.name}</Link></li>)
}
</ul>
        </div>
      </div>
    </div>
  )
}

export default Banner

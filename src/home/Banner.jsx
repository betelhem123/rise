import React from 'react'
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
  return (
    <div className='banner-section style-4'>
      <div className='container'>
        <div className='banner-content'>
{title}
<form >
<input type="text" name='search' id='search' placeholder='search your products' />
</form>
        </div>
      </div>
    </div>
  )
}

export default Banner

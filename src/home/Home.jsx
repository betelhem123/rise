import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import DiscountedItems from './DiscountedItems'
import LatestAdditions from './latestAdditions'
import Footer from  '../components/Footer'
import Landing from './Landing'
const HOME = () => {
  return (
    <div>
      <Landing/>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
<DiscountedItems/>
<LatestAdditions/>
<Footer/>
    </div>
  )
}

export default HOME

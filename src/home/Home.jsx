import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
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
<LatestAdditions/>
<Footer/>
    </div>
  )
}

export default HOME

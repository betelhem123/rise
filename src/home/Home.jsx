import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Footer from  '../components/Footer'
import Landing from './Landing'
const HOME = () => {
  return (
    <div>
      <Landing/>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
<Footer/>
    </div>
  )
}

export default HOME

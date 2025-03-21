import React from 'react';
import PageHeader from '../components/PageHeader'

import Picture from './picture'
import Descr from './descr';
import Why from './why';
import Services from './Services';
import Footer from '../components/Footer';
const About = () => {
  return (

   
    <div>
       <PageHeader title="About US" curPage="About"/>
<div>
      <Picture /> 
      <Descr />
<Why />
<Services />
<Footer />
    </div>
    </div>
  );
};

export default About;

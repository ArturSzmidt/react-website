import React, { useState } from 'react';
import Sidebar from '../Sidebar/index.js';
import Navbar from '../Navbar/index.js';
import HeroSection from '../HeroSection/index.js';
import InfoSection from '../infoSection/index.js';

import { homeObjOne, homeObjThree, homeObjTwo } from '../infoSection/data.js';
import Services from '../../Services/index.js';
import Footer from '../Footer/index.js';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
      {console.log(homeObjOne)}
    </>
  );
};

export default Home;

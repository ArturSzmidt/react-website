import React from 'react';

import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from './ServicesElements';
import imageOne from '../components/images/img1.svg';
import imageTwo from '../components/images/img5.svg';
import imageThree from '../components/images/img4.svg';
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={imageOne} />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            We help reduce your fees and increase your overall revenue.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={imageTwo} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            You can acces our platform online anywhere in the world.{' '}
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={imageThree} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% cash back
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

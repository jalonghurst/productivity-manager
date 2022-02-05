import React from 'react';
import Banner from '../components/Banner/Banner';
import Pomodorotimer from './Pomodorotimer';
import Taskoverview from './Taskoverview'

const Homepage = () => {
  return (
  <>
  <Banner/>
  <Pomodorotimer/>
  <Taskoverview/>
  </>
  )
};

export default Homepage;

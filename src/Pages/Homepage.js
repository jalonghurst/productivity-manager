import React from 'react';

import Banner from '../components/Banner/Banner';
import DashboardOverview from './DashboardOverview';
import Pomodoro from './Pomodoro/Pomodoro';
import Taskoverview from './Taskoverview'

const Homepage = () => {
  return (
  <>
  <Banner/>
  <DashboardOverview/>
  <Pomodoro/> 
  <Taskoverview/>
  </>
  )
};

export default Homepage;

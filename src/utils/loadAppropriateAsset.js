import { screenWidth } from './deviceSize';

export const backgroundHealthy =
  screenWidth < 700
    ? require('../../assets/Images/HealthyScreen.png')
    : require('../../assets/Images/HealthySTab.png');

export const backgroundNotWell =
  screenWidth < 700
    ? require('../../assets/Images/NotWellScreen.png')
    : require('../../assets/Images/NotWellSTab.png');

export const backgroundSick =
  screenWidth < 700
    ? require('../../assets/Images/SickScreen.png')
    : require('../../assets/Images/SickSTab.png');

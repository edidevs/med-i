import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import BottomView from './BottomView';

import { TopView, MiddleView, InterrogationText } from './styledComponents';
import { ImageContainer, GreetingText } from '../../common/styledComponents';

import { Mascot } from '../../../assets/Icons';

const background = require('../../../assets/Images/HomeScreen.png');

const HomeScreen = ({ ...navigation }) => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <TopView>
        <Mascot height={105} width={105} />
        <React.Fragment>
          <GreetingText>Hey there!</GreetingText>
        </React.Fragment>
      </TopView>
      <MiddleView>
        <InterrogationText>How Do You Feel Today ?</InterrogationText>
      </MiddleView>
      <BottomView navigation={navigation} />
    </SafeAreaView>
  </ImageContainer>
);
export default HomeScreen;

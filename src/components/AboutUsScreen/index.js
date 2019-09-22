import React from 'react';
import { StatusBar } from 'react-native';

import { ParagraphText, TextView } from './styledComponents';
import { WrapperView } from '../MoreScreen/styledComponents';
import { ImageContainer } from '../../common/styledComponents';

import { backgroundHome as background } from '../../utils';

const AboutUsScreen = () => (
  <ImageContainer source={background}>
    <WrapperView>
      <StatusBar barStyle="light-content" />
      <TextView>
        <ParagraphText>
          Med-i is the go-to-app for anything about your health from health
          awareness to disease prevention to treatment. It is designed to give
          people better access to health services, products and reduce
          unnecessary utilization of government resources by raising health
          awareness to people.
        </ParagraphText>
        <ParagraphText>
          Med-i features health pathways, over-the-counter choices (OTC), and
          information about globally recognized health services and activities.
          In Med-i, your health is your choice!
        </ParagraphText>
      </TextView>
    </WrapperView>
  </ImageContainer>
);

export default AboutUsScreen;

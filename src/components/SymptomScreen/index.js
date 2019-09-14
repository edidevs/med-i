/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import SymptomsView from './SymptomsView';
import DrugView from './DrugView';

import {
  UpperView,
  MiddleView,
  LowerView,
  DescriptionText,
} from './styledComponents';
import { ImageContainer, BoldText } from '../../common/styledComponents';

import { backgroundSick as background } from '../../utils';

import { Mascot } from '../../../assets/Icons';

const SymptomScreen = ({
  symptomOne,
  symptomTwo,
  symptomThree,
  symptomFour,
  symptomFive,
  symptomSix,
  drugOne,
  drugTwo,
  drugThree,
  drugFour,
  drugFive,
}) => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <UpperView>
        <DescriptionText>
          Mild pain that is less than six months
        </DescriptionText>
        <SymptomsView
          symptoms={[
            symptomOne,
            symptomTwo,
            symptomThree,
            symptomFour,
            symptomFive,
            symptomSix,
          ]}
        />
      </UpperView>
      <MiddleView>
        <Mascot width={55} height={55} />
        <BoldText>OTC tips</BoldText>
      </MiddleView>
      <LowerView
        data={[drugOne, drugTwo, drugThree, drugFour, drugFive]}
        renderItem={({ item }) => <DrugView itemName={item} />}
        keyExtractor={(item, index) => `key${index}`}
      />
    </SafeAreaView>
  </ImageContainer>
);

export default SymptomScreen;

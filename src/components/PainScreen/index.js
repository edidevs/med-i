/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';

import { UpperView, LowerView, DescriptionText } from './styledComponents';
import { ImageContainer } from '../../common/styledComponents';
import {
  ItemView,
  ItemTextView,
  ItemText,
} from '../StatusScreen/styledComponents';

import Mind from '../../../assets/Icons/Mind.svg';

const background = require('../../../assets/Images/BodyScreen.png');

const PainScreen = () => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <UpperView>
        <DescriptionText>
          Mild pain that is less than six months
        </DescriptionText>
      </UpperView>
      <LowerView>
        <TouchableOpacity>
          <ItemView>
            <Mind />
            <ItemTextView>
              <ItemText>Paracetamol</ItemText>
            </ItemTextView>
          </ItemView>
        </TouchableOpacity>
        <TouchableOpacity>
          <ItemView>
            <Mind />
            <ItemTextView>
              <ItemText>Ibuprofen</ItemText>
            </ItemTextView>
          </ItemView>
        </TouchableOpacity>
      </LowerView>
    </SafeAreaView>
  </ImageContainer>
);

export default PainScreen;

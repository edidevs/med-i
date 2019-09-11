/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { connect } from 'react-redux';

import CartItemView from './CartItemView';
import {
  UpperView,
  LowerView,
  BoldText,
  DescriptionText,
} from '../SymptomScreen/styledComponents';
import { ImageContainer } from '../../common/styledComponents';

import Mascot from '../../../assets/Icons/Mascot.svg';

const background = require('../../../assets/Images/MoreScreen.png');

const StoreScreen = ({ cartItems }) => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <UpperView>
        <Mascot width={75} height={75} />
        <DescriptionText>
          You can buy these medications from your local pharmacy
        </DescriptionText>
      </UpperView>
      <LowerView
        data={cartItems}
        keyExtractor={(item, index) => `key${index}-${item}`}
        renderItem={({ item }) => <CartItemView item={item} />}
      />
    </SafeAreaView>
  </ImageContainer>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProps)(StoreScreen);

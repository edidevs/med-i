/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { connect } from 'react-redux';

import CartItemView from './CartItemView';

import { UpperViewBis, DescriptionTextBis } from './styledComponents';
import { LowerView } from '../SymptomScreen/styledComponents';
import { ImageContainer } from '../../common/styledComponents';

import { Mascot } from '../../../assets/Icons';

import { backgroundTabs as background } from '../../utils';

const StoreScreen = ({ cartItems }) => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <UpperViewBis>
        <Mascot width={75} height={75} />
        <DescriptionTextBis>
          Get any of these medications at your local pharmacy
        </DescriptionTextBis>
      </UpperViewBis>
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

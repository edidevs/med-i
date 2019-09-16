/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  IconView,
  FaceHeight,
  FaceWidth,
  BottomViewContainer,
} from '../styledComponents';
import {
  ShadowView,
  HealthyColors,
  SickColors,
  NotWellColors,
} from '../../../common/styledComponents';

import { HappyFace, PokerFace, SadFace } from '../../../../assets/Icons';

import { handleRouteCurry } from '../../../utils';

const BottomView = ({ navigation }) => {
  const goTo = route => handleRouteCurry(navigation)(route);
  return (
    <BottomViewContainer>
      <ShadowView>
        <TouchableOpacity onPress={() => goTo('Healthy')}>
          <IconView colors={HealthyColors}>
            <HappyFace width={FaceWidth} height={FaceHeight} />
          </IconView>
        </TouchableOpacity>
      </ShadowView>
      <ShadowView>
        <TouchableOpacity onPress={() => goTo('NotWell')}>
          <IconView colors={NotWellColors}>
            <PokerFace width={FaceWidth} height={FaceHeight} />
          </IconView>
        </TouchableOpacity>
      </ShadowView>
      <ShadowView>
        <TouchableOpacity onPress={() => goTo('Sick')}>
          <IconView colors={SickColors}>
            <SadFace width={FaceWidth} height={FaceHeight} />
          </IconView>
        </TouchableOpacity>
      </ShadowView>
    </BottomViewContainer>
  );
};

export default BottomView;

/* eslint-disable react/prop-types */
import React from 'react';

import { StatusFaceView } from './styledComponents';
import {
  ShadowView,
  IconView,
  FaceHeight,
  FaceWidth,
} from '../../../common/styledComponents';

import HappyFace from '../../../../assets/Icons/Happy.svg';
import PokerFace from '../../../../assets/Icons/Poker.svg';
import SadFace from '../../../../assets/Icons/Sad.svg';

const StatusFace = ({ colors, sick, notWell }) => {
  let statusFace;
  if (sick) {
    statusFace = <SadFace width={FaceWidth} height={FaceHeight} />;
  } else if (notWell) {
    statusFace = <PokerFace width={FaceWidth} height={FaceHeight} />;
  } else {
    statusFace = <HappyFace width={FaceWidth} height={FaceHeight} />;
  }
  return (
    <StatusFaceView>
      <ShadowView>
        <IconView colors={colors}>{statusFace}</IconView>
      </ShadowView>
    </StatusFaceView>
  );
};

export default StatusFace;

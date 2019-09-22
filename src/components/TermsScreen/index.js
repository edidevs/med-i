import React from 'react';
import { StatusBar } from 'react-native';

import { ParagraphText, TextView } from '../AboutUsScreen/styledComponents';
import { WrapperView } from '../MoreScreen/styledComponents';
import { ImageContainer } from '../../common/styledComponents';

import { backgroundHome as background } from '../../utils';

const TermsScreen = () => (
  <ImageContainer source={background}>
    <WrapperView>
      <StatusBar barStyle="light-content" />
      <TextView>
        <ParagraphText>
          This app (Med-i) is not intended at all to serve as a substitute to
          the medical advice that a person can seek from a health professional.
        </ParagraphText>
        <ParagraphText>
          The main purpose of this app is to serve as a guide for adults aged 18
          years and over to treat banal syndromes using non-prescription
          medications only. Also known as over the counter (OTC) medications.
        </ParagraphText>
        <ParagraphText>
          Please read the the instructions very carefully before any use of the
          recommended drugs. A broad set of instructions if usually available at
          the sides of the boxes or the containers. However, a more precise and
          complete set of instructions are available as leaflets inside the
          packets.
        </ParagraphText>
        <ParagraphText>
          If you have any doubts about the use of any of these drugs, please do
          not hesitate to speak with your pharmacist or general practitioner.
        </ParagraphText>
      </TextView>
    </WrapperView>
  </ImageContainer>
);

export default TermsScreen;

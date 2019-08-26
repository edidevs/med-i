import styled from 'styled-components/native';

import { screenWidth } from '../../utils/deviceSize';

export const UpperView = styled.View`
  height: 218px;
  width: ${screenWidth}px;
  background-color: #fef0f0;
  margin-top: 65px;
`;

export const LowerView = styled.ScrollView.attrs({
  alignItems: 'center',
})``;

export const BoldText = styled.Text`
  color: #393c50;
  font-size: 21px;
  font-weight: 600;
`;

export const DescriptionText = styled(BoldText)`
  margin-top: 36px;
  text-align: center;
`;

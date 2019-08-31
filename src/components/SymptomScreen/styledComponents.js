import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { screenWidth } from '../../utils/deviceSize';

const MARGIN_TOP = Platform.OS === 'ios' ? 65 : 95;

export const UpperView = styled.View`
  width: ${screenWidth}px;
  background-color: #fef0f0;
  margin-top: ${MARGIN_TOP}px;
  align-items: center;
  padding-bottom: 24px;
`;

export const MiddleView = styled.View`
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const LowerView = styled.FlatList.attrs({
  alignItems: 'center',
})``;

export const BoldText = styled.Text`
  color: #393c50;
  font-size: 20px;
  font-weight: 600;
`;

export const DescriptionText = styled(BoldText)`
  margin-top: 32px;
  margin-bottom: 24px;
`;

export const ItemGridText = styled.Text`
  color: #393c50;
  font-size: 18px;
  margin-left: 8px;
  padding: 8px;
`;

export const ItemView = styled.View`
  flex-direction: row;
  margin-left: 30px;
  align-items: center;
`;

export const BulletPointView = styled.View`
  height: 12px;
  width: 12px;
  border-radius: 50;
  background-color: #e77565;
`;

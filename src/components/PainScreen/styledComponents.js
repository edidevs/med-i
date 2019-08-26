import styled from 'styled-components/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { screenWidth } from '../../utils/deviceSize';

// TODO: add android case for margin top
export const UpperView = styled.View`
  height: 218px;
  width: ${screenWidth}px;
  background-color: #fef0f0;
  margin-top: 65px;
  align-items: center;
`;

export const MiddleView = styled.View`
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
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
  margin-bottom: 30px;
`;

export const ItemGridText = styled.Text`
  color: #393c50;
  font-size: 20px;
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

export const PillIcon = styled(MaterialCommunityIcons).attrs({
  name: 'pill',
})`
  font-size: 30px;
  color: #3782de;
`;

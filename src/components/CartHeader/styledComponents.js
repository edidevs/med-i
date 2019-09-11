import styled from 'styled-components/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { CircleView } from '../../common/styledComponents';

export const CartHeaderView = styled.TouchableOpacity`
  flex-direction: row;
  padding-right: 24px;
`;

export const CartIcon = styled(MaterialCommunityIcons).attrs({
  name: 'medical-bag',
})`
  color: #fff;
  font-size: 34px;
`;

export const BadgeView = styled(CircleView).attrs({
  diameter: 20,
  color: '#ff195b',
})`
  position: absolute;
  top: -7;
  right: 9;
`;

export const BadgeText = styled.Text`
  font-weight: 600;
  color: #fff;
`;

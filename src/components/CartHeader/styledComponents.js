import styled from 'styled-components/native';

import { CircleView } from '../../common/styledComponents';

export const CartHeaderView = styled.TouchableOpacity`
  flex-direction: row;
  padding-right: 24px;
`;

export const BadgeView = styled(CircleView).attrs({
  diameter: 20,
  color: '#ff195b',
})`
  position: absolute;
  top: -9;
  right: 4;
`;

export const BadgeText = styled.Text`
  font-weight: 600;
  color: #fff;
`;

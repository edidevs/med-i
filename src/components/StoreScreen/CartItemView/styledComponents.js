import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

import { BoldText } from '../../../common/styledComponents';

export const RemoveIcon = styled(FontAwesome).attrs({
  name: 'remove',
})`
  font-size: 20px;
  color: #f39f93;
`;

export const BoldTextBis = styled(BoldText)`
  font-size: 14px;
`;

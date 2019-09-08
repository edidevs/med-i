import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { ItemView } from '../../StatusScreen/styledComponents';

export const ItemViewBis = styled(ItemView)`
  margin-top: 8px;
  margin-bottom: 8px;
  justify-content: space-between;
`;

export const AddIcon = styled(FontAwesome).attrs({
  name: 'plus',
})`
  font-size: 20px;
  color: #f39f93;
`;

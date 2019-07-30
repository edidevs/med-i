import styled from 'styled-components/native';

import { InputField } from '../../common/styledComponents';

export const DOBInput = styled(InputField).attrs({
  placeholder: 'MM-DD-YYYY',
  keyboardType: 'default',
  returnKeyType: 'next',
})``;

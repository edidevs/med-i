import styled from 'styled-components/native';

import { InputField } from '../../common/styledComponents';

export const EmailInput = styled(InputField).attrs({
  placeholder: 'Your email',
  keyboardType: 'email-address',
  returnKeyType: 'next',
})``;

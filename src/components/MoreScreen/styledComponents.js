import styled from 'styled-components/native';

import { ConfirmButton } from '../../common/styledComponents';
import { screenHeight, screenWidth } from '../../utils';

export const WrapperView = styled.View`
  height: ${screenHeight * 0.6}px;
  width: ${screenWidth * 0.85}px;
  justify-content: space-between;
  margin-top: 90px;
`;

export const LogOutButton = styled(ConfirmButton)`
  height: 56px;
  width: 131px;
  border-radius: 28px;
  align-self: flex-start;
`;

export const RegularText = styled.Text`
  color: #393c50;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 1.16px;
  margin-bottom: 24px;
  margin-top: 24px;
  margin-left: 8px;
`;

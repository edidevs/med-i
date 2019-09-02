import styled from 'styled-components/native';

import { ConfirmButton } from '../../common/styledComponents';

export const WrapperView = styled.View`
  padding-top: 144px;
  padding-bottom: 56px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  flex: 1;
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
  padding-bottom: 24px;
  padding-top: 24px;
`;

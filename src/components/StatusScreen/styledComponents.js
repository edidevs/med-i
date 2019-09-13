import styled from 'styled-components/native';

export const ParagraphView = styled.View`
  margin-top: 32px;
  margin-bottom: 24px;
  align-items: center;
  height: 130px;
  justify-content: space-between;
`;

export const MessageOneText = styled.Text`
  color: #393c50;
  font-size: 22px;
`;

export const MessageTwoText = styled.Text`
  color: ${props => (props.notWell ? '#ed8f61' : '#45cd65')};
  font-weight: 400;
  font-size: 22px;
  font-weight: bold;
  padding-top: 16px;
`;

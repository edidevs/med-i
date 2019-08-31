import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export const MindView = styled.View`
  align-items: center;
  margin-bottom: 24px;
  /* top: 6%; */
`;

export const ParagraphView = styled.View`
  margin-top: 48px;
  justify-content: space-between;
  align-items: center;
`;

export const MessageText = styled.Text`
  color: #393c50;
  font-size: 22px;
  margin-top: 68px;
  margin-bottom: 96px;
`;

export const BoldText = styled(MessageText)`
  font-weight: bold;
`;

export const CallButton = styled.TouchableOpacity`
  flex-direction: row;
  height: 58px;
  width: 238px;
  border-radius: 28px;
  background-color: #23c553;
  align-items: center;
`;

export const CallButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #fff;
`;

export const CallButtonIconView = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 100;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  margin-right: 35px;
`;

export const CallButtonIcon = styled(FontAwesome).attrs({
  name: 'phone',
})`
  font-size: 20px;
  color: #23c553;
`;

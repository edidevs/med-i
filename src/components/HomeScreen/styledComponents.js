import styled from 'styled-components/native';

import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { CenterView } from '../../common/styledComponents';
import { screenWidth } from '../../utils/deviceSize';

const BigText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 36px;
`;

export const TopView = styled.View`
  flex: 2;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const BottomView = styled.View`
  flex: 3;
  background-color: #fff;
  width: ${screenWidth};
  padding: 36px;
`;

export const TopLeftView = styled.View`
  justify-content: space-between;
  align-self: flex-end;
  height: 258px;
  padding-left: 10px;
`;

export const AvatarView = styled(CenterView)`
  border-radius: 60px;
  height: 110px;
  width: 110px;
  border-width: 5px;
  border-color: #c2f7f8;
  background-color: rgba(52, 52, 52, 0.5);
`;

export const CameraIcon = styled(FontAwesome).attrs({
  name: 'camera',
})`
  font-size: 30px;
  color: #393c50;
`;

export const GreetingText = styled(BigText)`
  color: #fff;
  padding-left: 10px;
`;

export const TopRightView = styled(CenterView)`
  background-color: #68ccd9;
  height: 55px;
  width: 55px;
  border-radius: 55px;
`;

export const LogOutIcon = styled(AntDesign).attrs({
  name: 'logout',
})`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;

export const HealthBarView = styled.View`
  background-color: #fb69;
  height: 15px;
  border-radius: 25px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const StatusViewWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StatusView = styled(CenterView)``;

export const IconView = styled(LinearGradient)`
  height: 103px;
  width: 103px;
  border-radius: 53px;
  border-width: 3px;
  border-color: #ffffff;
  margin-top: 29.5px;
  margin-bottom: 24px;
  align-items: center;
  justify-content: center;
  elevation: 5;
`;

// Only relevant for iOS
export const ShadowView = styled.View`
  shadow-color: #dbdee4;
  shadow-offset: 5px;
  shadow-opacity: 0.8;
  shadow-radius: 10px;
`;

export const HealthyColors = ['#55C26F', '#5ADF79'];
export const HealthySickColors = ['#ED956A', '#F06D2E'];
export const SickColors = ['#E36E5B', '#F0857A'];
export const FaceHeight = 52;
export const FaceWidth = 52;

export const RegularText = styled.Text`
  font-size: 16;
  color: #393c50;
`;

export const InterrogationText = styled(BigText)`
  color: #393c50;
  padding: 10px;
`;

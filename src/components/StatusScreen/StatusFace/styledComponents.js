import styled from 'styled-components/native';
import { Platform } from 'react-native';

const MARGIN_TOP = Platform.OS === 'ios' ? 24 : 54;

export const StatusFaceView = styled.View`
  align-items: center;
  margin-top: ${MARGIN_TOP}px;
`;

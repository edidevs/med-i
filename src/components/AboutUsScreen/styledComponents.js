import styled from 'styled-components/native';

export const TextView = styled.ScrollView.attrs({
  flex: 1,
  marginTop: 120,
  paddingLeft: 16,
  paddingRight: 16,
})``;

export const ParagraphText = styled.Text`
  font-size: 18px;
  padding: 5px;
  color: #4a4a4a;
  text-align: justify;
  line-height: 30;
`;

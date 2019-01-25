import styled from 'styled-components/native';
import Card from '../../components/Card';
import { StyleSheet } from 'react-native';
import { theme } from '../../constants';

export const InfoCard = styled(Card)`
  margin-bottom: 16px;
`;

export const CardBody = styled(Card.Body)`
  padding: 0;
`;

export const CardText = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.fonts.fontSizeMedium}px;
`;

export const ItemSeparator = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.lightGrey};
`;

export const styles = StyleSheet.create({
  container: {
    padding: theme.layout.padding.md,
  },
});

import { StyleSheet } from 'react-native';
import { theme } from '../../constants';
import styled from 'config/styled-components';

export const Container = styled.View`
  padding: ${props => props.theme.layout.padding.sm}px;
  flex-direction: row;
`;

export const styles = StyleSheet.create({
  imageContainer: {
    marginRight: theme.layout.padding.sm,
    padding: theme.layout.padding.xs,
    flex: 0,
    width: 67,
    height: 67,
  },
  image: {
    width: 32,
    height: 32,
  },
});

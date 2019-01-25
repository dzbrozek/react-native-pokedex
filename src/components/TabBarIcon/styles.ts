import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export const Icon = styled(FontAwesome)`
  margin-bottom: -3px;
  opacity: ${props => props.focused ? 1 : 0.6};
`;

import styled from 'config/styled-components';
import { FontAwesome } from '@expo/vector-icons';

export const Icon = styled(FontAwesome)`
  margin-bottom: -3px;
  opacity: ${props => props.focused ? 1 : 0.6};
`;

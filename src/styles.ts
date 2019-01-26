import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const Centered = styled.View`
  flex: 1;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
`;

export const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  flex-shrink: 0;
`;

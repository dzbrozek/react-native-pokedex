import styled from 'styled-components/native';

export const CardBodyContainer = styled.View`
  border-width: 1px;
  border-color: ${props => props.theme.colors.lightGrey};
  border-top-color: transparent;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 8px;
`;

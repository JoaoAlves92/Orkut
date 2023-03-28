import styled from 'styled-components';
import media from 'styles/media-query';

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  line-height: 16px;
  font-size: 16px;
  color: ${(props) => props.color || props.theme.colors.primary};

  ${media.lessThan('tablet')`
    font-size: 14px;
  `};
`;

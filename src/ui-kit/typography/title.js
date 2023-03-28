import styled from "styled-components";
import media from "styles/media-query";

export const Title = styled.h2`
  line-height: 16px;
  font-size: 22px;

  ${media.lessThan("tablet")`
    font-size: 16px;
  `}
`;

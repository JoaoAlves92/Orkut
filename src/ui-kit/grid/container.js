import styled from "styled-components";
import media from "styles/media-query";
import { Box } from "ui-kit/common";

export const ContainerFluid = styled(Box)`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export const Container = styled(ContainerFluid)`
  ${media.greaterThan("mobile")`
    padding-right: 0;
    padding-left: 0;
    max-width: 355px;
  `};

  ${media.greaterThan("tablet")`
    max-width: 720px;
  `};

  ${media.greaterThan("laptop")`
    max-width: 974px;
  `};

  ${media.greaterThan("desktop")`
    max-width: 1120px;
  `};

  ${media.greaterThan("desktopLarge")`
    max-width: 1246px;
  `};
`;

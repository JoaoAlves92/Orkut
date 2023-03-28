import { generateMedia } from "styled-media-query";
import theme from "styles/theme";

const { mobile, tablet, laptop, desktop, desktopLarge } = theme.breakpoints;

const media = generateMedia({
  mobile: `${mobile}px`,
  tablet: `${tablet}px`,
  laptop: `${laptop}px`,
  desktop: `${desktop}px`,
  desktopLarge: `${desktopLarge}px`,
});

export default media;

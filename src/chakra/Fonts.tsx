import { Global } from "@emotion/react";

function Fonts() {
  return (
    <Global
      styles={`
        @font-face {
        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url('../assets/Font/CircularStd-Black.woff2') format('woff2');
      }
        @font-face {
        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('../assets/Font/CircularStd-Bold.woff2') format('woff2');
      }
        @font-face {
        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('../assets/Font/CircularStd-Book.woff2') format('woff2');
      }
        @font-face {
        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('../assets/Font/CircularStd-Medium.woff2') format('woff2');
      }


      `}
    />
  );
}

export default Fonts;

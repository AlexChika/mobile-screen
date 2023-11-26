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
        src: url('../assets/Font/CircularStd-Black.ttf') format('ttf');
      }
        @font-face {
        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('../assets/Font/CircularStd-Bold.ttf') format('ttf');
      }
        @font-face {
        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('../assets/Font/CircularStd-Book.ttf') format('ttf');
      }
        @font-face {
        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('../assets/Font/CircularStd-Medium.ttf') format('ttf');
      }


      `}
    />
  );
}

export default Fonts;

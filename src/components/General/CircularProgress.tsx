import { Box } from "@chakra-ui/react";

type CircularProgress = {
  value: number;
  size: number;
  color?: string;
  trackColor?: string;
  thickness?: number;
  children?: React.ReactNode;
  linearGradient?: boolean;
  gradientbg1?: string;
  gradientbg2?: string;
};

function CircularProgress(props: CircularProgress) {
  const {
    children,
    size,
    thickness = 10,
    trackColor = "brand.gray",
    color = "brand.secondaryBlue",
    linearGradient = false,
  } = props;
  let { value = 25 } = props;

  if (value > 100) {
    value = 100;
  }
  if (value < 0) {
    value = 0;
  }

  const radius = size / 2 - thickness * 1.5;
  const strokeDash = 2 * radius * Math.PI;
  const usePercent = (100 - value) / 100;
  const bigSize = size - thickness * 2;
  const smallSize = bigSize - thickness * 2;

  return (
    <Box
      style={{ minWidth: bigSize, maxWidth: bigSize, height: bigSize }}
      borderRadius="50%"
      pos="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg={trackColor}
      color={color}
      sx={{
        ".animateCircle": {
          animation: "circularProgress 2s linear forwards",
        },
        "@keyframes circularProgress": {
          from: {
            strokeDashoffset: 0,
          },
        },
      }}
    >
      <Box
        style={{ minWidth: smallSize, maxWidth: smallSize, height: smallSize }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="50%"
        bg="white"
      >
        {children}
      </Box>

      <svg
        style={{
          position: "absolute",
          transform: "rotate(270deg)",
        }}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
      >
        <circle
          className="animateCircle"
          stroke={linearGradient ? "url(#GradientColor)" : "currentColor"}
          fill="none"
          strokeWidth={thickness}
          strokeDasharray={strokeDash}
          strokeDashoffset={strokeDash * usePercent}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeLinecap="round"
        />
      </svg>
    </Box>
  );
}

export default CircularProgress;

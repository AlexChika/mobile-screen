import { Box } from "@chakra-ui/react";

function ThreedotsIcon({ color = "#707480" }: IconProps) {
  return (
    <Box color={color}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="16"
        viewBox="0 0 30 16"
        fill="none"
      >
        <circle cx="10.5" cy="8.5" r="1.5" fill="currentColor" />
        <circle cx="15.5" cy="8.5" r="1.5" fill="currentColor" />
        <circle cx="20.5" cy="8.5" r="1.5" fill="currentColor" />
      </svg>
    </Box>
  );
}

export default ThreedotsIcon;

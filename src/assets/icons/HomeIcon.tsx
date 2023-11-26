import { Box } from "@chakra-ui/react";

function HomeIcon({ color = "#C1C4CD" }: IconProps) {
  return (
    <Box color={color}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
      >
        <path
          d="M11.7647 3.16471L17.6471 8.45882V17.6471H15.2941V10.5882H8.23529V17.6471H5.88235V8.45882L11.7647 3.16471ZM11.7647 0L0 10.5882H3.52941V20H10.5882V12.9412H12.9412V20H20V10.5882H23.5294L11.7647 0Z"
          fill="currentColor"
        />
      </svg>
    </Box>
  );
}

export default HomeIcon;
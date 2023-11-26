import { Box, Center } from "@chakra-ui/react";

function ChatsIcon({ color = "#C1C4CD" }: IconProps) {
  return (
    <Box color={color}>
      <Center
        w="25px"
        h="25px"
        borderColor={color}
        borderWidth="3px"
        borderStyle="solid"
        rounded="100%"
      >
        <svg
          width="8"
          height="10"
          viewBox="0 0 8 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.6"
            d="M6.89838 2.63529H4.52668V8.67826H2.81559V2.63529H0.454712V1H6.89838V2.63529Z"
            stroke="currentColor"
            strokeWidth="0.803901"
          />
        </svg>
      </Center>
    </Box>
  );
}

export default ChatsIcon;

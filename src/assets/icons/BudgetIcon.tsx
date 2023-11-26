import { Box } from "@chakra-ui/react";

function BudgetIcon({ color = "#C1C4CD" }: IconProps) {
  return (
    <Box color={color}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 6H4.28571V20H0V6ZM8 0H12V20H8V0ZM16 11.4286H20V20H16V11.4286Z"
          fill="currentColor"
        />
      </svg>
    </Box>
  );
}

export default BudgetIcon;

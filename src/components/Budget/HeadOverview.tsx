import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import NairaIcon from "../../assets/icons/NairaIcon";
import { Naira, getTotalBudget } from "../../assets/data";

function HeadOverview({ budget }: { budget: Budget }) {
  return (
    <Stack py={5}>
      {/* header & subheader */}
      <Box>
        <Text color="brand.primaryBlack" fontWeight="700" fontSize="24px">
          Budget
        </Text>

        <Flex gap={2} mt={5}>
          <NairaIcon />
          <Text
            casing="capitalize"
            fontSize="13px"
            fontWeight="400"
            color="brand.tertiaryBlack"
          >
            {budget.month} - Monthly Budget
          </Text>
        </Flex>
      </Box>

      {/* budget amounts Box */}
      <Flex
        px={5}
        mt={1}
        align="center"
        boxShadow="0px 5px 10px 2px rgba(0, 0, 0, 0.03)"
        h="51px"
        borderRadius="10px"
        bg="white"
      >
        <Text color="brand.primaryBlack" fontWeight="700" fontSize="24px">
          {Naira.format(getTotalBudget(budget))}
        </Text>
      </Flex>
    </Stack>
  );
}

export default HeadOverview;

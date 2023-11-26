import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import CircularProgress from "../General/CircularProgress";
import { getSpendingPercentage } from "../../assets/data";

function BudgetBreakdown({ budget }: { budget: Budget }) {
  return (
    <Box mt={5}>
      <Text color="brand.primaryBlack" fontWeight="700" fontSize="21px">
        Category Breakdown
      </Text>

      <Stack mt={5} gap={5}>
        {budget.expenses.map((expense, i) => {
          const { Icon, budgeted, name, spent, primaryColor, secondaryColor } =
            expense;
          return (
            <Flex key={i} justify="space-between">
              <Flex gap={3}>
                {/* avatar / imgae */}
                <CircularProgress
                  thickness={3}
                  trackColor="transparent"
                  color={primaryColor}
                  value={+getSpendingPercentage(expense)}
                  size={50}
                >
                  <Center rounded={50} h="inherit" w="full" bg={secondaryColor}>
                    <Icon />
                  </Center>
                </CircularProgress>

                {/* title and percentage */}
                <Stack>
                  <Text
                    isTruncated
                    maxW="160px"
                    fontWeight="700"
                    fontSize="14px"
                  >
                    {name}
                  </Text>
                  <Text color="brand.tertiaryBlack" mt={-2} fontSize="14px">
                    {getSpendingPercentage(expense)}%
                  </Text>
                </Stack>
              </Flex>

              {/* amount spent / amount budgeted  */}
              <Flex>
                <Text>#{spent}/</Text>
                <Text color="brand.gray">#{budgeted}</Text>
              </Flex>
            </Flex>
          );
        })}
      </Stack>
    </Box>
  );
}

export default BudgetBreakdown;

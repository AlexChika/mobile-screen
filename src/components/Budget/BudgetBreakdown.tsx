import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import CircularProgress from "../General/CircularProgress";
import FoodIcon from "../../assets/icons/FoodIcon";
import PiggySavingsIcon from "../../assets/icons/PiggySavingsIcon";

function BudgetBreakdown() {
  return (
    <Box mt={5}>
      <Text color="brand.primaryBlack" fontWeight="700" fontSize="21px">
        Category Breakdown
      </Text>

      <Stack mt={5}>
        {[11, 2, 34, 5, 67, 89, 8].map((x) => {
          return (
            <Flex justify="space-between">
              <Flex gap={3}>
                {/* avatar / imgae */}
                <CircularProgress
                  thickness={3}
                  trackColor="transparent"
                  color="brand.primaryGreen"
                  value={40}
                  size={50}
                >
                  <Center
                    rounded={50}
                    h="inherit"
                    w="full"
                    bg="brand.secondaryGreen"
                  >
                    <PiggySavingsIcon />
                  </Center>
                </CircularProgress>

                {/* title and percentage */}
                <Stack>
                  <Text fontWeight="700" fontSize="14px">
                    Food and Drink
                  </Text>
                  <Text color="brand.tertiaryBlack" mt={-2} fontSize="14px">
                    40%
                  </Text>
                </Stack>
              </Flex>

              {/* amount spent / amount budgeted  */}
              <Flex>
                <Text>₦20,000/</Text>
                <Text color="brand.gray">₦42,000</Text>
              </Flex>
            </Flex>
          );
        })}
      </Stack>
    </Box>
  );
}

export default BudgetBreakdown;

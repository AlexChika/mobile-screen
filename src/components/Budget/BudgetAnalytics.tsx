import {
  Box,
  Button,
  Center,
  // CircularProgress,
  Flex,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import ThreedotsIcon from "../../assets/icons/ThreedotsIcon";
import CircularProgress from "../General/CircularProgress";
import {
  Naira,
  getTotalBudget,
  getTotalSpendPercentage,
  getTotalSpent,
} from "../../assets/data";

// border={"2px solid yellow"}

function BudgetAnalytics({ budget }: { budget: Expense[] }) {
  return (
    <Box>
      {/* Month Selection Pane */}
      <Flex justify="space-between">
        <Flex gap={6}>
          <Button
            fontSize="14px"
            fontWeight="700"
            color="brand.tertiaryBlack"
            variant="link"
          >
            Last Month
          </Button>

          <Button
            fontSize="14px"
            fontWeight="700"
            color="brand.primaryBlue"
            variant="link"
          >
            This Month
          </Button>
        </Flex>

        <IconButton
          fontWeight="700"
          aria-label="show all month dropdown"
          variant="link"
          icon={<ThreedotsIcon />}
        />
      </Flex>

      {/* spending progressBar */}
      <Center mx="auto" mt={10} mb={5}>
        <CircularProgress
          color="brand.tertiaryBlue"
          size={150}
          value={100}
          thickness={10}
        >
          <CircularProgress
            trackColor="transparent"
            color="brand.primaryBlue"
            size={122}
            value={+getTotalSpendPercentage(budget)}
            thickness={6}
          >
            <Text fontSize="30px" fontWeight="900" color="brand.primaryBlue">
              {getTotalSpendPercentage(budget)}%
            </Text>
          </CircularProgress>
        </CircularProgress>
      </Center>

      {/* spending details */}
      <Stack align="center">
        <Text color="brand.tertiaryBlack" fontSize="13px">
          Amount spent so far
        </Text>

        <Flex>
          <Text fontSize="15px" fontWeight="600" color="brand.primaryBlue">
            {Naira.format(getTotalSpent(budget))}
          </Text>
          <Text fontSize="15px" fontWeight="600" color="brand.secondaryBlue">
            / {Naira.format(getTotalBudget(budget))}
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
}

export default BudgetAnalytics;

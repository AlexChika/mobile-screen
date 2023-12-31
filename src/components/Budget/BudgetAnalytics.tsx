import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
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
  monthNames,
} from "../../assets/data";
import budgets from "../../assets/data";

type Props = {
  budget: Budget;
  setBudget: React.Dispatch<React.SetStateAction<Budget>>;
};
function BudgetAnalytics({ budget, setBudget }: Props) {
  return (
    <Box>
      {/* Month Selection Pane */}
      <Flex justify="space-between">
        <Flex gap={6}>
          <Button
            fontWeight="700"
            variant="link"
            _before={{
              content: `" "`,
              w: "30px",
              left: 0,
              pos: "absolute",
              bottom: "-10px",
              h: "2px",
              bg:
                budget.month === monthNames[new Date().getMonth() - 1]
                  ? "brand.primaryBlue"
                  : "transparent",
            }}
            color={
              budget.month === monthNames[new Date().getMonth() - 1]
                ? "brand.primaryBlue"
                : "brand.tertiaryBlack"
            }
            onClick={() => setBudget(budgets[new Date().getMonth() - 1])}
          >
            Last Month
          </Button>

          <Button
            fontWeight="700"
            pos="relative"
            _before={{
              content: `" "`,
              w: "30px",
              left: 0,
              pos: "absolute",
              bottom: "-10px",
              h: "2px",
              bg:
                budget.month === monthNames[new Date().getMonth()]
                  ? "brand.primaryBlue"
                  : "transparent",
            }}
            color={
              budget.month === monthNames[new Date().getMonth()]
                ? "brand.primaryBlue"
                : "brand.tertiaryBlack"
            }
            variant="link"
            onClick={() => setBudget(budgets[new Date().getMonth()])}
          >
            This Month
          </Button>
        </Flex>

        <Menu>
          <MenuButton as={Link}>
            <IconButton
              fontWeight="700"
              aria-label="show all month dropdown"
              variant="link"
              icon={<ThreedotsIcon />}
            />
          </MenuButton>
          <MenuList>
            {budgets.map((b, i) => {
              return (
                <MenuItem
                  bg={budget.month === b.month ? "brand.secondaryBlue" : ""}
                  key={i}
                  onClick={() => setBudget(b)}
                >
                  <Text
                    color={budget.month === b.month ? "white" : ""}
                    casing="capitalize"
                  >
                    {b.month}
                  </Text>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
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
        <Text color="brand.tertiaryBlack" fontSize="14px">
          Amount spent so far
        </Text>

        <Flex>
          <Text fontWeight="600" color="brand.primaryBlue">
            {Naira.format(getTotalSpent(budget))}
          </Text>
          <Text fontWeight="600" color="brand.secondaryBlue">
            / {Naira.format(getTotalBudget(budget))}
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
}

export default BudgetAnalytics;

import { Stack } from "@chakra-ui/react";
import HeadOverview from "../components/Budget/HeadOverview";
import BudgetAnalytics from "../components/Budget/BudgetAnalytics";
import BudgetBreakdown from "../components/Budget/BudgetBreakdown";

function Budget() {
  return (
    <Stack>
      <HeadOverview />

      <BudgetAnalytics />

      <BudgetBreakdown />
    </Stack>
  );
}

export default Budget;

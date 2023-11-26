import { useState } from "react";
import { Stack } from "@chakra-ui/react";
import HeadOverview from "../components/Budget/HeadOverview";
import BudgetAnalytics from "../components/Budget/BudgetAnalytics";
import BudgetBreakdown from "../components/Budget/BudgetBreakdown";
import budgets from "../assets/data";

function Budget() {
  const [budget, setBudget] = useState(budgets[new Date().getMonth()]);

  return (
    <Stack>
      <HeadOverview budget={budget} />

      <BudgetAnalytics budget={budget} setBudget={setBudget} />

      <BudgetBreakdown budget={budget} />
    </Stack>
  );
}

export default Budget;

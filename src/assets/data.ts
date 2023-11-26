import FoodIcon from "./icons/FoodIcon";
import PiggySavingsIcon from "./icons/PiggySavingsIcon";

const budgets: Budget[] = [
  {
    month: "january",
    expenses: [
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "food and drink",
        spent: 9000,
        budgeted: 18000,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Event planning",
        spent: 6000,
        budgeted: 6300,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Birthday party",
        spent: 2000,
        budgeted: 2000,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Rent",
        spent: 4500,
        budgeted: 5000,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Miscellanous",
        spent: 1200,
        budgeted: 12000,
      },
    ],
  },
  {
    month: "february",
    expenses: [
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Mountain exploration",
        spent: 6500,
        budgeted: 6500,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Home renovation",
        spent: 15000,
        budgeted: 20000,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Birthday surprise",
        spent: 3500,
        budgeted: 3500,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Groceries",
        spent: 3200,
        budgeted: 5000,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Miscellanous",
        spent: 6000,
        budgeted: 6000,
      },
    ],
  },
  {
    month: "march",
    expenses: [
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Adventure travel",
        spent: 4800,
        budgeted: 5500,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Household upgrades",
        spent: 12000,
        budgeted: 18000,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Special occasion celebration",
        spent: 2800,
        budgeted: 3200,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Monthly provisions",
        spent: 3800,
        budgeted: 6000,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Various expenses",
        spent: 5500,
        budgeted: 5500,
      },
    ],
  },
  {
    month: "april",
    expenses: [
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Wildlife photography tour",
        spent: 7200,
        budgeted: 8000,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Living room makeover",
        spent: 14000,
        budgeted: 20000,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Anniversary surprise",
        spent: 4200,
        budgeted: 4500,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Grocery essentials",
        spent: 4000,
        budgeted: 5500,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Unexpected expenses",
        spent: 5000,
        budgeted: 5000,
      },
    ],
  },
  {
    month: "may",
    expenses: [
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Camping adventure",
        spent: 6000,
        budgeted: 7000,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Kitchen remodel",
        spent: 16000,
        budgeted: 22000,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Graduation celebration",
        spent: 3000,
        budgeted: 3500,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Monthly groceries",
        spent: 4500,
        budgeted: 6000,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Miscellaneous expenses",
        spent: 4800,
        budgeted: 5000,
      },
    ],
  },
  {
    month: "june",
    expenses: [
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Beach vacation",
        spent: 8000,
        budgeted: 9000,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Home office upgrade",
        spent: 18000,
        budgeted: 25000,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Summer party",
        spent: 3500,
        budgeted: 4000,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Grocery essentials",
        spent: 5000,
        budgeted: 6500,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Unexpected expenses",
        spent: 5200,
        budgeted: 5500,
      },
    ],
  },
  {
    month: "july",
    expenses: [
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "National park adventure",
        spent: 7500,
        budgeted: 8000,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Outdoor patio renovation",
        spent: 20000,
        budgeted: 25000,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Independence Day celebration",
        spent: 4000,
        budgeted: 4500,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Monthly groceries",
        spent: 4800,
        budgeted: 6000,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Miscellaneous summer expenses",
        spent: 5500,
        budgeted: 5500,
      },
    ],
  },
  {
    month: "august",
    expenses: [
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Backpacking adventure",
        spent: 7000,
        budgeted: 7500,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Living room redecoration",
        spent: 16000,
        budgeted: 20000,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "End-of-summer bash",
        spent: 3800,
        budgeted: 4000,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Monthly grocery haul",
        spent: 4600,
        budgeted: 6000,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Various expenses",
        spent: 5300,
        budgeted: 5500,
      },
    ],
  },
  {
    month: "september",
    expenses: [
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Mountain retreat",
        spent: 6800,
        budgeted: 7500,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Home office makeover",
        spent: 19000,
        budgeted: 22000,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Autumn celebration",
        spent: 4200,
        budgeted: 4500,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Monthly grocery essentials",
        spent: 5000,
        budgeted: 6500,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Unexpected expenses",
        spent: 5200,
        budgeted: 5500,
      },
    ],
  },
  {
    month: "october",
    expenses: [
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Haunted house tour",
        spent: 7200,
        budgeted: 8000,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Fall-themed home decor",
        spent: 17000,
        budgeted: 20000,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Halloween party",
        spent: 3500,
        budgeted: 4000,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Monthly grocery haul",
        spent: 4800,
        budgeted: 6000,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Various autumn expenses",
        spent: 5300,
        budgeted: 5500,
      },
    ],
  },
  {
    month: "november",
    expenses: [
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Fall foliage tour",
        spent: 23000,
        budgeted: 34000,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Thanksgiving home preparations",
        spent: 7000,
        budgeted: 33000,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Friendsgiving celebration",
        spent: 6000,
        budgeted: 23000,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Monthly grocery essentials",
        spent: 9500,
        budgeted: 15500,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Various autumn expenses",
        spent: 13200,
        budgeted: 14500,
      },
    ],
  },
  {
    month: "december",
    expenses: [
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Winter Wonderland getaway",
        spent: 8000,
        budgeted: 9000,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "Holiday home decorations",
        spent: 20000,
        budgeted: 25000,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Christmas celebration",
        spent: 4200,
        budgeted: 4500,
      },
      {
        primaryColor: "brand.primaryYellow",
        secondaryColor: "brand.secondaryYellow",
        Icon: FoodIcon,
        name: "Year-end grocery shopping",
        spent: 5000,
        budgeted: 6500,
      },
      {
        primaryColor: "brand.primaryGreen",
        secondaryColor: "brand.secondaryGreen",
        Icon: PiggySavingsIcon,
        name: "New Year's Eve party",
        spent: 5500,
        budgeted: 5500,
      },
    ],
  },
];

var monthNames = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

function getTotalBudget(budget: Budget) {
  let totalBudget = 0;
  budget.expenses.forEach((m) => {
    totalBudget += m.budgeted;
  });

  return totalBudget;
}
function getTotalSpent(budget: Budget) {
  let totalSpent = 0;
  budget.expenses.forEach((m) => {
    totalSpent += m.spent;
  });

  return totalSpent;
}
function getTotalSpendPercentage(budget: Budget) {
  return ((getTotalSpent(budget) / getTotalBudget(budget)) * 100).toFixed(0);
}
function getSpendingPercentage(expense: Expense) {
  return ((expense.spent / expense.budgeted) * 100).toFixed(0);
}
const Naira = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
});

export default budgets;
export {
  monthNames,
  getTotalBudget,
  getSpendingPercentage,
  getTotalSpendPercentage,
  getTotalSpent,
  Naira,
};

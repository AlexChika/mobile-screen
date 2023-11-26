import FoodIcon from "./icons/FoodIcon";
import PiggySavingsIcon from "./icons/PiggySavingsIcon";

type Budget = {
  [key: string]: {
    name: string;
    spent: number;
    budgeted: number;
    icon: (props: IconProps) => React.JSX.Element;
  }[];
};

const budget: Budget = {
  january: [
    {
      icon: FoodIcon,
      name: "food and drink",
      spent: 9000,
      budgeted: 18000,
    },
    {
      icon: PiggySavingsIcon,
      name: "Event planning",
      spent: 6000,
      budgeted: 6300,
    },
    {
      icon: FoodIcon,
      name: "Birthday party",
      spent: 2000,
      budgeted: 2000,
    },
    {
      icon: PiggySavingsIcon,
      name: "Rent",
      spent: 4500,
      budgeted: 5000,
    },
    {
      icon: FoodIcon,
      name: "Miscellanous",
      spent: 1200,
      budgeted: 12000,
    },
  ],
  february: [
    {
      icon: PiggySavingsIcon,
      name: "Mountain exploration",
      spent: 6500,
      budgeted: 6500,
    },
    {
      icon: FoodIcon,
      name: "Home renovation",
      spent: 15000,
      budgeted: 20000,
    },
    {
      icon: FoodIcon,
      name: "Birthday surprise",
      spent: 3500,
      budgeted: 3500,
    },
    {
      icon: PiggySavingsIcon,
      name: "Groceries",
      spent: 3200,
      budgeted: 5000,
    },
    {
      icon: PiggySavingsIcon,
      name: "Miscellanous",
      spent: 6000,
      budgeted: 6000,
    },
  ],
  march: [
    {
      icon: PiggySavingsIcon,
      name: "Adventure travel",
      spent: 4800,
      budgeted: 5500,
    },
    {
      icon: FoodIcon,
      name: "Household upgrades",
      spent: 12000,
      budgeted: 18000,
    },
    {
      icon: FoodIcon,
      name: "Special occasion celebration",
      spent: 2800,
      budgeted: 3200,
    },
    {
      icon: PiggySavingsIcon,
      name: "Monthly provisions",
      spent: 3800,
      budgeted: 6000,
    },
    {
      icon: PiggySavingsIcon,
      name: "Various expenses",
      spent: 5500,
      budgeted: 5500,
    },
  ],
  april: [
    {
      icon: PiggySavingsIcon,
      name: "Wildlife photography tour",
      spent: 7200,
      budgeted: 8000,
    },
    {
      icon: FoodIcon,
      name: "Living room makeover",
      spent: 14000,
      budgeted: 20000,
    },
    {
      icon: PiggySavingsIcon,
      name: "Anniversary surprise",
      spent: 4200,
      budgeted: 4500,
    },
    {
      icon: PiggySavingsIcon,
      name: "Grocery essentials",
      spent: 4000,
      budgeted: 5500,
    },
    {
      icon: FoodIcon,
      name: "Unexpected expenses",
      spent: 5000,
      budgeted: 5000,
    },
  ],
  may: [
    {
      icon: FoodIcon,
      name: "Camping adventure",
      spent: 6000,
      budgeted: 7000,
    },
    {
      icon: PiggySavingsIcon,
      name: "Kitchen remodel",
      spent: 16000,
      budgeted: 22000,
    },
    {
      icon: FoodIcon,
      name: "Graduation celebration",
      spent: 3000,
      budgeted: 3500,
    },
    {
      icon: PiggySavingsIcon,
      name: "Monthly groceries",
      spent: 4500,
      budgeted: 6000,
    },
    {
      icon: PiggySavingsIcon,
      name: "Miscellaneous expenses",
      spent: 4800,
      budgeted: 5000,
    },
  ],
  june: [
    {
      icon: FoodIcon,
      name: "Beach vacation",
      spent: 8000,
      budgeted: 9000,
    },
    {
      icon: PiggySavingsIcon,
      name: "Home office upgrade",
      spent: 18000,
      budgeted: 25000,
    },
    {
      icon: FoodIcon,
      name: "Summer party",
      spent: 3500,
      budgeted: 4000,
    },
    {
      icon: PiggySavingsIcon,
      name: "Grocery essentials",
      spent: 5000,
      budgeted: 6500,
    },
    {
      icon: FoodIcon,
      name: "Unexpected expenses",
      spent: 5200,
      budgeted: 5500,
    },
  ],
  july: [
    {
      icon: PiggySavingsIcon,
      name: "National park adventure",
      spent: 7500,
      budgeted: 8000,
    },
    {
      icon: FoodIcon,
      name: "Outdoor patio renovation",
      spent: 20000,
      budgeted: 25000,
    },
    {
      icon: PiggySavingsIcon,
      name: "Independence Day celebration",
      spent: 4000,
      budgeted: 4500,
    },
    {
      icon: FoodIcon,
      name: "Monthly groceries",
      spent: 4800,
      budgeted: 6000,
    },
    {
      icon: PiggySavingsIcon,
      name: "Miscellaneous summer expenses",
      spent: 5500,
      budgeted: 5500,
    },
  ],
  august: [
    {
      icon: PiggySavingsIcon,
      name: "Backpacking adventure",
      spent: 7000,
      budgeted: 7500,
    },
    {
      icon: FoodIcon,
      name: "Living room redecoration",
      spent: 16000,
      budgeted: 20000,
    },
    {
      icon: PiggySavingsIcon,
      name: "End-of-summer bash",
      spent: 3800,
      budgeted: 4000,
    },
    {
      icon: PiggySavingsIcon,
      name: "Monthly grocery haul",
      spent: 4600,
      budgeted: 6000,
    },
    {
      icon: FoodIcon,
      name: "Various expenses",
      spent: 5300,
      budgeted: 5500,
    },
  ],
  september: [
    {
      icon: FoodIcon,
      name: "Mountain retreat",
      spent: 6800,
      budgeted: 7500,
    },
    {
      icon: PiggySavingsIcon,
      name: "Home office makeover",
      spent: 19000,
      budgeted: 22000,
    },
    {
      icon: FoodIcon,
      name: "Autumn celebration",
      spent: 4200,
      budgeted: 4500,
    },
    {
      icon: PiggySavingsIcon,
      name: "Monthly grocery essentials",
      spent: 5000,
      budgeted: 6500,
    },
    {
      icon: FoodIcon,
      name: "Unexpected expenses",
      spent: 5200,
      budgeted: 5500,
    },
  ],
  october: [
    {
      icon: FoodIcon,
      name: "Haunted house tour",
      spent: 7200,
      budgeted: 8000,
    },
    {
      icon: PiggySavingsIcon,
      name: "Fall-themed home decor",
      spent: 17000,
      budgeted: 20000,
    },
    {
      icon: FoodIcon,
      name: "Halloween party",
      spent: 3500,
      budgeted: 4000,
    },
    {
      icon: PiggySavingsIcon,
      name: "Monthly grocery haul",
      spent: 4800,
      budgeted: 6000,
    },
    {
      icon: PiggySavingsIcon,
      name: "Various autumn expenses",
      spent: 5300,
      budgeted: 5500,
    },
  ],
  november: [
    {
      icon: PiggySavingsIcon,
      name: "Fall foliage tour",
      spent: 6500,
      budgeted: 7000,
    },
    {
      icon: FoodIcon,
      name: "Thanksgiving home preparations",
      spent: 18000,
      budgeted: 22000,
    },
    {
      icon: PiggySavingsIcon,
      name: "Friendsgiving celebration",
      spent: 4000,
      budgeted: 4500,
    },
    {
      icon: PiggySavingsIcon,
      name: "Monthly grocery essentials",
      spent: 4500,
      budgeted: 6000,
    },
    {
      icon: FoodIcon,
      name: "Various autumn expenses",
      spent: 5200,
      budgeted: 5500,
    },
  ],
  december: [
    {
      icon: PiggySavingsIcon,
      name: "Winter Wonderland getaway",
      spent: 8000,
      budgeted: 9000,
    },
    {
      icon: PiggySavingsIcon,
      name: "Holiday home decorations",
      spent: 20000,
      budgeted: 25000,
    },
    {
      icon: FoodIcon,
      name: "Christmas celebration",
      spent: 4200,
      budgeted: 4500,
    },
    {
      icon: FoodIcon,
      name: "Year-end grocery shopping",
      spent: 5000,
      budgeted: 6500,
    },
    {
      icon: PiggySavingsIcon,
      name: "New Year's Eve party",
      spent: 5500,
      budgeted: 5500,
    },
  ],
};

export default budget;

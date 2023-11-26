/// <reference types="vite/client" />

type IconProps = {
  color?: string;
};

type Budget = {
  month:
    | "january"
    | "february"
    | "march"
    | "april"
    | "may"
    | "june"
    | "july"
    | "august"
    | "september"
    | "october"
    | "november"
    | "december";
  expenses: Expense[];
};

type Expense = {
  name: string;
  spent: number;
  budgeted: number;
  primaryColor: string;
  secondaryColor: string;
  Icon: (props: IconProps) => React.JSX.Element;
};

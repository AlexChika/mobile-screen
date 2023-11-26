/// <reference types="vite/client" />

type IconProps = {
  color?: string;
};

type Expense = {
  name: string;
  spent: number;
  budgeted: number;
  primaryColor: string;
  secondaryColor: string;
  Icon: (props: IconProps) => React.JSX.Element;
};

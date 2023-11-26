import { Flex, Link, Stack, Text } from "@chakra-ui/react";
import HomeIcon from "../../assets/icons/HomeIcon";
import ReportsIcon from "../../assets/icons/ReportsIcon";
import ChatsIcon from "../../assets/icons/ChatsIcon";
import BudgetIcon from "../../assets/icons/BudgetIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";

type NavLink = {
  url: string;
  Icon: (props: IconProps) => React.JSX.Element;
  name: string;
};

const navLinks: NavLink[] = [
  {
    url: "#",
    Icon: HomeIcon,
    name: "Home",
  },
  {
    url: "#",
    Icon: ReportsIcon,
    name: "Reports",
  },
  {
    url: "#",
    Icon: ChatsIcon,
    name: "Chat",
  },
  {
    url: "/",
    Icon: BudgetIcon,
    name: "Budget",
  },
  {
    url: "#",
    Icon: ProfileIcon,
    name: "Profile",
  },
];

function BottomNav() {
  return (
    <Flex
      //   display={{ base: "block", sm: "none" }}
      px={2}
      align="center"
      border={"2px solid red"}
      justify="space-around"
      direction="row"
      bg="white"
      h="80px"
      pos="fixed"
      w={{ base: 390 }}
      bottom="0"
    >
      {navLinks.map((link, id) => {
        const { Icon, name, url } = link;

        return (
          <Link href={url} _hover={{ textDecorationLine: "unset" }}>
            <Stack key={id} align="center">
              <Icon color="brand.primary" />
              <Text fontWeight="bold" fontSize="10px">
                {name}
              </Text>
            </Stack>
          </Link>
        );
      })}
    </Flex>
  );
}

export default BottomNav;

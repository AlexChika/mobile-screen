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
    url: "/",
    Icon: HomeIcon,
    name: "Home",
  },
  {
    url: "/reports",
    Icon: ReportsIcon,
    name: "Reports",
  },
  {
    url: "/chat",
    Icon: ChatsIcon,
    name: "Chat",
  },
  {
    url: "/budget",
    Icon: BudgetIcon,
    name: "Budget",
  },
  {
    url: "/profile",
    Icon: ProfileIcon,
    name: "Profile",
  },
];

function BottomNav() {
  const path = () => {
    const url = new URL(window.location.href);
    return url.pathname;
  };

  return (
    <Flex
      //   display={{ base: "block", sm: "none" }}
      //   border={"2px solid yellow"}
      px={5}
      align="center"
      justify="space-between"
      direction="row"
      bg="white"
      h="80px"
      pos="fixed"
      w="full"
      maxW={{ base: 390 }}
      bottom="0"
    >
      {navLinks.map((link, id) => {
        const { Icon, name, url } = link;

        return (
          <Link key={id} href={url} _hover={{ textDecorationLine: "unset" }}>
            <Stack align="center">
              <Icon color={url === path() ? "brand.primaryBlue" : undefined} />
              <Text
                color={url === path() ? "brand.primaryBlack" : "brand.gray"}
                fontWeight="bold"
                fontSize="10px"
              >
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

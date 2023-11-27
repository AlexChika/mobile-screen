import { Flex, Link, Stack, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
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
    url: "/home",
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
    url: "/",
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
  let location = useLocation();

  const path = () => {
    return location.pathname;
  };

  return (
    <Flex
      px={5}
      align="center"
      justify="space-between"
      direction="row"
      bg="white"
      h="80px"
      pos="fixed"
      w="full"
      blur="25px"
      boxShadow="0px -5px 20px 5px rgba(0, 0, 0, 0.04)"
      maxW={{ base: 500, md: 390 }}
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

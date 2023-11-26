import { Flex, Link, Stack, Text } from "@chakra-ui/react";
import HomeIcon from "../../assets/icons/HomeIcon";

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
];

function BottomNav() {
  return (
    <Flex
      //   display={{ base: "block", sm: "none" }}
      align="center"
      border={"2px solid red"}
      justify="space-around"
      direction="row"
      bg="white"
      h="80px"
      pos="fixed"
      w={{ base: 479 }}
      bottom="0"
    >
      {navLinks.map((link, id) => {
        const { Icon, name, url } = link;

        return (
          <Link href={url} _hover={{ textDecorationLine: "unset" }}>
            <Stack key={id} align="center">
              <Icon />
              <Text>{name}</Text>
            </Stack>
          </Link>
        );
      })}
    </Flex>
  );
}

export default BottomNav;

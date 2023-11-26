import { Stack } from "@chakra-ui/react";
import BottomNav from "./BottomNav";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Stack
      pb="95px"
      minH="100vh"
      mx="auto"
      maxW={{ base: 479 }}
      border={"2px solid red"}
    >
      {children}

      <BottomNav />
    </Stack>
  );
}

export default Layout;

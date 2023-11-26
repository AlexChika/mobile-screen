import { Box, Stack } from "@chakra-ui/react";
import BottomNav from "./BottomNav";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box bg="blackAlpha.100">
      <Stack bg="white" pb="95px" minH="100vh" mx="auto" maxW={{ base: 390 }}>
        <Box px={5}>{children}</Box>
        <BottomNav />
      </Stack>
    </Box>
  );
}

export default Layout;

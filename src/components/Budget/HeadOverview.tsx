import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import NairaIcon from "../../assets/icons/NairaIcon";

function HeadOverview() {
  return (
    <Stack py={5}>
      {/* header & subheader */}
      <Box>
        <Text color="brand.primaryBlack" fontWeight="700" fontSize="24px">
          Budget
        </Text>

        <Flex gap={2} mt={5}>
          <NairaIcon />
          <Text fontSize="13px" fontWeight="400" color="brand.tertiaryBlack">
            Monthly Budget
          </Text>
        </Flex>
      </Box>

      {/* budget amounts Box */}
      <Flex
        px={5}
        mt={1}
        align="center"
        boxShadow="0px 5px 10px 2px rgba(0, 0, 0, 0.03)"
        h="51px"
        borderRadius="10px"
        bg="white"
      >
        <Text color="brand.primaryBlack" fontWeight="700" fontSize="24px">
          ₦120,000
        </Text>
      </Flex>
    </Stack>
  );
}

export default HeadOverview;

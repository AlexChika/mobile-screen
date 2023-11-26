import {
  Box,
  Button,
  Center,
  // CircularProgress,
  Flex,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import ThreedotsIcon from "../../assets/icons/ThreedotsIcon";
import CircularProgess from "../General/CircularProgress";

// border={"2px solid yellow"}

function BudgetAnalytics() {
  return (
    <Box>
      {/* Month Selection Pane */}
      <Flex justify="space-between">
        <Button
          fontSize="14px"
          fontWeight="700"
          color="brand.tertiaryBlack"
          variant="link"
        >
          Last Month
        </Button>

        <Button
          fontSize="14px"
          fontWeight="700"
          color="brand.primaryBlue"
          variant="link"
        >
          This Month
        </Button>

        <IconButton
          fontWeight="700"
          aria-label="show all month dropdown"
          variant="link"
          icon={<ThreedotsIcon />}
        />
      </Flex>

      {/* spending progressBar */}
      <Center mx="auto" mt={10} mb={5}>
        <CircularProgess
          color="brand.tertiaryBlue"
          size={160}
          value={100}
          thickness={10}
        >
          <CircularProgess
            trackColor="transparent"
            color="brand.primaryBlue"
            size={132}
            value={49}
            thickness={6}
          >
            <Text fontSize="30px" fontWeight="900" color="brand.primaryBlue">
              49%
            </Text>
          </CircularProgess>
        </CircularProgess>
      </Center>

      {/* spending details */}
      <Stack align="center">
        <Text color="brand.tertiaryBlack" fontSize="13px">
          Amount spent so far
        </Text>

        <Flex>
          <Text fontSize="15px" fontWeight="600" color="brand.primaryBlue">
            ₦50,000
          </Text>
          <Text fontSize="15px" fontWeight="600" color="brand.secondaryBlue">
            /₦120,000
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
}

export default BudgetAnalytics;

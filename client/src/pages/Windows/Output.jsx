import { Box, Text, Spinner } from "@chakra-ui/react";

const Output = ({ output, isLoading, error }) => {
  return (
    <Box h="100%" w="100%">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Box
        height="100%"
        width="100%"
        p={2}
        bgColor="white"
        border="1px solid"
        borderRadius={4}
        borderColor="#333"
      >
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Text color="red.500">{error.message}</Text>
        ) : (
          <Text>{output ?? "No output yet"}</Text>
        )}
      </Box>
    </Box>
  );
};

export default Output;

import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      position="fixed"
      bottom={0}
      width="100%"
      height={28}
      borderTopWidth={1}
      borderColor="gray.100"
      bg="gray.800"
    >
      <Box textAlign="center" px={4} py={2}>
        <Text color="whiteAlpha.900">Pantayas © 2024</Text>
      </Box>
    </Box>
  );
};

export default Footer;

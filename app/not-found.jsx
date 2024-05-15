"use client";

import { useRouter } from "next/navigation";
import {
  Container,
  Heading,
  Text,
  Link,
  Box,
  AbsoluteCenter,
} from "@chakra-ui/react";
export default function NotFound() {
  const router = useRouter();
  return (
    <Box position="relative" h="100vh">
      <AbsoluteCenter>
        <Container
          as="main"
          maxW="md"
          p={10}
          borderWidth={1}
          borderColor="gray.200"
          borderRadius="lg"
        >
          <Heading as="h1" className="text-center" size="lg">
            404!
          </Heading>
          <Text className="text-center" size="md" mb="6">
            Página no encontrada
          </Text>
          <Link
            href="/"
            size="md"
            bg={"blue.500"}
            color={"white"}
            _hover={{
              bg: "blue.600",
            }}
            p="2"
            borderWidth={1}
            borderColor="gray.200"
            borderRadius="lg"
          >
            Ir al inicio
          </Link>
        </Container>
      </AbsoluteCenter>
    </Box>
  );
}

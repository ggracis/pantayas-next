// components/UI/LoginForm.jsx
"use client";
import { useState } from "react";
import useAuthStore from "@/stores/useAuthStore";
import { FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import Encabezado from "./Encabezado";

const LoginForm = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login, error } = useAuthStore(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(identifier, password);
  };

  return (
    <>
      <Encabezado
        tituloEncabezado="Login"
        bajadaEncabezado="Login de usuarios"
      />
      <FormControl
        w="40vw"
        p={4}
        bg="blackAlpha.300"
        m="auto"
        mt={8}
        mb={8}
        borderRadius="lg"
      >
        {error && <Text color="red.500">{error}</Text>}
        <form onSubmit={handleSubmit}>
          <FormLabel htmlFor="identifier">Username or Email</FormLabel>
          <Input
            type="text"
            id="identifier"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            mb={4}
          />
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            mb={4}
          />
          <Button type="submit" disabled={loading} colorScheme="blue" width="full">
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </FormControl>
    </>
  );
};

export default LoginForm;

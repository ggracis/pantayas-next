"use client";
import { useState } from "react";
import useAuthStore from "@/stores/useAuthStore"; // Importar useAuthStore
import Encabezado from "./Encabezado";
import { FormControl } from "@chakra-ui/react";

const LoginForm = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { loading, login } = useAuthStore(); // Obtener funciones de autenticación desde useAuthStore

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(identifier, password); // Llamar a la función de inicio de sesión
    } catch (error) {
      setError("Failed to login");
    }
  };

  return (
    <>
      <Encabezado
        tituloEncabezado="Login"
        bajadaEncabezado="Login de usuarios"
      />
      <FormControl
        w="80vw"
        p={4}
        bg="blackAlpha.300"
        m="auto"
        mt={8}
        mb={8}
        borderRadius="lg"
      >
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username or Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </FormControl>
    </>
  );
};

export default LoginForm;

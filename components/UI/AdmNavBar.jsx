//components\UI\AdmNavBar.jsx
"use client";
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  useColorMode,
  Heading,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import styles from "./AdmNavBar.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import useAuthStore from "@/stores/useAuthStore";
//import { useRouter } from "next/router";

const logoURL = "/screenet.svg";
const nombreLocal = "Pantayas";

export default function AdmNavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //const router = useRouter();
  const { logout } = useAuthStore();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    logout();
  };

  const DesktopNav = () => (
    <nav>
      <Link className={styles.enlaces} href="/">
        Inicio
      </Link>
      <Link className={styles.enlaces} href="/usuario">
        Usuarios
      </Link>
      <Link className={styles.enlaces} href="/productos">
        Productos
      </Link>
      <Link className={styles.enlaces} href="/preferencias">
        Preferencias
      </Link>
      <Link className={styles.enlaces} href="/c1" target="_blank">
        📺 1
      </Link>
      <Link className={styles.enlaces} href="/c2" target="_blank">
        📺 2
      </Link>
      <Link className={styles.enlaces} href="/issues">
        Sugerencias 💡
      </Link>
      <Link className={styles.enlaces} href="/admin">
        Admin 👨‍💻
      </Link>
    </nav>
  );

  const MobileNav = () => (
    <nav>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          mr={2}
          size="l"
          p={5}
        />
        <MenuList>
          <MenuItem>
            <Link href="/">Inicio</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/usuario">Usuarios</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/productos">Productos</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/preferencias">Preferencias</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/c1" target="_blank">
              📺 1
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/c2" target="_blank">
              📺 2
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/issues">Sugerencias 💡</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </nav>
  );

  return (
    <Box
      px={4}
      position="sticky"
      top={0}
      width="100%"
      zIndex={1}
      pb={2}
      className={styles.navbar}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex align="center" mr={5}>
          <Link href="/">
            <Heading as="h1" size="lg">
              <Image
                maxH={55}
                src={logoURL}
                alt={nombreLocal}
                title={nombreLocal}
              />
            </Heading>
          </Link>
        </Flex>
        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <DesktopNav />
        </Flex>
        <Flex display={{ base: "flex", md: "none" }}>
          <MobileNav />
        </Flex>
        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <Button onClick={toggleColorMode} size="l" p={5}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            {isAuthenticated ? (
              <Link className={styles.enlaces} onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link className={styles.enlaces} href="/admin">
                Login
              </Link>
            )}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

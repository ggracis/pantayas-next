import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Box, Text } from "@chakra-ui/react";
import Footer from "@/components/UI/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ScreenNet - Pantayas",
  description: "Aplicación web para el manejo de pantallas",
  openGraph: {
    title: "ScreenNet - Pantayas",
    description: "Aplicación web para el manejo de pantallas",
    authors: ["Gastón Gracis", "Sergio Pirraglia", "Matias "],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}

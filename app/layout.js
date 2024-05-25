import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "@/components/UI/Footer";
import AdmNavBar from "@/components/UI/AdmNavBar";
import Encabezado from "@/components/UI/Encabezado";

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
        <Providers>
          <AdmNavBar />
         
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

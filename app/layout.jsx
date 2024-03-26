import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header/Header";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Where in the World?",
  description: "Oficina NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

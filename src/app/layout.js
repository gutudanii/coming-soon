import { Inter } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AddisFinancial",
  description:
    "AddisFinancial is an innovative and forward-thinking financial services company inspired by the vibrant capital city of Ethiopia, Addis Ababa, and Toronto, Canada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

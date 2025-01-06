import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Corrected property name
});

export const metadata = {
  title: "Miguel Barbosa",
  description: "This is my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Header />
        {/*<StairTransition />*/}
        <PageTransition></PageTransition>
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}

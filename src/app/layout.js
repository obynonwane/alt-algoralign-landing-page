import "./globals.css";
import "../fonts/satoshi/WEB/css/satoshi.css";

import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const clashFont = localFont({
  src: [
    {
      path: "../fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Regular.woff2",
      // path: "../fonts/satoshi/WEB/fonts/Satoshi-Regular.woff2",
      // weight: "400",
      // style: "normal",
    },
  ],
  variable: "--font-clash",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${clashFont.variable} `}>
      {/* <Navbar /> */}
      <body>{children}</body>
      {/* <Footer /> */}
      <ToastContainer />
    </html>
  );
}

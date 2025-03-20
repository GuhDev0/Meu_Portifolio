import Header from "./header/page";
import Footer from "./footer/page";
import Link from 'next/link';
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

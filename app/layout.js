import Header from "./header/page";
import Footer from "./footer/page";
import Link from 'next/link';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';



export const metadata = {
  title: "Gustavo_Portifolio",
  description: "DEV.Gustavo_Portifolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

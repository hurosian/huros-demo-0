import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HUROS",
  description: "Timepiece Ownership Redefined",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
        <div className="">{children}</div>
      </body>
    </html>
  );
}

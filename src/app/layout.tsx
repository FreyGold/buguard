import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./_components/Navigation";

const InterFont = Inter({ subsets: ["latin"] });

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={`${InterFont.className}`}>
            <Navigation />
            {children}
         </body>
      </html>
   );
}

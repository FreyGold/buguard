import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../_components/Navigation";
import { Providers } from "./providers";

const InterFont = Inter({ subsets: ["latin"] });

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body
            className={`${InterFont.className} lg:px-24`}
            suppressHydrationWarning>
            <Providers>
               <Navigation />
               {children}
            </Providers>
         </body>
      </html>
   );
}

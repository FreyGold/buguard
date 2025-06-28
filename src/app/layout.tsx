import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/ui/Navigation";
import { Providers } from "./providers";
import { Metadata } from "next";

const InterFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: {
      default: "Buguard Blog",
      template: "%s | Buguard Blog",
   },
   description:
      "Buguard Blog shares expert articles, tutorials, and news on cybersecurity, programming, and technology. Stay updated with the latest insights and guides.",
   keywords: [
      "Buguard",
      "blog",
      "cybersecurity",
      "programming",
      "technology",
      "tutorials",
      "news",
      "guides",
      "articles",
   ],
   openGraph: {
      title: "Post Details | Buguard Blog",
      description:
         "Explore detailed blog posts on cybersecurity, programming, and tech trends. Stay updated with Buguard Blog.",
      type: "article",
      siteName: "Buguard Blog",
   },
   twitter: {
      card: "summary_large_image",
      title: "Post Details | Buguard Blog",
      description:
         "Discover the latest articles and tutorials on cybersecurity and technology at Buguard Blog.",
   },
};

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

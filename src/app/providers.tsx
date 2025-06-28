"use client";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
   {
      /*Why not just const queryClient = new QueryClient();?
      If you did that, a new instance would be created on every render, which is not what you want for a provider.
      This ensures queryClient is created only one time on mount */
   }
   const [queryClient] = useState(() => new QueryClient());
   return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
         <QueryClientProvider client={queryClient}>
            {children}
         </QueryClientProvider>
      </ThemeProvider>
   );
}

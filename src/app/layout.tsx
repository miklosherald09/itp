import type { Metadata } from "next";
import "./globals.css";
import { AuthProviders } from "@/auth/providers";
import { JotaiProvider } from "@/jotai/provider";
import { ReactQueryProvider } from "@/tanstack/provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { montserrat } from "@/utility/font";
import theme from "@/mui/theme";

export const metadata: Metadata = {
  title: "ITP",
  description: "Item Trading Platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <ReactQueryProvider>
              <JotaiProvider>
                <AuthProviders>
                  <CssBaseline />
                  {children}
                </AuthProviders>
              </JotaiProvider>
            </ReactQueryProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

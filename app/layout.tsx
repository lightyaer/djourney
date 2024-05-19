import type { Metadata } from "next";
import "@aws-amplify/ui-react/styles.css";

import "./globals.css";
import { Inter } from "next/font/google";
import { ConfigureAmplifyClientSide } from "@/components/composite/configure-amplify";
import { Navbar } from "@/components/composite/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "djourney",
  description: "log your workouts, log your journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigureAmplifyClientSide>
          <Navbar />
          {children}
        </ConfigureAmplifyClientSide>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ClientFooterWrapper from "./ClientFooterWrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IFMPC",
  description: "Generated by IFMPC",
};
interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={locale == "en" ? "ltr" : "rtl"}>
      <body className={inter.className}>
        {" "}
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            {children}

            <ClientFooterWrapper locale={locale} />
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import {ClerkProvider} from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "숲나들e 자동예약 서비스",
  description: "숲나들e 자동예약 서비스",
  icons:{
    icon: "/globe.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Head>
        <link rel="icon" href="/globe.svg" type="image/svg+xml" />
        <meta name="description" content="대한민국 자연휴양림 빈자리 실시간 모니터링 및 자동 예약 서비스, 숲나들e 연동" />
        <title>숲나들e 자동 예약 서비스</title>
      </Head>
      <html lang="ko">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

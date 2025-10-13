import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CHEA BUNLONG - Portfolio",
  description: "Portfolio of CHEA BUNLONG - Data Engineer & DevOps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

// const inter = Inter({ subsets: ['latin'] })

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
//       </head>
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }
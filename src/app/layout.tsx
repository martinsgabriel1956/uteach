import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: "--font-roboto",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ['300', '500'],
  variable: "--font-inter",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "uTeach",
  description: "Student Platform"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

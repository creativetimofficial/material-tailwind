import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}

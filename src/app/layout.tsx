import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Times Influential Media | India's Most Ambitious Media Agency",
  description: "We put your brand in the room where culture is made.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#C9952A] selection:text-[#0A0A0A]" suppressHydrationWarning>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

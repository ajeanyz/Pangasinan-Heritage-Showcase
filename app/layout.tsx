import type { Metadata } from "next";
import "./globals.css";
import "./theme.css";

const basePath = process.env.NODE_ENV === "production" ? "/pangasinan-heritage-showcase" : "";

export const metadata: Metadata = {
  title: "Pangasinan Heritage Digital Showcase",
  description: "Explore Pangasinan's iconic natural, cultural, and historic heritage sites.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

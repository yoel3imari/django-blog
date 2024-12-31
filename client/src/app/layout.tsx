import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "@/style/globals.css";

const playfairDisplay = Playfair_Display({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: `%s | Blogo`,
    default: "Blogo"
  },
  description: "Share blog posts with the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.className} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

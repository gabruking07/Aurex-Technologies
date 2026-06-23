import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppButton } from "@/components/whatsapp-button";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aurextechnologies.com"),
  title: {
    default: "Aurex Technologies | Modern Websites & Digital Products",
    template: "%s | Aurex Technologies"
  },
  description:
    "Aurex Technologies builds modern websites, web applications, e-commerce platforms, UI/UX systems, SEO foundations and maintenance plans for growing businesses.",
  keywords: [
    "Aurex Technologies",
    "website development",
    "web applications",
    "technology agency",
    "UI UX design",
    "SEO optimization"
  ],
  openGraph: {
    title: "Aurex Technologies",
    description: "Transforming ideas into digital products for ambitious businesses.",
    url: "https://aurextechnologies.com",
    siteName: "Aurex Technologies",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

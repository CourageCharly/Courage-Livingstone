import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk, Syne } from "next/font/google";
import { site } from "@/lib";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollProgress from "@/components/shared/scroll-progress";
import CustomCursor from "@/components/shared/custom-cursor";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#070807",
};

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    type: "website",
  },
  icons: { icon: "/images/logo-cl.png", apple: "/images/logo-cl.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`dark ${space.variable} ${syne.variable} ${jetbrains.variable} ${space.className}`}
    >
      <head>
        <meta name="color-scheme" content="light only" />
        <style href="btn-lime-lock" precedence="high">{`
          .btn-lime,
          .btn-lime:hover,
          .btn-lime:focus,
          .btn-lime:active,
          .btn-lime:visited {
            color-scheme: light only;
            -webkit-appearance: none;
            appearance: none;
            background-color: #c6f135;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='2'%3E%3Crect width='2' height='2' fill='%23c6f135'/%3E%3C/svg%3E"), linear-gradient(#c6f135, #c6f135);
            background-repeat: repeat, no-repeat;
            background-size: 2px 2px, 100% 100%;
            color: #101408;
            -webkit-text-fill-color: #101408;
            forced-color-adjust: none;
            filter: none;
          }
          .btn-ink {
            color: transparent;
            color-scheme: light only;
            forced-color-adjust: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='2'%3E%3Crect width='2' height='2' fill='%23101408'/%3E%3C/svg%3E");
            background-repeat: repeat;
            background-size: 2px 2px;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}</style>
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[90] focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <CustomCursor />
        <div className="flex min-h-screen min-w-0 flex-col bg-background">
          <Navbar />
          <main id="content" className="min-w-0 flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}

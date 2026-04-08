import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Inter } from "next/font/google";
import NavbarSticky from "@/components/NavbarSticky";
import FooterMultiColumn from "@/components/FooterMultiColumn";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "DHL Same Hour Delivery | When Every Minute Matters",
  description:
    "A conversion-focused DHL website for Same Hour Delivery—book urgent local delivery, request business quotes, and explore B2B/B2C options with live tracking and proof of delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable} font-sans bg-background text-foreground`}>
        <NavbarSticky
          logo="DHL Same Hour Delivery"
          navItems={[
            { label: "Home", href: "/" },
            { label: "1 Hour Delivery", href: "/1-hour-delivery" },
            { label: "B2B", href: "/b2b" },
            { label: "B2C", href: "/b2c" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Book Same Hour Delivery"
          ctaHref="/1-hour-delivery"
        />
        {children}
        <FooterMultiColumn
          brand="DHL Same Hour Delivery"
          description="Urgent local delivery with DHL reliability. Live tracking, proof of delivery, and rapid dispatch when every minute matters."
          columns={[
            {
              title: "Services",
              links: [
                { label: "1 Hour Delivery", href: "/1-hour-delivery" },
                { label: "B2B Solutions", href: "/b2b" },
                { label: "B2C Shipping", href: "/b2c" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "Home", href: "/" },
                { label: "About Service", href: "/1-hour-delivery" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Support",
              links: [
                { label: "Service Availability", href: "/contact" },
                { label: "Proof of Delivery", href: "/1-hour-delivery" },
                { label: "Business Quote Request", href: "/b2b" },
              ],
            },
          ]}
          copyright="© 2026 DHL International GmbH. Same Hour Delivery is subject to availability and local terms."
        />
      </body>
    </html>
  );
}

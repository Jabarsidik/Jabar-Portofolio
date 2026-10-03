import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jabar Sidik — Web Developer Karawang",
  description: "Jabar Sidik membantu bisnis membangun, memperbaiki, dan merawat website yang profesional, responsif, dan jelas.",
  keywords: ["Jabar Sidik", "web developer Karawang", "website bisnis", "landing page", "company profile", "website maintenance"],
  openGraph: {
    title: "Jabar Sidik — Web Developer Karawang",
    description: "Website bisnis, quick fix, dan maintenance dengan proses yang jelas.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="id"><body>{children}</body></html>; }
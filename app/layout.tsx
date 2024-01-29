import Script from 'next/script';
import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.css'

import "./globals.css";

export const metadata: Metadata = {
  title: "NC - Desinfestações",
  description: "Landing page",
  authors: [ { name: 'Nuno Silva' } ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'

import "./globals.css";

export const metadata: Metadata = {
  title: "NC - Desinfestações",
  description: "Landing page",
  authors: [ { name: 'Nuno Silva' } ],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}

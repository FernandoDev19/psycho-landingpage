import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isaura Florez - Psicologa",
  description:
    "Psicologa especialista en salud mental con consultorio en Barranquilla/Atlántico, Colombia. Agenda tu consulta hoy mismo.",
  keywords: [
    "psicologa",
    "salud mental",
    "barranquilla",
    "atlantico",
    "colombia",
    "consulta",
    "terapia",
    "psicologia",
    "bienestar",
    "emocional",
    "mental",
    "salud",
    "psicologo",
    "psicologa",
    "psicologia",
    "psicologa en barranquilla",
    "psicologa en soledad",
    "psicologa en galapa",
    "psicologa en puerto colombia",
    "psicologa en malambo",
    "psicologa en barranquilla",
    "psicologa en soledad",
    "psicologa en galapa",
    "psicologa en puerto colombia",
    "psicologa en malambo"
  ],
  openGraph: {
    title: "Isaura Florez - Psicologa",
    description: "Psicologa especialista en salud mental con consultorio en Barranquilla/Atlántico, Colombia. Agenda tu consulta hoy mismo.",
    url: "https://www.isauraflorez.com",
    siteName: "Isaura Florez",
    images: ["/imgs/isaura-florez-psi.webp"],
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col max-w-[2000px] mx-auto">{children}</body>
    </html>
  );
}

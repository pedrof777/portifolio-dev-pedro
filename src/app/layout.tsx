import { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const fontInter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro Ferreira | Desenvolvedor Full-Stack",
  description:
    "Desenvolvedor Full-Stack especialista em Java, Spring Boot, Next.js,Typescript, React entre outras tecnologias.Freelancer baseado no Brasil.",
  keywords: [
    "desenvolvedor",
    "java",
    "spring boot",
    "next.js",
    "freelancer",
    "full-stack",
  ],
  authors: [{ name: "Pedro Ferreira" }],
  openGraph: {
    title: "Pedro Ferreira | Desenvolvedor Full-Stack",
    description:
      "Desenvolvedor Full-Stack especialista em Java, Spring Boot, Next.js,Typescript, React entre outras tecnologias.Freelancer baseado no Brasil.",
    locale: "pt-BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={fontInter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

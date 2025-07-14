import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata = {
  title: "Denali Health - Pioneering the Future of Healthcare",
  description: "Advanced medical technology meets compassionate care. Experience healthcare that evolves with your needs and exceeds your expectations at Denali Health.",
  keywords: "healthcare, medical, hospital, doctors, specialists, patient care, medical technology, health services",
  authors: [{ name: "Denali Health" }],
  robots: "index, follow",
  openGraph: {
    title: "Denali Health - Pioneering the Future of Healthcare",
    description: "Advanced medical technology meets compassionate care. Experience exceptional healthcare at Denali Health.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

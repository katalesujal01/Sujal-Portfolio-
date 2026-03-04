import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Sujal Suhas Katale — Data Analyst",
  description:
    "Data Analyst portfolio — SQL, Python, Power BI. Futuristic neon analytics UI.",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="noise min-h-screen bg-bg text-white antialiased">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 ml-0 md:ml-64">
            {children}
          </main>
          <MobileNav />
        </div>
      </body>
    </html>
  );
}

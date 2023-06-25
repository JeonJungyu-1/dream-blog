import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Profile from "@/components/Profile";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "드림 블로그",
  description: "블로그 프로젝트",
};

const navData = [
  { href: "/", subject: "home" },
  { href: "/about", subject: "about" },
  { href: "/posts", subject: "posts" },
  { href: "/contact", subject: "contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <header className="flex justify-between items-center p-8 border-2 border-solid border-blue-950">
          <h1>Dream Blog</h1>
          <nav className="px-8">
            {navData.map((el, index) => (
              <Link key={index} href={el.href} className="px-8">
                {el.subject}
              </Link>
            ))}
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

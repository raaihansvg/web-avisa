import type { Metadata } from "next";
import "./globals.css";

const title = "Avisa Traghania | Industrial Engineering Portfolio";
const description = "Explore Avisa Traghania’s education, experience, leadership and skills as an Industrial Engineering undergraduate at Universitas Islam Indonesia.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website", locale: "en_US" },
  twitter: { card: "summary", title, description },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}

import { Providers } from './providers';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: "Nicol & Bernardo | Próximamente",
  description: "¡Nos casamos!",
  openGraph: {
    title: "Nicol & Bernardo",
    description: "¡Nos casamos!",
    images: [
      {
        url: "/nicol-y-bernardo/nb-bghero.jpg",
        width: 1200,
        height: 630,
        alt: "Nicol & Bernardo",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  icons: {
    icon: '/nb-favicon.svg',
    shortcut: '/nb-favicon.svg',
    apple: '/nb-favicon.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/nb-favicon.svg',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

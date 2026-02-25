import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
  
  return {
    metadataBase: new URL(baseUrl),
    title: 'Maprotech Construction LLC | Building Dreams',
    description: 'Transform your space with Maprotech Construction LLC. Expert remodeling, renovation, and construction services. Building dreams with quality craftsmanship.',
    keywords: ['construction', 'remodeling', 'renovation', 'kitchen design', 'bathroom design', 'home improvement'],
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
    },
    openGraph: {
      title: 'Maprotech Construction LLC | Building Dreams',
      description: 'Transform your space with expert construction and remodeling services.',
      images: ['/og-image.png'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Maprotech Construction LLC',
      description: 'Building Dreams - Expert Construction Services',
      images: ['/og-image.png'],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

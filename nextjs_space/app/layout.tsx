import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { I18nProvider } from '@/lib/i18n';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXTAUTH_URL || 'https://maprotechsas.abacusai.app';
  
  return {
    metadataBase: new URL(baseUrl),
    title: 'Maprotech Construction LLC | Building Dreams',
    description: 'Professional construction services in Houston, TX. Specializing in painting, roofing, tile work, plumbing, and full home remodeling. Quality craftsmanship guaranteed.',
    keywords: ['construction', 'remodeling', 'painting', 'roofing', 'tile work', 'plumbing', 'Houston', 'Texas', 'home improvement'],
    openGraph: {
      title: 'Maprotech Construction LLC | Building Dreams Into Reality',
      description: 'Professional construction services in Houston, TX. Quality craftsmanship guaranteed.',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: '/images/hero-bg.jpg',
          width: 1200,
          height: 630,
          alt: 'Maprotech Construction',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Maprotech Construction LLC',
      description: 'Professional construction services in Houston, TX.',
      images: ['/images/hero-bg.jpg'],
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
      </head>
      <body className={`font-sans antialiased bg-white text-dark`}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}

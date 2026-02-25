import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { headers } from 'next/headers';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const host = headersList.get('x-forwarded-host') || headersList.get('host') || '';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const baseUrl = host ? `${protocol}://${host}` : process.env.NEXTAUTH_URL || 'http://localhost:3000';

  return {
    metadataBase: new URL(baseUrl),
    title: 'Maprotech Construction LLC | Building Dreams',
    description: 'Transforming Ideas into Reality. Professional construction services in Houston, TX including painting, roofing, remodeling, tile work, and more.',
    keywords: 'construction, remodeling, renovation, Houston, Texas, painting, roofing, tile work, plumbing, carpentry',
    openGraph: {
      title: 'Maprotech Construction LLC | Building Dreams',
      description: 'Transforming Ideas into Reality. Professional construction services in Houston, TX.',
      images: ['/og-image.png'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Maprotech Construction LLC | Building Dreams',
      description: 'Transforming Ideas into Reality. Professional construction services in Houston, TX.',
    },
    icons: {
      icon: '/favicon.svg',
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

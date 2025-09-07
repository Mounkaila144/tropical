import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Tropical Massage Niamey - Centre de Bien-être Premium au Niger',
  description: 'Centre de massage professionnel à Niamey, Niger. Massage thérapeutique, kinésithérapie, épilation, drainage lymphatique, soins esthétiques. Quartier Recasement, 3ème latérite. Appelez +227 81 21 45 55',
  keywords: [
    'massage Niamey',
    'massage Niger',
    'kinésithérapie Niamey',
    'épilation Niamey',
    'drainage lymphatique Niger',
    'centre bien-être Niamey',
    'massage thérapeutique Niger',
    'soins esthétiques Niamey',
    'spa Niamey',
    'relaxation Niger',
    'massage professionnel Niamey',
    'kinésithérapeute Niger',
    'centre massage Niamey',
    'bien-être Niger',
    'massage femme Niamey',
    'massage homme Niger',
    'épilation définitive Niamey',
    'soins visage Niger',
    'pédicure Niamey',
    'manucure Niger',
    'tropical massage',
    'centre esthétique Niamey'
  ].join(', '),
  authors: [{ name: 'Tropical Massage' }],
  creator: 'Tropical Massage',
  publisher: 'Tropical Massage',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://tropical-massage.com',
    siteName: 'Tropical Massage',
    title: 'Tropical Massage - Centre de Massage Professionnel à Niamey, Niger',
    description: 'Centre de massage et kinésithérapie premium à Niamey. Services professionnels de massage, épilation, drainage lymphatique et soins esthétiques au Niger.',
    images: [
      {
        url: '/image/tropical-massage-niamey.jpg',
        width: 1200,
        height: 630,
        alt: 'Tropical Massage - Centre de bien-être à Niamey, Niger'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tropical Massage - Centre de Massage à Niamey, Niger',
    description: 'Centre de massage professionnel à Niamey. Massage thérapeutique, kinésithérapie, épilation et soins esthétiques au Niger.',
    images: ['/image/tropical-massage-niamey.jpg']
  },
  alternates: {
    canonical: 'https://tropical-massage.com'
  },
  other: {
    'geo.region': 'NE-8',
    'geo.placename': 'Niamey',
    'geo.position': '13.5116;2.1254',
    'ICBM': '13.5116, 2.1254'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta name="geo.region" content="NE-8" />
        <meta name="geo.placename" content="Niamey" />
        <meta name="geo.position" content="13.5116;2.1254" />
        <meta name="ICBM" content="13.5116, 2.1254" />
        <meta name="theme-color" content="#8B1538" />
        <meta name="msapplication-TileColor" content="#8B1538" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="tropical Massage" />
        <link rel="canonical" href="https://tropical-massage.com" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
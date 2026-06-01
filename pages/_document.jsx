import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="description" content="Kimiya Kamali – Persönliche Haartransplantation Beratung in Düsseldorf & Köln." />
        <meta property="og:site_name" content="Kimiya Hair" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kimiyahair.com" />
        <meta property="og:title" content="Kimiya Hair – Haartransplantation Beratung Düsseldorf" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:image" content="https://kimiyahair.com/og-image.jpg" />
        <meta name="twitter:image" content="https://kimiyahair.com/og-image.jpg" />
        <link rel="canonical" href="https://kimiyahair.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Vazirmatn:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

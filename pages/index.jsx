import Head from 'next/head';
import KimiyaHair from '../components/KimiyaHair';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Kimiya Hair – Haartransplantation Beratung Düsseldorf & Köln</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <KimiyaHair />
    </>
  );
}

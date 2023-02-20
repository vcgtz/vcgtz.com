import Head from 'next/head';
import MainPicture from '@/components/MainPicture';
import MainDescription from '@/components/MainDescription';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vicente Gutiérrez</title>
        <meta name="description" content="Vicente Gutiérrez Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <div className="px-6 py-6 md:py-16">
          <MainPicture />
          <MainDescription />
        </div>
      </main>
    </>
  );
}

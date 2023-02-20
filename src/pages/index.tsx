import Head from 'next/head';
import MainPicture from '@/components/MainPicture';
import MainContent from '@/components/MainContent';

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
        <div className="p-6">
          <MainPicture />
          <MainContent />
        </div>
      </main>
    </>
  );
}

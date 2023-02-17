import Head from 'next/head'

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
        <h1 className='text-4xl font-extrabold'>
          Hello&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500">
            World!
          </span>
        </h1>
        
      </main>
    </>
  )
}

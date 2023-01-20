import Head from 'next/head';

export default function Home(props:any) {
  return (
    <>
      <Head>
        <title>Home App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section>
        side nav
      </section>
      <section>
        right nav
      </section>
      <main>
        Home Page Change for 
      </main>
    </>
  )
}

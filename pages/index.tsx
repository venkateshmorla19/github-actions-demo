import Head from 'next/head';

export default function Home(props:any) {
  return (
    <>
      <Head>
        <title>Home App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <nav>
        Nav content
      </nav>
      <section>
        side nav
      </section>
      <main>
        Home Page Change 
        <h1>Header text</h1>
      </main>
    </>
  )
}

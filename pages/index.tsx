import Head from 'next/head';
import { useRef } from 'react'

export default function Home(props:any) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Head>
        <title>Home App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        Home page
      </main>
    </>
  )
}

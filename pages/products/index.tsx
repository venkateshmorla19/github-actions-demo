import { GetServerSidePropsContext, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Index: NextPage<any> = (props: any) => {
  const router = useRouter();
  const [skip, setSkip] = useState(0);
  const [products, setProducts] = useState<any[]>([]);
  console.log(props)
  useEffect(()=>{
    setProducts(prev=>[...prev,...props.products]);
  },[props.products])
  const loadMoreProducts = ()=>{
    router.push(`/products?limit=5&skip=${skip+1}`);
    setSkip(prev=>prev+1)
  }
  return (
    <>
      <Head>
        <title>Products Catalogue</title>
      </Head>
      <div>
      {
        products.map((product: any,index) => (
            <div style={{ border: '1px solid black',padding:'20px' }} key={product.id+index} >
              <div>{product.title}</div>
              <div>{product.description}</div>
              <Link href={`product/ssr/${product.id}`}>
                <button>ssr</button>
              </Link>
              <Link href={`product/client/${product.id}`}>
                <button>client</button>
              </Link>
            </div>
        ))
      }
    </div>
    <div>
      <button onClick={loadMoreProducts}>Load More</button>
    </div>
    </>
  )
}

export default Index;

Index.getInitialProps = async (context) => {
  const data = await (await fetch(`https://dummyjson.com/products?limit=5&skip=${context.query.skip||0}`)).json();
  return {
    ...data
  }
}

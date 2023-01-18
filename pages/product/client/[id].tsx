import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react'

const ProductDetails = (props:any) => {
  const [product, setProduct] = useState<any>({});
  const router = useRouter();
  console.log(router)
  const fetchProduct = useCallback(async ()=>{
    const data = await (await fetch(`https://dummyjson.com/products/${router.query.id}`)).json();
    setProduct(data);
  },[router]);

  useEffect(()=>{
    if(router.query.id){
        fetchProduct();
    }
  },[router.query,fetchProduct]);

  return (
    <>
        <Head>
            <title>{product.title}</title>
            <meta name="description" content={product.description}/>
        </Head>
        <div>
        <div>{product.title}</div>
        <div>{product.price}</div>
    </div>
    </>
  )
}

export default ProductDetails;

import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react'

const ProductDetails = (props: any) => {

    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
            </Head>
            <div>
                <div>{props.title}</div>
                <div>{props.price}</div>
            </div>
        </>
    )
}

export default ProductDetails;

export async function getServerSideProps(context: GetServerSidePropsContext<any>) {
    const data = await (await fetch(`https://dummyjson.com/products/${context.params.id}`)).json();
    return {
        props: {
            ...data
        }
    }
}
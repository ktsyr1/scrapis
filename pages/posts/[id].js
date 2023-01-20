import Head from 'next/head';
import { useState } from 'react'
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Image from 'next/image';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return { props: { postData } }
}
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return { paths, fallback: false }
}
export default function Post({ postData }) {

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <article>
                <Image src={'/images/'+postData.image} width={700} height={460}  />
                <h1  >{postData.title}</h1>
                <div  >
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}


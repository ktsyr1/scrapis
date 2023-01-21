import Head from 'next/head';
import Date from '../../theme/date';
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
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <article>
                <Image src={'/images/' + postData.image} alt={postData.title} width={700} height={460} />
                <h1  >{postData.title}</h1>
                <div  >
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </>
    )
}


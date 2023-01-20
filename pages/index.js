import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className='cards'>
                {allPostsData.map(({ id, date, title, image }) => (
                    <Link href={`/posts/${id}`} key={id}  className='card'>
                        <Image src={'/images/' + image} alt={title} width='300' height={'200'} />
                        <p> {title}</p>
                        <small>
                            <Date dateString={date} />
                        </small>
                    </Link>
                ))}
            </div>
        </Layout>
    )
}

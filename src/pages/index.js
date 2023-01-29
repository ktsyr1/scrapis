import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Date from '../theme/date';
import { getSortedPostsData } from '../lib/posts';
import SEO from 'lib/SEO';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return { props: { allPostsData } }
}

export default function Home({ allPostsData }) {
    return (
        <div> 
            <SEO />
            {/* Hero  */}
            <div className='cards'>
                {allPostsData.map((post) => <Card {...post} key={post.id} />)}
            </div>
        </div>
    )
}
function Card({ id, date, title, image }) {
    return (
        <Link href={`/posts/${id}`} passHref className='card'>
            <Image src={'/images/' + image} alt={title} width='300' height={'200'} />
            <p> {title}</p>
            <small>
                <Date dateString={date} />
            </small>
        </Link>
    )
}

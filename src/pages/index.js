import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Date from '../theme/date';
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
        < >
            <div className='cards'>
                {allPostsData.map(({ id, date, title, image }) => (
                    <Link href={`/posts/${id}`} passHref key={id} className='card'>
                        <Image src={'/images/' + image} alt={title} width='300' height={'200'} />
                        <p> {title}</p>
                        <small>
                            <Date dateString={date} />
                        </small>
                    </Link>
                ))}
            </div>
        </>
    )
}

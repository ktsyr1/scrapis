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
            <div className='aitem box grid p-4 space' style={{ maxWidth: 700, margin: '0 auto' }}>
                {/* content */}
                <div >
                    <h1>سكرابي</h1>
                    <p style={{ maxWidth: '250px' }}>اختر مسارك وتعلم ولدينا الكثير من الافكار نقوم بها معا</p>
                    <Link href={'/posts/web-dev'} className='btn ' >ابداء التعلم</Link>
                </div>
                {/* image */}
                <Image src={'/images/Hero.png'} alt='Hero image' loading="lazy" width={320} height={225} class="md-none sm-none" />
            </div>
            <div className='cards'>
                <h2 style={{ width: "100%" }}>اخر المقالات</h2>
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

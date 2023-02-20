import { BsCode } from 'react-icons/bs';
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
    let appListsInfo = [
        {
            title: 'البرمجة',
            about: '',
            url: '#',
            // Icon: BsCode
        }, {
            title: 'افكار المشاريع',
            about: '',
            url: '#'
        }, {
            title: 'العمل الحر',
            about: '',
            url: '#'
        }, {
            title: 'المنتجات',
            about: '',
            url: '#'
        }, {
            title: 'الخدمات',
            about: '',
            url: '#'
        }
    ]
    return (
        <div>
            <SEO />
            {/* Hero  */}
            <Hero />
            <br />
            <div className='cards'>
                <h2 style={{ width: "100%" }}>اهم الاقسام</h2>
                {appListsInfo.map(({ url, title, Icon }) => {
                    return (
                        <Link href={`/posts/${url}`} key={title} passHref style={{ width: '150px' }} className='aitem box h-8 j'>
                            {/* <Icon /> */}
                            <b> {title}</b>
                            {/* <p> {about} </p> */}
                        </Link>
                    )
                })}
            </div>
            <div className='cards'>
                <h2 style={{ width: "100%" }}>اخر المقالات</h2>
                {allPostsData.map((post) => <Card {...post} key={post.id} />)}
            </div>
        </div>
    )
}
function Hero() {
    let list = [
        'اختر مسارك وتعلم',
        'الكثير من الافكار المشاريع الابداعية',
        "ادوات تساعدك في بناء مشاريعك",
        "استشارات مختصة في مشاريع الويب",
        "ابداع لا حدود له"
    ]
    return (
        <div className='hero'>
            <div className='aitem box grid p-4 space' style={{ maxWidth: 700, margin: '0 auto' }}>
                {/* content */}
                <div className='box col space'>
                    <h1>
                        <b className='text-Ui' >سكر</b>
                        <b >ابي</b>
                    </h1>
                    <ul>
                        {list.map((a, i) => <li className='R' key={i}>{a}</li>)}
                    </ul>

                    <Link href={'/posts/web-dev'} className='btn ' >ابداء التعلم</Link>
                </div>
                {/* image */}
                <Image src={'/images/Hero.png'} alt='Hero image' loading="lazy" width={320} height={225} className="md-none sm-none" />
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

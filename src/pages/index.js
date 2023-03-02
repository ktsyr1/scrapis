
import Image from 'next/image';
import Link from 'next/link';
import Date from '../theme/date';
import { getSortedPostsData } from '../lib/posts';
import SEO from 'lib/SEO';
// icons 
import { BsCode, BsCodeSquare, BsMailbox } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { SiFreelancer } from 'react-icons/si';
import { MdProductionQuantityLimits, MdMiscellaneousServices } from 'react-icons/md';
export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return { props: { allPostsData } }
}

export default function Home({ allPostsData }) {
    let appListsInfo = [
        {
            title: 'البرمجة',
            about: '',
            url: '#dev',
            Icon: <BsCodeSquare />
        }, {
            title: 'افكار المشاريع',
            about: '',
            url: '#project',
            Icon: <GrProjects />
        }, {
            title: 'العمل الحر',
            about: '',
            url: 'posts/freelancer',
            Icon: <SiFreelancer />
        }, {
            title: 'المنتجات',
            about: '',
            url: '#product',
            Icon: <MdProductionQuantityLimits />
        }, {
            title: 'الخدمات',
            about: '',
            url: '#services',
            Icon: <MdMiscellaneousServices />
        }
    ]
    return (
        <div>
            <SEO />
            {/* Hero  */}
            <Hero />
            <br />
            <div className='cards' style={{ minHeight: '20rem' }}>
                <h2 style={{ width: "100%" }}>اهم الاقسام</h2>
                {appListsInfo.map(({ url, title, Icon }) => {
                    return (
                        <Link href={`/${url}`} key={title} passHref style={{ width: '150px' }} className='aitem box h-8 j col icon-home'>
                            {Icon}
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
    return (
        <div className='hero'>
            <div className='aitem box grid p-4 space' style={{ maxWidth: 700, margin: '0 auto' }}>
                {/* content */}
                <div className='box col space'>
                    <h1>
                        <b >منصة
                            <b className='text-Ui'> سكر</b>
                            ابي</b>
                    </h1>
                    <p>
                        انطلق في رحلة تعلم البرمجة واستكشف عددًا لا يحصى من أفكار المشاريع التقنية والأدوات القوية لإحياء مشاريعك. استفد من الاستشارات المتخصصة لمشاريعك القائمة على الويب وأطلق العنان لإبداع لا حدود له معنا.
                    </p>
                    <div className='newsletter'>
                        <BsMailbox />
                        <input placeholder='القائمة البريدية' />
                        <button className='btn' >اشتراك</button>
                    </div>
                    {/* <Link href={'/posts/web-dev'} className='btn ' >ابداء التعلم</Link> */}
                </div>
                {/* image */}
                {/* <Image src={'/images/Hero.png'} alt='Hero image' loading="lazy" width={320} height={225} className="md-none sm-none" /> */}
            </div>
        </div >
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

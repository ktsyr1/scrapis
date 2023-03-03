import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import menu from '../../data/lists/menu.json'
import footer from '../../data/lists/footer.json'
export const siteTitle = 'Scrapis blog'
{/* <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />  */}
export default function Layout({ children, home }) {

    return (
        <>
            <nav>
                <header>
                    <Link href='/' passHref className='box row' style={{ fontSize: 'xx-large' }}>
                        <b className='text-Ui' >سكر</b>
                        <b style={{ color: '#000' }}>ابي</b>
                    </Link>

                    <ul>
                        {menu.map((item) =>
                            <li key={item.slug}> <Link href={item.slug}>{item.title}</Link> </li>)}

                    </ul>
                </header>
            </nav>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
function Footer() {
    return (
        <footer>
            <div className='box grid'>
                <div className='logo'  >
                    <div className=' logo-text' style={{ fontSize: 'large' }}>
                        <b className='text-Ui' >سكر</b>
                        <b style={{ color: '#000' }}>ابي</b>
                    </div>
                    <div className='logo-footer '>
                        <p style={{ marginLeft: '10px' }}>    برعاية  </p>
                        <a href='https://ktsyr1.netlify.app' >
                            قتيبة
                        </a>
                    </div>
                </div>
                {/* <div className='list' >
                    <b>روابط سريعة</b>
                    <Lists data={footer.fast} />
                </div> */}

            </div>
            <div className='@'>جميع الحقوق محفوظة  scrapi lab @2023</div>
        </footer>
    )
}
function Lists({ data }) {
    return (
        <>
            {data.map(({ title, slug }) => <Link href={slug} key={slug}>{title}</Link>)}
        </>
    )
}
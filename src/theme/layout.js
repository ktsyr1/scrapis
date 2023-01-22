import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import menu from '../../data/lists/menu.json'
export const siteTitle = 'Scrapis blog'

export default function Layout({ children, home }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <title>{siteTitle} </title>
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <nav>
                <header>
                    <Link href='/' passHref className='box row' style={{ fontSize: 'xx-large' }}>
                        <b >سكر</b>
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
            <footer>
                footer
                            </footer>
        </>
    )
}

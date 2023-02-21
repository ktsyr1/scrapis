import Date from '../../theme/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Image from 'next/image';
import SEO from 'lib/SEO';
import { useEffect, useState } from 'react';
import Card, { Courses } from 'theme/card';
import { GrEdit } from 'react-icons/gr';

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return { paths, fallback: false }
}
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return { props: { postData } }
}
export default function Post({ postData }) {
    let [time, setTime] = useState(Math.floor(postData.contentHtml.split(' ').length / 1.5 / 60))
    // document.getElementById("myElement")
    return (
        <article>
            <SEO
                title={postData.title}
                image={postData?.image}
            />
            <Image src={'/images/' + postData.image} alt={postData.title} width={700} height={460} />
            <h1  >{postData.title}</h1>
            <div className='box row aitem ' >
                <Icons.date />
                <Date dateString={postData.date} />
                <p className='aitem box j mr-3 my-2'>
                    <Icons.read />
                    <span style={{ color: time < 2 ? '#03a9f4' : '#00d500' }}>{time} دقيقة</span>
                </p>
                <GrEdit class="p-0" onClick={() => document.querySelector("article").contentEditable = true} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <Courses data={postData?.courses} />
        </article>
    )
}

class Icons {
    static date() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 30">
                <g transform="translate(-2 -2)">
                    <path d="M32.25,6H29V8h3V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6Z" />
                    <path d="M8,14h2v2H8Z" />
                    <path d="M14,14h2v2H14Z" />
                    <path d="M20,14h2v2H20Z" />
                    <path d="M26,14h2v2H26Z" />
                    <path d="M8,19h2v2H8Z" />
                    <path d="M14,19h2v2H14Z" />
                    <path d="M20,19h2v2H20Z" />
                    <path d="M26,19h2v2H26Z" />
                    <path d="M8,24h2v2H8Z" />
                    <path d="M14,24h2v2H14Z" />
                    <path d="M20,24h2v2H20Z" />
                    <path d="M26,24h2v2H26Z" />
                    <path d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z" />
                    <path d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z" />
                    <path d="M13,6H23V8H13Z" />
                </g>
            </svg>
        )
    } static date() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 30">
                <g transform="translate(-2 -2)">
                    <path d="M32.25,6H29V8h3V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6Z" />
                    <path d="M8,14h2v2H8Z" />
                    <path d="M14,14h2v2H14Z" />
                    <path d="M20,14h2v2H20Z" />
                    <path d="M26,14h2v2H26Z" />
                    <path d="M8,19h2v2H8Z" />
                    <path d="M14,19h2v2H14Z" />
                    <path d="M20,19h2v2H20Z" />
                    <path d="M26,19h2v2H26Z" />
                    <path d="M8,24h2v2H8Z" />
                    <path d="M14,24h2v2H14Z" />
                    <path d="M20,24h2v2H20Z" />
                    <path d="M26,24h2v2H26Z" />
                    <path d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z" />
                    <path d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z" />
                    <path d="M13,6H23V8H13Z" />
                </g>
            </svg>
        )
    }
    static read() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="35.962" height="35.965" viewBox="0 0 35.962 35.965">
                <path d="M28.123,35.965A7.853,7.853,0,0,1,20.256,28.1a7.853,7.853,0,0,1,7.867-7.867A7.853,7.853,0,0,1,35.99,28.1a7.853,7.853,0,0,1-7.867,7.867Zm4.5-8.991H29.247V23.6A1.124,1.124,0,0,0,27,23.6v4.5a1.053,1.053,0,0,0,.263.72,1.105,1.105,0,0,0,.65.369.491.491,0,0,0,.211.035h4.5a1.124,1.124,0,0,0,0-2.248ZM16.884,29.222H10.141a1.124,1.124,0,0,1,0-2.248h6.743a1.124,1.124,0,0,1,0,2.248Zm-6.743-6.743h6.743a1.124,1.124,0,0,1,0,2.248H10.141a1.124,1.124,0,0,1,0-2.248ZM21.38,20.231H10.141a1.124,1.124,0,0,1,0-2.248H21.38a1.124,1.124,0,0,1,0,2.248Zm4.5-4.5H10.141a1.124,1.124,0,0,1,0-2.248H25.876a1.124,1.124,0,0,1,0,2.248Zm0-8.991H10.141A1.141,1.141,0,0,1,9.017,5.62,1.141,1.141,0,0,1,10.141,4.5H25.876A1.141,1.141,0,0,1,27,5.62a1.141,1.141,0,0,1-1.124,1.124Zm0,4.5H10.141a1.124,1.124,0,0,1,0-2.248H25.876a1.124,1.124,0,0,1,0,2.248Zm3.372-7.867a1.141,1.141,0,0,0-1.124-1.124H5.646a1.078,1.078,0,0,0-.79.334,1.085,1.085,0,0,0-.334.79V4.5A2.22,2.22,0,0,1,6.77,6.745,2.22,2.22,0,0,1,4.522,8.993v2.248a2.26,2.26,0,0,1,1.6,3.846,2.172,2.172,0,0,1-1.6.65v2.248a2.172,2.172,0,0,1,1.6.65,2.151,2.151,0,0,1,.65,1.58,2.211,2.211,0,0,1-.65,1.6,2.139,2.139,0,0,1-1.6.667v2.248a2.172,2.172,0,0,1,1.6.65,2.151,2.151,0,0,1,.65,1.58,2.211,2.211,0,0,1-.65,1.6,2.139,2.139,0,0,1-1.6.667v1.124a1.141,1.141,0,0,0,1.124,1.124H20.257v2.248H4.522a2.159,2.159,0,0,1-1.58-.667,2.159,2.159,0,0,1-.667-1.58V29.224a2.159,2.159,0,0,1-1.58-.667,2.18,2.18,0,0,1-.667-1.6,2.121,2.121,0,0,1,.667-1.58,2.193,2.193,0,0,1,1.58-.65V22.481a2.159,2.159,0,0,1-1.58-.667,2.18,2.18,0,0,1-.667-1.6,2.121,2.121,0,0,1,.667-1.58,2.193,2.193,0,0,1,1.58-.65V15.738a2.188,2.188,0,0,1-1.58-.65,2.248,2.248,0,0,1,0-3.2,2.188,2.188,0,0,1,1.58-.65V8.994a2.188,2.188,0,0,1-1.58-.65,2.144,2.144,0,0,1-.667-1.6,2.144,2.144,0,0,1,.667-1.6,2.188,2.188,0,0,1,1.58-.65V2.248A2.144,2.144,0,0,1,2.942.65,2.188,2.188,0,0,1,4.522,0H29.248a2.188,2.188,0,0,1,1.58.65,2.144,2.144,0,0,1,.667,1.6V17.983H29.247V3.372Z" transform="translate(-0.028)" />
            </svg>
        )
    }
}
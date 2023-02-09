import Date from '../../theme/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Image from 'next/image';
import SEO from 'lib/SEO';
import { useEffect, useState } from 'react';
import Card, { Courses } from 'theme/card';

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return { paths, fallback: false }
}
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return { props: { postData } }
}
export default function Post({ postData }) {
    let [length, setLength] = useState(0)
    useEffect(() => {
        let res = document.querySelector('article').innerText.split(' ').length
        setLength(res)

    }, [])
    return (
        <article>
            <SEO
                title={postData.title}
                image={postData?.image}
            />
            <Image src={'/images/' + postData.image} alt={postData.title} width={700} height={460} />
            <h1  >{postData.title}</h1>
            <div  >
                <Date dateString={postData.date} />
            </div>
            <p style={{ color: length < 350 ? 'red' : '#00d500' }}>عدد الكلمات {length}</p>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <Courses data={postData.courses} />
        </article>
    )
}


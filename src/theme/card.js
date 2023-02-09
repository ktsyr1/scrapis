
import Image from 'next/image';
import Link from 'next/link';
import Date from '../theme/date';

export default function Card({ id, date, title, image }) {
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
/**
 * 
 * @param {{ data }} param0 
 * @returns 
 */
export function Courses({ data }) {
    return (
        <>
            <h2>الكورسات التعليمية</h2> 
            <div className='cards ' >
                {data?.map((one, i) => <Course key={i} {...one} />)}
            </div>
        </>
    )
}
export function Course({ title, mr, href, note }) {
    let domian = href.replace('https://', '').replace('http://', '').replace('www.', '').split('/')[0]
    return (
        <Link href={`${href}`} passHref className='card ui p'>
            <b> {title}</b>
            <small>{domian} - {mr} </small>
            <p> {note} </p>
        </Link>
    )
}

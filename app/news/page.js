import Link from "next/link";

export default function NewsPage(){
    return <>
    <h1>News Page</h1>
    <ul>
        <li>
            <Link href="/news/1">First News</Link>
        </li>
        <li>
            <Link href="/news/2">Second News</Link>
        </li>
        <li>
            <Link href="/news/3">Third News</Link>
        </li>
    </ul>
    </>
}
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";


export default function NewsDetailPage({ params }) {
    const newsSlug = params.slug;
    const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);

    if(!newsItem){
        notFound();
    }
    
    return <article className="news-article">
        <header>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <h1>News Detail Page</h1>
            <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>{newsItem.content}</p>
    </article>
}
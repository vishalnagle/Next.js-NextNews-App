import Link from "next/link";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import NewsList from "@/components/news-list";

export default async function FilteredNewsPage({ params }) {
    // [[...filter]] dynamic folder name is used for catch all route'

    const filter = params.filter;
    const selectedYear = filter?.[0]
    const selectedMonth = filter?.[1]


    let news;
    let links = await getAvailableNewsYears()


    if (selectedYear && !selectedMonth) {
        news = await getNewsForYear(selectedYear)
        links = getAvailableNewsMonths(selectedYear)
    }

    if (selectedYear && selectedMonth) {
        news = await getNewsForYearAndMonth(selectedYear, selectedMonth)
        links = []
    }

    let newsContent = <p>No news found for the selected period.</p>

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }

    const availableYears = await getAvailableNewsYears()


    if (selectedYear && !availableYears.includes(selectedYear) ||
        selectedMonth && !getAvailableNewsMonths(selectedYear).includes(selectedMonth)) {
        throw new Error("Invalid filter.")
    }

    return <>
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) => {
                        const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`
                        return <li>
                            <Link href={href}>{link}</Link>
                        </li>
                    })}
                </ul>
            </nav>
        </header>
        {newsContent}
    </>

}
import { getArticlesMeta } from "@/lib/articleSupport"
import ListItem from "@/app/components/article/ListItem"
import Link from "next/link"

export const revalidate = 86400

type Props = {
    params: {
        tag: string
    }
}

export async function generateStaticParams() {
    const artiles = await getArticlesMeta() //deduped!

    if (!artiles) return []

    const tags = new Set(artiles.map(article => article.tags).flat())

    return Array.from(tags).map((tag) => ({ tag }))
}

export function generateMetadata({ params: { tag } }: Props) {

    return {
        title: `Articles about ${tag}`
    }
}

export default async function TagPostList({ params: { tag } }: Props) {
    const articles = await getArticlesMeta() //deduped!

    if (!articles) return <p className="mt-10 text-center">Sorry, no posts available.</p>

    const tagPosts = articles.filter(article => article.tags.includes(tag))

    if (!tagPosts.length) {
        return (
            <div className="text-center">
                <p className="mt-10">Sorry, no posts for that keyword.</p>
                <Link href="/">Back to Home</Link>
            </div>
        )
    }

    return (
        <>
            <h2 className="text-3xl mt-4 mb-0">Results for: #{tag}</h2>
            <section className="mt-6 mx-auto max-w-2xl">
                <ul className="w-full list-none p-0">
                    {tagPosts.map(article => (
                        <ListItem key={article.id} meta={article} />
                    ))}
                </ul>
            </section>
        </>
    )
}